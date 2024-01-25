import RecipeView from './views/recipeview.js';
import searchView from './views/SearchView.js';
import * as model from './model.js';
// import icons from '../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeview from './views/recipeview.js';
import ResultsView from './views/resultsView.js';
import View from './views/View.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import BookMarksView from './views/bookmarksView.js';
import bookmarksView from './views/bookmarksView.js';
import AddRecipeView from './views/addRecipeView.js';
import addRecipeView from './views/addRecipeView.js';
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    RecipeView.renderSpinner(recipeContainer);
    resultsView.update(model.getSearchResultPage());
    bookmarksView.update(model.state.bookmarks);
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
    // console.log(model.state.recipe);
    // const { recipe } = model.state;
    // console.log(recipe);
  } catch (err) {
    recipeview.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    // ResultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    //Load search result
    await model.loadSearchResults(query);
    // Render Search results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage());
    // console.log(model.state.search.results);
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};
const controlPagination = function (goToPage) {
  // Render New results
  resultsView.render(model.getSearchResultPage(goToPage));
  // Render New pagination buttons
  paginationView.render(model.state.search);
};
const controlUpdateServings = function (newServings) {
  // update the recipe servings // newServings = updateTo in controller
  model.updatingServings(newServings);
  // update the recipe view
  // recipeview.render(model.state.recipe);
  recipeview.update(model.state.recipe);
};
const controlAddBookMark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookMark(model.state.recipe);
    console.log(model.state.bookmarks);
  } else {
    model.deleteBookMark(model.state.recipe.id);
  }
  recipeview.update(model.state.recipe);
  BookMarksView.render(model.state.bookmarks);
};
const controlBookmark = function () {
  bookmarksView.render(model.state.bookmarks);
};
const controlAddRecipe = async function (newRecipe) {
  // console.log(newRecipe);
  try {
    addRecipeView.renderSpinner();
    // upload the new recipe
    await model.uploadRecipe(newRecipe);
    // render recipe
    recipeview.render(model.state.recipe);
    bookmarksView.render(model.state.bookmarks);
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // success message
    addRecipeView.renderMessage('Recipe was successfully uploaded');

    // close window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, 2500);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};
const init = function () {
  bookmarksView.addHandlerRender(controlBookmark);
  recipeview.addHandlerRendeer(controlRecipes);
  recipeview.addHanlerUpdateServings(controlUpdateServings);
  recipeview.addHandlerBookMarked(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHanlerUpload(controlAddRecipe);
};
init();
