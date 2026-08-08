import {PlaywrightWrapper} from "../SupportingFile/playwright";
import {URLConstants} from "../Constants/urlConstants";
import {credentials} from "../Constants/credentialsData";
import {locators} from "../HRMPages/selectors"

export class LoginPage extends PlaywrightWrapper{

async launchApplication(role: string){

await this.launchingURL(URLConstants.HRM_BaseUrl);
const pageTitle = await this.Gpage.title();

if(pageTitle.startsWith("OrangeHRM")){

 const {HRM_Username,HRM_Password} = credentials[role as keyof typeof credentials];

await this.interactWithElement("PLACEHOLDER",locators.Username,"fill",HRM_Username);
await this.interactWithElement("PLACEHOLDER",locators.Password,"fill", HRM_Password);
await this.interactWithElement("CLASS",locators.LoginButton,"Click");
await this.wait('mediumWait');
await this.validateElementVisibility(locators.DashboardText,"Dashboard");
} else {

console.log("Login page is Skipped");

}
 
}

async forgotPassword(){

  await this.click(locators.ForgotPasswordPage.forgotpasswordLink,"Forgot your password? ","Link");
}

}




 


