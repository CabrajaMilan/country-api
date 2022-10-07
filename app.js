
/********************** Variable Declaration*******************/
const newContent = document.querySelector(".undynamicContent");
const btn = document.querySelector("#btn");
const inputBar = document.querySelector("#input");



/*********************** Button *****************************/
btn.addEventListener('click', () => {
    let countryName = inputBar.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL) 
        .then((res) => res.json())
            .then((data) => {
                console.log(data[0].population)
                console.log(data[0]);
                console.log(data[0].capital[0]);
                console.log(data[0].flags.svg);
                console.log(data[0].name.common);
                console.log(data[0].continents[0]);
                console.log(Object.keys(data[0].currencies)[0]);
                console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
                console.log(Object.values(data[0].languages).join(",")
                
                );
                newContent.innerHTML = 
        `
                <!-------------------- IMAGE CONTAINER ------------------->

        <div class="imgContainer">
            <img class="img" src="${data[0].flags.svg}" alt="">
        </div>

        <!------------------ Country Informations ---------------->

            <div class="countryInfo">
                <h3>
                    ${data[0].name.common}
                </h3>

                <div class="countryText">

                <p class="capital"><span> Capital:</span> ${data[0].capital[0]}</p>

                <p class=""><span>Continent:</span> ${data[0].continents[0]}</p>

                <p class=""><span>Population:</span> ${data[0].population}</p>

                <p class=""><span>Currency:</span> ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</p>

                <p class=""><span>Common Languages:</span> ${Object.values(data[0].languages).join(",")}</p>

                </div>
            </div>
        `
                inputBar.value = "";
            });
}).catch(error => {
    newContent.innerHTML = `<h2>Drzava ne postoji</h2>`
});


