
import {test} from "@playwright/test";
import {HomePage} from "../HRMPages/HomePage";
import {pimPage} from "../HRMPages/PIMPage"

test (`Delete the HRM Employee`, async ({page}) => {

const addAndDeleteEmployee = new pimPage(page);

await addAndDeleteEmployee.launchURl();
await addAndDeleteEmployee.enterCredentials();
await addAndDeleteEmployee.clickLoginButton();
await addAndDeleteEmployee.clickPIMLink();
await addAndDeleteEmployee.clickAddEmployeeLink();
await addAndDeleteEmployee.fillAddEmployeeForm();
await addAndDeleteEmployee.clickAddEmployeeSubmitButton();
await addAndDeleteEmployee.clickEmployeeList();
await addAndDeleteEmployee.enterEmployeeID();
await addAndDeleteEmployee.clickSearchButton();
await addAndDeleteEmployee.clickOnDeleteIcon();



})