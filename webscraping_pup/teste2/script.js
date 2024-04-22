const puppeteer = require("puppeteer");

const url = "https://www.mercadolivre.com.br/";

const searchFor = "notebook";

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    console.log("Estou funcionando");
    await page.goto(url);
    console.log("entrei na url");
    await browser.close();
})();