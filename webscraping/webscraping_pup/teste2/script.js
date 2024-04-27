const puppeteer = require("puppeteer");

const url = "https://www.mercadolivre.com.br/";

const searchFor = "notebook";

let cont = 1;

const list = [];

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

        if(cont === 10) continue
        console.log("Estou na página", cont);
        await page.goto(link);
        await page.waitForSelector(".ui-pdp-title");
        const title = await page.$eval(".ui-pdp-title", 
        (element) => element.innerText
    );

    const seller = await page.evaluate(() => {
        const e1 = document.querySelector('.ui-pdp-seller__link-trigger');
        if (!e1) return null;
        return e1.innerText;
    })

    const price = await page.$eval(".andes-money-amount__fraction",
    (element) => element.innerText
    );

    const mySearch = {};
    mySearch.title = title;
    mySearch.price = price;
    mySearch.link = link;
    seller ? (mySearch.seller = seller) : ""

    list.push(mySearch);

    cont++;
}
console.log(list)

    await browser.close();
})();

