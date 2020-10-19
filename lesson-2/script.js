const countriesList = document.getElementById('country')

function initialize(countriesData) {
  let countries = countriesData
  let options = ""
  for (let i = 0; i < countries.length; i++) {
    options += `<option value='${ countries[i].alpha3Code } '` + (countries[i].name == 'Viet Nam' ? 'selected' : '') + `>${ countries[i].name }</option>`
  }

  countriesList.innerHTML = options
}

fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => initialize(data))
  .catch(err => console.log('Error: ', err))