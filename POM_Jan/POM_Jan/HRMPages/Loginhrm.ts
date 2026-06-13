import { Page,BrowserContext} from "@playwright/test";
import {PlaywrightWrapper} from "../SupportingFile/playwright";
import {URLConstants} from "../Constants/urlConstants";
import {credentials} from "../Constants/credentialsData";
import dotenv from "dotenv";
dotenv.config({path:"Data/qa.env"});

export class LoginPage extends PlaywrightWrapper{

constructor(Lpage : Page, context : BrowserContext){

 super(Lpage,context);

}

async launchApplication(){

await this.launchingURL(URLConstants.HRM_BaseUrl);
const pageTitle = await this.Gpage.title();

if(pageTitle.startsWith("OrangeHRM")){

await this.interactWithElement("PLACEHOLDER",this.locators.Username,"fill",process.env.HRM_Username as string);
await this.interactWithElement("PLACEHOLDER",this.locators.Password,"fill", process.env.HRM_Password as string);
await this.interactWithElement("CLASS",this.locators.LoginButton,"Click");

} else {

console.log("Login page is Skipped");

}
 
} 

public locators = {

  Username : `Username`,
  Password : `Password`,
  LoginButton : `button[type="submit"]`,
  firstName : `First Name`,
  lastName : `Last Name`,
  EmployeeID : `//label[text()='Employee Id']/following::input[contains(@class,'input')]`,
  EmployeeSubmitButton : `[type='submit']`,
  EmployeeIDField : `//label[text()='Employee Id']//following::input[contains(@class,'oxd-input')]`,
  ClickOnDeleteIcon : `(//i[contains(@class,'oxd-icon bi-trash')])[1]`,
  ClickYesOnDeleteConfirmation : `//i[contains(@class,'bi-trash oxd-button-icon')]`

}

}




 


