import {faker} from "@faker-js/faker";
import  {LoginPage} from "./Loginhrm"

export class HomePage extends LoginPage {

 async clickPIMLink(){

    await this.Gpage.getByRole(`link`, {name:`PIM`}).click();

  }

}