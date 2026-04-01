import {faker} from "@faker-js/faker";
import  {HomePage} from "./HomePage";
import { locators } from "../Data/locators";
import {empID} from "../Data/testData";

export class pimPage extends HomePage{

  async clickAddEmployeeLink(){

    await this.Gpage.getByRole(`link`, {name:`Add Employee`}).click();

  }

   async fillAddEmployeeForm(){

    await this.Gpage.getByPlaceholder(locators.firstName).fill(faker.person.firstName());
    await this.Gpage.getByPlaceholder(locators.lastName).fill(faker.person.lastName());
    const EmployeeID = await this.Gpage.locator(locators.EmployeeID);
    await EmployeeID.clear();
    empID === faker.string.numeric(4);
    await EmployeeID.fill(empID);

  }

   async clickAddEmployeeSubmitButton(){

    await this.Gpage.locator(locators.EmployeeSubmitButton).click();
  } 


  async clickEmployeeList(){

   await this.Gpage.getByRole(`link`, {name:`Employee List`}).click();

}

async enterEmployeeID(){

  await this.Gpage.locator(locators.EmployeeIDField).fill(empID);

}

async clickSearchButton(){

  await this.Gpage.getByRole(`button`, {name:`Search`}).click();

}


async clickOnDeleteIcon(){

  await this.Gpage.locator(locators.ClickOnDeleteIcon).click();
  await this.Gpage.locator(locators.ClickYesOnDeleteConfirmation).click();

  
}




}