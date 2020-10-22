import * as suggest from "./searchSuggest";
import * as elements from "./elements";
import debounce from "./debounce";

const responseHandler = (response) => {
  elements.suggestList.append(suggest.create(response));
  for (let i = 0; i < elements.suggestItems.length; i++) {
    let item = elements.suggestItems[i];
    item.addEventListener("click", (e) => {
      suggest.choose(e.target);
      elements.searchBar.value = "";
      elements.suggestList.innerHTML = "";
    });
  }
};

const fetchResponse = async function (searchValue) {
  await fetch(`https://api.github.com/search/repositories?q=${searchValue}`, {
    method: "GET",
    headers: { "Content-Type": "application/vnd.github.mercy-preview+json" },
  })
    .then((response) => response.json())
    .then(responseHandler);
};

const debounceFn = debounce(
  async () => await fetchResponse(elements.searchBar.value),
  500
);

elements.searchBar.addEventListener("input", (e) => {
  elements.suggestList.innerHTML = "";
  return debounceFn();
});

export default fetchResponse;
