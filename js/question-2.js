//Question 2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c0972dcb4927489ea252f8533298389e";

const resultsContainer = document.querySelector(".games");

async function getGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const games = results.results;
    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }
      resultsContainer.innerHTML += `<div class="game">${games[i].name}<img src=${games[i].background_image}><p>Rating: ${games[i].rating}</p><p>Tags: ${games[i].tags.length}</div>`;
    }
  } catch (error) {
    console.log("Error occurred");
    resultsContainer.innerHTML = displayError("Something went wrong");
  }
}

getGames();
