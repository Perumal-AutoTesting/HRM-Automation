import { testRunner } from "../utility/customFixtures";
import {URLConstants} from "../Constants/urlConstants";

testRunner(`Validating the reset password message`, async({hrmlogin,hrmForgotPassword}) => {

testRunner.info().annotations.push(

  {type : `TestCase`, description : `Validating the reset password message`}

)

await hrmlogin.launchingURL(URLConstants.HRM_BaseUrl);
await hrmlogin.forgotPassword()
await hrmForgotPassword.forgotpasswordSubmitButton();

})