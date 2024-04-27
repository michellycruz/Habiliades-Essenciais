const axios = require("axios");

const cheerio = require("cheerio");

const fs = require("fs");

const url = "https://www.imdb.com/chart/top/"

const moviesData = {};

async function getHTML() {
    const {data: movies} = await axios.get(url);
    return movies;
}

getHTML().then((res) => {
    const $ = cheerio.load(res);
    $(".ipc-page-grid__item").each((i, movie) => {
        const title = $(movie).find(".ipc-title a").text()
        const rating = $(movie).find(".ipc-rating-star #text").text()

        moviesData[title] = rating;
    })

    fs.writeFile("moviesRatingData.json", JSON.stringify(moviesData), (err) => {
        if (err) {throw err;
            console.log("Sucesso!!")
        }
    })
})