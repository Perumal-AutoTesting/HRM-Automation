import {locators} from "./selectors"
import {PlaywrightWrapper} from "../SupportingFile/playwright";

export class claimPage extends PlaywrightWrapper{

public async clickAssignClaim(){
await this.click(locators.AddIcon,"Assign Claim","Button");

} 


}