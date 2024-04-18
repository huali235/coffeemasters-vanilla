import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadMenu } from "./services/Menu.js";
import Router from "./services/Router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadMenu();
  app.router.init();
});