const puppeteer = require("puppeteer");

const url = "https://www.mercadolivre.com.br/";

const searchFor = "filtro hang on aquário";

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    console.log("Estou funcionando");
    await page.goto(url);
    console.log("entrei na url");
    await page.waitForSelector("#cb1-edit");
    await page.type("#cb1-edit", searchFor);
    await Promise.all([page.waitForNavigation(), page.click(".nav-search-btn")]);

    const links = await page.$$eval(".ui-search-item__group--title > a", (e1) => e1.map((link) => link.href));

    for (const link of links){

        await page.goto(link);
        await page.waitForSelector(".ui-pdp-title");
        const title = await page.$eval(".ui-pdp-title", 
        (element) => element.innerText
    );
    const price = await page.$eval(".andes-money-amount__fraction",
    (element) => element.innerText
    );

    const mySearch = {title, price};
    console.log(mySearch);
}


    await browser.close();
})();

