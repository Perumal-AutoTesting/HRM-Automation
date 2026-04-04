
import {pimPage} from "../HRMPages/PIMPage"

import {test as baseTest} from "@playwright/test";

type myFixture = {

   addAndDeleteEmployeeFix : pimPage;

}

export const testRunner =  baseTest.extend<myFixture>( {
  
 addAndDeleteEmployeeFix : async ({page}, use) => {

   const addAndDeleteEmployee = new pimPage(page);
   await use(addAndDeleteEmployee);

 }

})

