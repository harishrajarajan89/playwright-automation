export class ExcetionPage{
    constructor(page){
        this.page = page;
        this.addBtn = page.getByRole('button',{name:'Add'});
        this.row2Input = page.getByRole('textbox').nth(1);
        this.saveBtn = page.getByRole('button',{name:'Save'});
        this.removeBtn = page.getByRole('button',{name:'Remove'});
    }

    async goto(){
        await this.page.goto('https://practicetestautomation.com/practice-test-exceptions/')
    }

}