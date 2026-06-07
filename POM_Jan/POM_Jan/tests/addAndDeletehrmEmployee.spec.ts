
import { testRunner } from "../utility/customFixtures"; 


testRunner (`Add and Delete the HRM Employee`, async ({hrmPim, hrmlogin, hrmHome}) => {

testRunner.info().annotations.push(

  {type : `TestCase`, description : `Add new employee and Delete the same employee in HRM `}

);
await hrmlogin.launchApplication();
await hrmlogin.enterCredentials();
await hrmlogin.clickLoginButton();
await hrmHome.clickPIMLink();
await hrmPim.clickAddEmployeeLink();
await hrmPim.fillAddEmployeeForm();
await hrmPim.clickAddEmployeeSubmitButton();
await hrmPim.clickEmployeeList();
await hrmPim.enterEmployeeID();
await hrmPim.clickSearchButton();
await hrmPim.clickOnDeleteIcon();

})