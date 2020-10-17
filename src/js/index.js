import "../scss/style.scss";
import * as elements from "./elements";
import debounce from "./debounce";
import fetchResponse from "./request";

const debounceFn = debounce(
  async () => await fetchResponse(elements.searchBar.value),
  500
);

elements.searchBar.addEventListener("input", (e) => {
  elements.suggestList.innerHTML = "";
  return debounceFn();
});
