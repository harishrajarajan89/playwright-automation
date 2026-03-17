import { test as base } from '@playwright/test';
import { ExceptionPage } from './Pages/ExceptionPage';

// fixture class = extended from the test class (now page created once and we can use it in wherever need)
// for that we have to import test and expect from Fixture so that we can use the ExceptionPage and Page as well
export const test = base.extend({
    exceptionPage: async({page},use) => {
        const exceptionPage = new ExceptionPage(page);
        await use(exceptionPage);
    }
})
export {expect} from '@playwright/test';
