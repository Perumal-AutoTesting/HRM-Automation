import { testRunner } from "../utility/customFixtures";

testRunner (`Add and Delete the HRM Employee`, async ({addAndDeleteEmployeeFix}) => {

await addAndDeleteEmployeeFix.launchURl();
await addAndDeleteEmployeeFix.enterCredentials();
await addAndDeleteEmployeeFix.clickLoginButton();
await addAndDeleteEmployeeFix.clickPIMLink();
await addAndDeleteEmployeeFix.clickAddEmployeeLink();
await addAndDeleteEmployeeFix.fillAddEmployeeForm();
await addAndDeleteEmployeeFix.clickAddEmployeeSubmitButton();
await addAndDeleteEmployeeFix.clickEmployeeList();
await addAndDeleteEmployeeFix.enterEmployeeID();
await addAndDeleteEmployeeFix.clickSearchButton();
await addAndDeleteEmployeeFix.clickOnDeleteIcon();

})