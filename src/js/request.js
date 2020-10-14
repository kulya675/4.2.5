const fetchResponse = async function (searchValue) {
  await fetch(`https://api.github.com/search/repositories?q=${searchValue}`, {
    method: "GET",
    headers: { "Content-Type": "application/vnd.github.mercy-preview+json" },
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};

export default fetchResponse;
