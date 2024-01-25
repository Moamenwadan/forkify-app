import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { RES_PER_PAGE, UPLOAD_KEY } from './config.js';
import { AJAX } from './helper.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}/${id}?key=${UPLOAD_KEY}`);

    let { recipe } = data.data;
    console.log(recipe);
    // console.log(recipe);
    state.recipe = {
      id: recipe.id,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      imageUrl: recipe.image_url,
      publisher: recipe.publisher,
      servings: recipe.servings,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
      ...(recipe.key && { key: recipe.key }),
    };
    if (state.bookmarks.some(el => el.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.error(`${err}🤦‍♀️🤦‍♀️🤦‍♀️`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${UPLOAD_KEY}`);
    console.log(data);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        imageUrl: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;
  return state.search.results.slice(start, end);
};
export const updatingServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (newServings * ing.quantity) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};
const storeBookmarksInLocalStorage = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
export const addBookMark = function (recipe) {
  // add recipe  to bookmarks array
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  storeBookmarksInLocalStorage();
};
export const deleteBookMark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  storeBookmarksInLocalStorage();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

export const uploadRecipe = async function (newRecipe) {
  try {
    console.log(newRecipe);
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        console.log(ingArr);
        // console.log(ing[1].replaceAll(' ', '').split(','))
        const [quantity, unit, description] = ingArr;
        if (ingArr.length !== 3)
          throw new Error(
            'wrong ingrediant format ! please use correct format'
          );
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    console.log(ingredients);
    const recipeAPI = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: newRecipe.cookingTime,
      id: newRecipe.id,
      servings: newRecipe.servings,
      ingredients: ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${UPLOAD_KEY}`, recipeAPI);
    console.log(data);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      imageUrl: recipe.image_url,
      publisher: recipe.publisher,
      servings: recipe.servings,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
      ...(recipe.key && { key: recipe.key }),
      // key: recipe.key ? recipe.key : '',
    };
    console.log(state.recipe);
    addBookMark(state.recipe);
  } catch (err) {
    throw err;
  }
};
