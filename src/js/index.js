import "../scss/style.scss";
import debounce from "./debounce";

const searchBar = document.querySelector(".search-input");

const fetchResponse = async function () {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => console.log(res));
};

searchBar.addEventListener("keyup", (e) => {
  const debounceFn = debounce(async () => await fetchResponse(), 500);
  return debounceFn();
});
