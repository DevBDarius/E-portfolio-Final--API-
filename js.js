// API key: 8af22d65
// API request format: https://www.omdbapi.com/?apikey=8af22d65&s=[moviename]
// Parameters:
// s - input title, output 10 first search results
// t - input title, output movie details
// page - input N, output Nth page of search result


//KNOWN ISSUES
// 1. printSearchQuery activates twice when pressing search


let input;

function handleSearchQuery() {
  input = document.querySelector(".main__searchbox--input").value;
  console.log('Query activated: ' + input);

  input ? activateSearch(input) : console.log('Empty query; doing nothing');
}

function activateSearch(searchQuery) {
  moveSearchbarUp();
  renderMovies(searchQuery);
}

function moveSearchbarUp() {
  // another way to do this: (but then u need to modify css, just target move up directly)
  // document.querySelector('.main__wrapper').classList += ' move-up'
  document.body.classList += ' move-up'
}

async function renderMovies(searchQuery) {
  // const data = await fetchAndConvertFromAPI(searchQuery);

  // TESTING
  const data = fakeData;
  // console.log(data);

  // console.log(data.Search);
  // console.log(data.Search[0]);
  // console.log(data.Search[0].Title);

  const movies = data.Search.map((e) => {
    console.log(e.Poster);
    return `<div class="movie">
      <img src="${getPoster(e.Poster)}" alt="">
      <h3>${e.Title} (${e.Year}</h3>
      <span class="movie-type">${e.Type}</span>
    </div>`
  }).join('')
  
  
  const movieContainer = document.querySelector('.movie-list');
  movieContainer.innerHTML = movies;
}

async function fetchAndConvertFromAPI(searchQuery) {
  const rawData = await fetch(`https://www.omdbapi.com/?apikey=8af22d65&s=${searchQuery}`);
  return await rawData.json();
}

function getPoster(url) {
  return (url === "N/A") ? './default-movie.png' : url;
}

const fakeData = {
  "Search": [
    {
      "Title": "Last Duel: Inter Planet War 2012",
      "Year": "1988",
      "imdbID": "tt2234788",
      "Type": "game",
      "Poster": "N/A"
    },
    {
      "Title": "Inter-Mem: Pilot",
      "Year": "2012",
      "imdbID": "tt2435356",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Inter-mezzo",
      "Year": "2013",
      "imdbID": "tt2643728",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Inter-Spaces",
      "Year": "2013",
      "imdbID": "tt2802396",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Inter-Polytechnic Championship Sports",
      "Year": "1903",
      "imdbID": "tt2824842",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Inter Sports",
      "Year": "2010–2011",
      "imdbID": "tt2851242",
      "Type": "series",
      "Poster": "N/A"
    },
    {
      "Title": "Inter View",
      "Year": "1996",
      "imdbID": "tt3579348",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Inter-City 125",
      "Year": "1976",
      "imdbID": "tt4088234",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODVkMDFlNDUtYjRjNC00ZTA5LWE2OGQtYmFhM2Y4MWJkMjNlXkEyXkFqcGdeQXVyMTQwMzQ1MA@@._V1_SX300.jpg"
    },
    {
      "Title": "Inter Vitae",
      "Year": "2017",
      "imdbID": "tt5263464",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Inter Arma: The Summer Drones",
      "Year": "2016",
      "imdbID": "tt6059862",
      "Type": "movie",
      "Poster": "N/A"
    }
  ],
  "totalResults": "73",
  "Response": "True"
}
