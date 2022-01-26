const timeout = 15000;

// Test des fonctionnalités de prise de commande
describe("Checkout process", () => {
    let page;

    test('checkout', async () => {
        await page.click('#header_container > div.header_secondary_container > div.right_component > span > select');
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/menu_tri.png'});
        await page.waitForSelector('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(3)');
        const button = await page.$('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(3)');
        await button.evaluate(b => b.click());
        const html = await page.$eval('#inventory_container > div', e => e.innerHTML);
        await page.screenshot({path: './tests/img/tri2.png'});
        expect(html).toContain("<a href=\"#\" id=\"item_5_img_link\"><img alt=\"Sauce Labs Fleece Jacket\" class=\"inventory_item_img\" src=\"/static/media/sauce-pullover-1200x1500.439fc934.jpg\"></a>")
    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#login-button');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button');
    }, timeout)

});
