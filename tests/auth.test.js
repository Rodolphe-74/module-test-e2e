const timeout = 15000;

// Test des fonctionnalités d'authentification
describe("Auth features", () => {
    let page;

    test('login and logout', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#login-button');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);

        await page.click('#login-button');
        await page.waitForSelector('#header_container > div.header_secondary_container');
        const html = await page.$eval('#header_container > div.header_secondary_container', e => e.innerHTML);

        expect(html).toContain("<div class=\"peek\"></div>")
    }, timeout);

    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
