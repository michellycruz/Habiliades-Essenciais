const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.google.com.br/?hl=pt-BR");
    await page.screenshot({path: "google.png"})

    await browser.close()
})();