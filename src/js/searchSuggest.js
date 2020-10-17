import { info } from "autoprefixer";
import * as elements from "./elements";

function Repository(item) {
  this.name = item.dataset.name;
  this.owner = item.dataset.owner;
  this.stars = item.dataset.stars;
}

const createSuggest = function (response) {
  let suggestList = new DocumentFragment();
  const suggestArr = [];

  response.items.forEach((elem) => {
    let item = document.createElement("li");
    item.classList.add("suggest-item");

    item.textContent = elem.name;

    item.dataset.name = elem.name;
    item.dataset.owner = elem.owner.login;
    item.dataset.stars = elem.stargazers_count;

    suggestArr.push(item);

    if (suggestArr.length === 5) {
      suggestList.append(...suggestArr);
      return suggestList;
    }
  });
  return suggestList;
};

const chooseSuggest = function (suggestItem) {
  const repCardData = new Repository(suggestItem);
  let card = document.createElement("li");
  let cardInfo = document.createElement("div");
  let closeButton = document.createElement("button");
  let infoHtml = `<span class="info-name">Name: ${repCardData.name}</span>
    <span class="info-owner">Owner: ${repCardData.owner}</span>
    <span class="info-stars">Stars: ${repCardData.stars}</span>`;

  card.classList.add("rep-card");
  cardInfo.classList.add("card-info");
  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  });

  cardInfo.insertAdjacentHTML("afterbegin", infoHtml);
  card.insertAdjacentElement("afterbegin", cardInfo);
  card.insertAdjacentElement("beforeend", closeButton);

  elements.repList.insertAdjacentElement("beforebegin", card);
};

export { createSuggest as create, chooseSuggest as choose };
