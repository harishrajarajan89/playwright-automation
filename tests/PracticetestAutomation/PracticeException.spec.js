import {test, expect} from '@playwright/test';
import { ExcetionPage } from './Pages/ExceptionPage';
import { setFlagsFromString } from 'node:v8';

test.only('Add first row', async({page})=>{
    const  pracPage = new ExcetionPage(page);
    await pracPage.goto();
    await pracPage.addBtn.click();
    //await pracPage.pause();
    //await page.waitForTimeout(5000);
    await expect(pracPage.row2Input).toBeVisible({timeout:7000});
    await expect(page.getByText('Row 2 was added')).toBeVisible();
})
// Test case 2: ElementNotInteractableException
// Open page
// Click Add button
// Wait for the second row to load
// Type text into the second input field
// Push Save button using locator By.name(“Save”)
// Verify text saved
test.only('TC2_Exceptions', async({page})=>{
    await dsft dfdff uudg fg dtgyru udyu dy f
    
})