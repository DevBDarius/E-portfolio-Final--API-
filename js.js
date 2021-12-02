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

  input ? activateSearch() : console.log('Empty query; doing nothing');
}

function activateSearch(searchQuery) {
  moveSearchbarUp();


}

function moveSearchbarUp() {
  document.querySelector('.main__wrapper').classList += ' move-up'
}


