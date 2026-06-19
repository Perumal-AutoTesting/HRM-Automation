import { Page,BrowserContext} from "@playwright/test";
import {PlaywrightWrapper} from "../SupportingFile/playwright";
import {URLConstants} from "../Constants/urlConstants";
import {credentials} from "../Constants/credentialsData";
import {locators} from "../HRMPages/selectors"

export class LoginPage extends PlaywrightWrapper{

constructor(Lpage : Page, context : BrowserContext){

 super(Lpage,context);

}

async launchApplication(role: string){

await this.launchingURL(URLConstants.HRM_BaseUrl);
const pageTitle = await this.Gpage.title();

if(pageTitle.startsWith("OrangeHRM")){

 const {HRM_Username,HRM_Password} = credentials[role as keyof typeof credentials];

await this.interactWithElement("PLACEHOLDER",locators.Username,"fill",HRM_Username);
await this.interactWithElement("PLACEHOLDER",locators.Password,"fill", HRM_Password);
await this.interactWithElement("CLASS",locators.LoginButton,"Click");
await this.wait('mediumWait');
await this.validateElementVisibility(locators.DashboardText,"Dashboard1");
} else {

console.log("Login page is Skipped");

}
 
} 

}




 


