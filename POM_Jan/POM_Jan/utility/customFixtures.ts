
import {pimPage} from "../HRMPages/PIMPage"
import {LoginPage} from "../HRMPages/Loginhrm";
import { HomePage } from "../HRMPages/HomePage";
import {test as baseTest} from "@playwright/test";

type myFixture = {

   hrmPim : pimPage
   hrmlogin : LoginPage
   hrmHome : HomePage

}
export const testRunner =  baseTest.extend<myFixture>( {
  
 hrmPim : async ({page}, use) => {

   const hrmPim = new pimPage(page);
   await use(hrmPim);
 },

 hrmlogin : async ({page}, use) => {

  const hrmlogin = new LoginPage(page);
  await use(hrmlogin);

 },

 hrmHome : async ({page}, use) => {

  const hrmHome = new HomePage(page);
  await use(hrmHome);


 }


 

})

