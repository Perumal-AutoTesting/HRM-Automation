
import  {test} from "@playwright/test";
import { LoginPage } from "/POM_Automation_PW/POM_Jan/POM_Jan/HRMPages/Loginhrm";

test(`HRM Login Page`, async ({page}) => {

const login = new LoginPage(page);

await login.launchURl();
await login.enterCredentials();
await login.clickLoginButton();

})