
import { testRunner } from "../utility/customFixtures";

testRunner (`Adding claims to the Employee`, async({hrmlogin,hrmHome,hrmClaim}) => {

testRunner.info().annotations.push(

  {type : `TestCase`, description : `Adding clime the employee`}

);

await hrmlogin.launchApplication("USERLOGIN");
await hrmHome.clickClaimLink();
await hrmClaim.clickAssignClaim();
await hrmClaim.event("Accommodation");
await hrmClaim.currency("Bermudian Dollar");





})