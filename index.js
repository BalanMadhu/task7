// Fetch the data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // 1. Get all the countries from the Asia continent /region using the filter method
    const asianCountries = data.filter((country) => country.region === "Asia");
    console.log("Asian Countries:", asianCountries);

    // 2. Get all the countries with a population of less than 2 lakhs using the filter method
    const smallPopulationCountries = data.filter(
      (country) => country.population < 200000
    );
    console.log(
      "Countries with Population < 200,000:",
      smallPopulationCountries
    );

    // 3. Print the following details name, capital, flag, using the forEach method
    data.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Capital: ${
          country.capital ? country.capital[0] : "N/A"
        }, Flag: ${country.flags.png}`
      );
    });

    // 4. Print the total population of countries using the reduce method
    const totalPopulation = data.reduce(
      (total, country) => total + country.population,
      0
    );
    console.log("Total Population:", totalPopulation);

    // 5. Print the country that uses US dollars as currency
    const usdCountries = data.filter((country) => {
      return (
        country.currencies && Object.keys(country.currencies).includes("USD")
      );
    });
    console.log("Countries using USD as currency:", usdCountries);
  })
  .catch((error) => console.error("Error fetching data:", error));
