
import {testRunner} from "../utility/customFixtures";

testRunner (`Add and Edit the HRM Employee`, async ({hrmPim, hrmlogin, hrmHome}) =>{

  testRunner.info().annotations.push(

    {type : `TestCase`, description: `Add new employee and Editing the same employee in HRM`}
  );

await hrmlogin.launchURl();
await hrmlogin.enterCredentials();
await hrmlogin.clickLoginButton();
await hrmHome.clickPIMLink();
await hrmPim.clickAddEmployeeLink();
await hrmPim.fillAddEmployeeForm();
await hrmPim.clickAddEmployeeSubmitButton();
await hrmPim.clickEmployeeList();
await hrmPim.enterEmployeeID();
await hrmPim.clickSearchButton();


});