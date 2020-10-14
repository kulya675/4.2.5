import "../scss/style.scss";
import debounce from "./debounce";
import fetchResponse from "./request";

const searchBar = document.querySelector(".search-input");

const debounceFn = debounce(
  async () => await fetchResponse(searchBar.value),
  500
);

searchBar.addEventListener("keyup", (e) => {
  return debounceFn();
});
