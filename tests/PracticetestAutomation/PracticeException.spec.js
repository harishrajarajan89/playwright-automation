// import {test, expect} from '@playwright/test';
import {test,expect} from './Fixture.js'

// since importing Fixture no need to import ExceptionPage seperately


test('Add first row', async({exceptionPage, page})=>{
    //const  pracPage = new ExceptionPage(page);
    await exceptionPage.goto();
    await exceptionPage.addBtn.click();
    // it took 6 secs to display the 2nd row input box 
    await expect(exceptionPage.row2Input).toBeVisible({timeout:7000});
    await expect(page.getByText('Row 2 was added')).toBeVisible();
});
// Test case 2: ElementNotInteractableException 1.Open page 2. Click Add button
//3. Wait for the second row to load
//4. Type text into the second input field
//5. Push Save button using locator By.name(“Save”)
//6. Verify text saved
test('TC2_Exceptions', async({exceptionPage,page})=>{
    //const obj = new ExceptionPage(page);
    await exceptionPage.goto();
    await exceptionPage.addBtn.click();
    await expect(exceptionPage.row2Input).toBeVisible({timeout:7000});
    // we can use fill or type
    await exceptionPage.row2Input.type('Row 2 text');
    await exceptionPage.saveBtn.click();
    await expect(page.getByRole('textbox').nth(1)).toHaveValue('Row 2 text');
    const msg = await page.getByRole('textbox').nth(1).inputValue();
    //console.log(msg);
    expect(msg.includes("Row 2")).toBeTruthy();
    await expect(exceptionPage.row2Input).toHaveValue('Row 2 text'); 
    console.log("Passed: 2nd row is visible!");
}); 
//TO DO need to know where else we can use lamda?
