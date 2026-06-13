
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
  
 hrmPim : async ({page,context}, use) => {

   const hrmPim = new pimPage(page, context);
   await use(hrmPim);
 },

 hrmlogin : async ({page, context}, use) => {

  const hrmlogin = new LoginPage(page, context);
  await use(hrmlogin);

 },

 hrmHome : async ({page,context}, use) => {

  const hrmHome = new HomePage(page,context);
  await use(hrmHome);


 }


 

})

