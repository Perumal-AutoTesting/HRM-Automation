
import {PlaywrightWrapper} from "../SupportingFile/playwright";
import {locators} from "../HRMPages/selectors"

export class ForgotPasswordPage extends PlaywrightWrapper {

  async forgotPasswordCancelButton(){

    await this.validateElementVisibility(locators.ForgotPasswordPage.forgotpasswordtitle,"ForgotPassword Title")
    await this.interactWithElement("TEXT"," Cancel ","Click");
    
  }

  async forgotpasswordSubmitButton(){

    await this.interactWithElement("CLASS",locators.ForgotPasswordPage.resetPassworButton,"Click");
    await this.validateElementVisibility(locators.ForgotPasswordPage.fieldErrorMessage,"Required");

  }


}