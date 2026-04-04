import { Page} from "@playwright/test";
import {locators} from "../Data/locators";
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

  await this.Gpage.getByPlaceholder(locators.Username).fill(process.env.HRM_Username as string);
  await this.Gpage.getByPlaceholder(locators.Password).fill(process.env.HRM_Password as string);

}

async clickLoginButton(){

await this.Gpage.locator(locators.LoginButton).click();

}


}