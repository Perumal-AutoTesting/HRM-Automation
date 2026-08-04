
import { testRunner } from "../utility/customFixtures";
import {URLConstants} from "../Constants/urlConstants";

testRunner(`Creating forgotpassword`, async({hrmlogin,hrmForgotPassword}) => {
testRunner.info().annotations.push (

  {type : `TestCase`, description : `ForgotPassword creation`}
)

await hrmlogin.launchingURL(URLConstants.HRM_BaseUrl);
await hrmlogin.forgotPassword();
await hrmForgotPassword.forgotPasswordCancelButton();

});