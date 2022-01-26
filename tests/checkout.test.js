const timeout = 15000;

// Test des fonctionnalités de prise de commande
describe("Checkout process", () => {
    let page;

    test('checkout', async () => {
        await page.click('#react-burger-menu-btn')
        await page.waitForSelector('#logout_sidebar_link');
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/menu_screen.png'});
        await page.click('#logout_sidebar_link');
        const html = await page.$eval('body', e => e.innerHTML);
        expect(html).toContain("<input type=\"submit\" class=\"submit-button btn_action\" data-test=\"login-button\" id=\"login-button\" name=\"login-button\" value=\"Login\">")
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
