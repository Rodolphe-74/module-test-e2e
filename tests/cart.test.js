const timeout = 15000;

// Test des fonctionnalités de gestion du panier
describe("Cart features", () => {
    let page;

    test('add to cart', async () => {
        await page.click('#add-to-cart-sauce-labs-backpack');
        const html = await page.$eval('#shopping_cart_container > a', e => e.innerHTML);
        expect(html).toContain("<span class=\"shopping_cart_badge\">1</span>")
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
