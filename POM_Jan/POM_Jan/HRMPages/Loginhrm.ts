import { Page} from "@playwright/test";
import {PlaywrightWrapper} from "../SupportingFile/playwright";
import dotenv from "dotenv";
dotenv.config({path:"Data/qa.env"});

export class LoginPage extends PlaywrightWrapper{

async launchURL(URL :string){

 try {
  await this.Gpage.goto(URL);
  console.log(`Successfully loaded the URL: ${URL}`);
  
 } catch (error) {
  
  console.log(`Error loading the page at ${URL}`);
  throw new Error (`Failed to load the page at ${URL}`);
 }

} 

async enterCredentials(){

  await this.Gpage.getByPlaceholder(this.locators.Username).fill(process.env.HRM_Username as string);
  await this.Gpage.getByPlaceholder(this.locators.Password).fill(process.env.HRM_Password as string);

}

async clickLoginButton(){

await this.Gpage.locator(this.locators.LoginButton).click();

}


public locators = {

  Username : `Username`,
  Password : `Password`,
  LoginButton : `//button[@type='submit']`,
  firstName : `First Name`,
  lastName : `Last Name`,
  EmployeeID : `//label[text()='Employee Id']/following::input[contains(@class,'input')]`,
  EmployeeSubmitButton : `[type='submit']`,
  EmployeeIDField : `//label[text()='Employee Id']//following::input[contains(@class,'oxd-input')]`,
  ClickOnDeleteIcon : `(//i[contains(@class,'oxd-icon bi-trash')])[1]`,
  ClickYesOnDeleteConfirmation : `//i[contains(@class,'bi-trash oxd-button-icon')]`

}

}




 


