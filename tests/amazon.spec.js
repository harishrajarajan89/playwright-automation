import { test, expect } from '@playwright/test';

test.skip('Navigate to shoping web app', async({page})=>{
  await page.goto ('https://amazon.in');
  await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
  //await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByText('Hello, sign in').click();
  await page.locator('//input[@id="ap_email_login"]').click();
  await page.locator('//input[@id="ap_email_login"]').fill('7871635049');
  await page.pause();
  await page.getByRole('button', { name: 'Continue' }).click(); 
  await page.waitForTimeout(5000);
  //await page.press('Enter');
  const cancelBtn = page.locator('button:has-text("Cancel")')
  if (await cancelBtn.isVisible() && await page.waitForSelector('text=Passkeys')){
    await cancelBtn.click();
  }
  await page.locator('text=Cancel').click();
  await page.getByRole('textbox',{name:'Password'}).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill("Haji@9001");
})
