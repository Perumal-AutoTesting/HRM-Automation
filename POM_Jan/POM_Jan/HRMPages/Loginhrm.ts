import { Page} from "@playwright/test";
import dotenv from "dotenv";
dotenv.config({path:"Data/qa.env"});

export class LoginPage {

  Gpage : Page;

constructor (Lpage : Page){

  this.Gpage = Lpage;
   
}

async launchURl(){
  
  console.log(process.env.HRM_BaseUrl);
  await this.Gpage.goto(process.env.HRM_BaseUrl as string);

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




 


