import {locators} from "./selectors"
import {PlaywrightWrapper} from "../SupportingFile/playwright";

export class claimPage extends PlaywrightWrapper{

public async clickAssignClaim(){
await this.click(locators.AddIcon,"Assign Claim","Button");

} 

public async event(data : string){

await this.click(locators.ClaimPage.eventDropdown,"Event Dropdown","Dropdown");
await this.click(locators.ClaimPage.dropdownValueSelector(data), data, "selecting event dropdown value");

}

public async currency(data : string){

await this.click(locators.ClaimPage.currencyDropdown,"Currency Dropdown","Dropdown");
await this.click(locators.ClaimPage.dropdownValueSelector(data), data, "selecting currency dropdown value")
}


}