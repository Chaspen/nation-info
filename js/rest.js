var request = new XMLHttpRequest()

request.open('GET', 'http://restcountries.eu/rest/v2/name/sweden', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
    data.forEach(nation => {
        document.getElementById("name").innerHTML = nation.name + "/" + nation.nativeName
        document.getElementById("lang").innerHTML = nation.languages[0].name + "/" + nation.languages[0].nativeName
        document.getElementById("currency").innerHTML = nation.currencies[0].name
        document.getElementById("region").innerHTML = nation.subregion + ", in the continent of " + nation.region
        document.getElementById("capital").innerHTML = nation.capital
        document.getElementById("population").innerHTML = nation.population
        document.getElementById("timezone").innerHTML = nation.timezones
        document.getElementById("area").innerHTML = nation.area
        document.getElementById("borders").innerHTML = nation.borders
        
        
    })
} else {
    console.log(arr.some(item => _.isEqual(item, result)));
    }
}

request.send()