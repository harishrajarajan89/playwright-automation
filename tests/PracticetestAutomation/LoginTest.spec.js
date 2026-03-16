import {test,expect} from '@playwright/test';
import path from 'path';

test('Login via automation', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation')
    await expect(page.getByRole('heading',{name: 'Login Test'})).toBeVisible();
    await page.getByLabel('Username').fill('student');
    await page.getByRole('textbox',{name: 'Password'}).fill('Password123');
    await page.getByRole('button',{name:'Submit'}).click({timeout: 5000});
    await page.screenshot({ path: '../test-results/Success.png', fullPage: true });
    await expect(page.getByRole('heading',{name: 'Logged In Successfully'})).toBeVisible();
    await expect(page).toHaveURL(/logged-in-successfully/);
    await page.waitForTimeout(5000);
    await page.getByRole('link',{name: 'Log out'}).click({timeout:5000});
    await page.screenshot({ path: '../test-results/Logout.png', fullPage: true });
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
})

test.beforeEach(async({page})=>{
    await page.setViewportSize({width:1920, height:1080 });
});

test.afterEach(async({page},testInfo)=>{
    const timestamp = Date.now();
    if(testInfo.status === 'failed'){
        const screenshotPath = path.join('E:', 'Playwright', 'ss', `failed_${timestamp}.png`);
        await page.screenshot({path: screenshotPath, fullPage: true});
    }
});

test('Login using invalid name', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    const userName = page.getByLabel('Username');
    const passWord = page.getByRole('textbox',{name: 'Password'});
    await userName.fill("Harish");
    await passWord.fill("Password123")
    await page.getByRole('button',{name:'Submit'}).click();
    await expect(page.locator('//div[@id="error"]')).toContainText('Your username is invalid!');
    await page.screenshot({path: '../ss/use_case_2.png'});
})

test('Incorrect password check', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    expect(await page.title()).toContain('Test Login');
    // userName, passWord, submitBtn, errMsg;
    let userName = page.getByLabel('Username');
    const passWord = page.getByRole('textbox', {name:'Password'});
    await userName.fill('student');
    await passWord.fill('iuhsaasdf');
    const submitBtn = page.getByRole('button',{name:'Submit'});
    await submitBtn.click();
    const errMsg = page.locator('//div[@id="error"]');
    await expect(errMsg).toContainText('password is invalid');
    await expect.soft(errMsg).toHaveText('invalid');
    await expect(errMsg).not.toHaveText('username');
})

