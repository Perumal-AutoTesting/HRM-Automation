import {locators} from "./selectors"
import {PlaywrightWrapper} from "../SupportingFile/playwright";

export class claimPage extends PlaywrightWrapper{

public async clickAssignClaim(){

    await this.click(locators.AddIcon,"Assign Claim","Button");

} 

public async employeeName(data : string){
  
    await this.fillAndArrowDownAndEnter(locators.ClaimPage.employeeName,"Employee Name",data);
   /** 
    * await this.click(locators.ClaimPage.employeeName, "Employee Name textbox", "Textbox");
    * await this.Gpage.locator(locators.ClaimPage.employeeName).press('ArrowDown');
      await this.Gpage.locator(locators.ClaimPage.employeeName).press('Enter');*/

}

public async event(data : string){

    await this.click(locators.ClaimPage.eventDropdown,"Event Dropdown","Dropdown");
    await this.click(locators.ClaimPage.dropdownValueSelector(data), data, "selecting event dropdown value");

}

public async currency(data : string){

    await this.click(locators.ClaimPage.currencyDropdown,"Currency Dropdown","Dropdown");
    await this.click(locators.ClaimPage.dropdownValueSelector(data), data, "selecting currency dropdown value");

}

public async remarks(data : string){

    await this.interactWithElement("CLASS",locators.ClaimPage.remarks,"fill",data);

}



}