import {empID} from "../Data/testData";
import {locators} from "../HRMPages/selectors"
import {PlaywrightWrapper} from "../SupportingFile/playwright";
import {FakerData} from "../SupportingFile/fakerUtils";

export class pimPage extends PlaywrightWrapper{

  async clickAddEmployeeLink(){

     await this.click(locators.AddIcon, "AddEmployee", "Button");

  }

   async fillAddEmployeeForm(){

    await this.type(locators.firstName,"FirstName",FakerData.getFirstName());
    await this.type(locators.lastName,"lastName",FakerData.getLastName());
    const EmployeeID = await this.Gpage.locator(locators.EmployeeID);
    await EmployeeID.clear();
    empID === FakerData.getEmployeeID();
    await EmployeeID.fill(empID);

  }

   async clickAddEmployeeSubmitButton(){

    await this.click(locators.EmployeeSubmitButton,"EmployeeSubmitButton","Button");
   
  } 


  async clickEmployeeList(){

    await this.click(locators.EmployeeList,"EmployeeList","Link");

}

async enterEmployeeID(){

  await this.Gpage.locator(locators.EmployeeIDField).fill(empID);

}

async clickSearchButton(){

  await this.click(locators.EmployeeSearch,"Search","Button");

}


async clickOnDeleteIcon(){

  await this.click(locators.ClickOnDeleteIcon,"DeleteIcon","Icon");
  await this.click(locators.ClickYesOnDeleteConfirmation,"DeleteConfirmation","Button");

}

}