var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload =  function () {
let value = (JSON.parse(this.response));
console.log("-------------------------------------------------------------------------------------");
console.log("Question 1a : Get all the countries from Asia continent /region using Filter function");
console.log("-------------------------------------------------------------------------------------");  
value.filter( (data) => 
{
	if(data.region ==='Asia' || data.continents === 'Asia')
  {
		console.log('Country Name : ', data.name.common);
  }
});
}

var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload =  function () {
let value = (JSON.parse(this.response));

console.log("------------------------------------------------------------------------------------------------");
console.log("Question 1b : Get all the countries with a population of less than 2 lakhs using Filter function");
console.log("------------------------------------------------------------------------------------------------");
  
value.filter( (data) => 
{
	if(data.population < 200000)
  {
		console.log('Country Name : ', data.name.common);
  }
});
}

var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload =  function () {
var value = (JSON.parse(this.response));

console.log("-------------------------------------------------------------------------------------");
console.log("Question 1c : Print the following details name, capital, flag, using forEach function");
console.log("-------------------------------------------------------------------------------------");

value.forEach( (data) =>
{
		console.log('Country Name : ', data.name.common);
		console.log('Capital : ', data.capital);
		console.log('Flag : ', data.flag);
});
}

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
    console.log("---------------------------------------------------------------------------");
    console.log("Question 1d : Print the total population of countries using reduce function");
    console.log("---------------------------------------------------------------------------");

  var countryData = JSON.parse(this.response);
  const totalPopulation = countryData.reduce(
    (accumulator, country) => accumulator + country.population,
    0
  );
  console.log("Total population of countries:", totalPopulation);
};


var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.com/v3.1/all')
req.send();

req.addEventListener('load', function(){
    
console.log("----------------------------------------------------------------");
console.log("Question 1e : Print the country that uses US dollars as currency");
console.log("----------------------------------------------------------------");
  let value = loop(JSON.parse(this.response));
  function loop(value)
  {
  	for(let x = 0; x < value.length; x++)
    {    	
    	if(value[x].currencies)
      {
        for(let i in value[x].currencies)
        {
        	if(value[x].currencies[i].name === 'United States dollar')
          {
          console.log(value[x].name.common)	
          }
        }      	
      }
    }
  }
});

