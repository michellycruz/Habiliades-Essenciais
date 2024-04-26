const puppeteer = require("puppeteer");

const url = "https://www.mercadolivre.com.br/";

const searchFor = "notebook";

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    console.log("Estou funcionando");
    await page.goto(url);
    console.log("entrei na url");
    await page.waitForSelector("#cb1-edit");
    await page.type("#cb1-edit", searchFor);
    await Promise.all([page.waitForNavigation(), page.click(".nav-search-btn")]);

    const links = await page.$$eval(".ui-search-result__image > a", (e1) =>
    e1.map((link) => link.href));
    console.log(links);
    await browser.close();
})();