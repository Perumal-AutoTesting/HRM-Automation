import {faker} from "@faker-js/faker";
import  {LoginPage} from "./Loginhrm"
import { locators } from "../Data/locators";

export class HomePage extends LoginPage {

 async clickPIMLink(){

    await this.Gpage.getByRole(`link`, {name:`PIM`}).click();

  }


}