import {locators} from "../HRMPages/selectors"
import {PlaywrightWrapper} from "../SupportingFile/playwright";

export class HomePage extends PlaywrightWrapper {

 async clickPIMLink(){

    await this.click(locators.PIMLink,"PIM","Link");

  }


  async clickClaimLink(){

    await this.click(locators.ClaimLink,"Claim","Link");

  }


}