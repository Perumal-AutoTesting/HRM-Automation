
import {Page,test,BrowserContext} from "@playwright/test"

export abstract class PlaywrightWrapper {

  Gpage : Page;
  Gcontext : BrowserContext;

 constructor (Lpage : Page, context : BrowserContext){

  this.Gpage = Lpage;
  this.Gcontext = context;
}

public async launchingURL(URL : string){

try {
  await this.Gpage.goto(URL);
  console.log(`Successfully loaded the URL: ${URL}`);
  
 } catch (error) {
  
  console.log(`Error loading the page at ${URL}`);
  throw new Error (`Failed to load the page at ${URL}`);
 }


}

async validateElementVisibility(locator : string, elementName : string){

 try {

  const element = this.Gpage.locator(locator);
  await this.Gpage.waitForSelector(locator,{state : `attached`,strict : true,timeout:30000,});
  if(await element.isVisible()){

    console.log(`${elementName} is visible as expected.`);

  } else {

    console.error(`${elementName} is not visible.`);
  }
  
 } catch (error) {

  throw new Error (`Error validating visibility of ${elementName}: ${error}`)
  
 }

}

public async wait (waitType : "minWait" | "mediumWait" | "maxWait"){

  try {

    switch(waitType){
    case "minWait":
      await this.Gpage.waitForTimeout(3000);
      break;
    case "mediumWait":
      await this.Gpage.waitForTimeout(5000);
      break;
    case "maxWait":
      await this.Gpage.waitForTimeout(10000);
      break;
    default :
      console.log("Invalid wait type provided.");
      throw new Error(`Invalid wait type: ${waitType}`);
    }
    
  } catch (error) {

    throw new Error(`Error during wait:, ${error}`);
    
  }


}

public async interactWithElement(
  attribute : "LABEL" | "ID" | "TEXT" | "TITLE" | "CLASS" | "PLACEHOLDER" | "ALTTEXT", 
  locator : string,
   action : "Click" | "fill", 
   data : string = "") : Promise <void>{

switch(attribute){

  case "TEXT":
    if(action === "Click"){
      await this.Gpage.getByText(locator).click();
    } else {

      throw new Error ("The 'fill' action is not supported for 'TEXT' attributes.");
    }
  break;

  case "TITLE":
    if(action === "Click"){
      await this.Gpage.getByText(locator).click();
    } else {

        throw new Error ("The 'fill' action is not supported for 'TITLE' attributes.");
    }
    break;

  case "CLASS":

    if(action === "Click"){
      await this.Gpage.locator(locator).click();
    } else {

      await this.Gpage.locator(locator).fill(data)      
    }
    break;

    case "PLACEHOLDER":

    if(action === "fill"){

      await this.Gpage.getByPlaceholder(locator).clear();
      await this.Gpage.getByPlaceholder(locator).fill(data);

    }else {

        throw new Error ("The 'fill' action is not supported for 'PlaceHolder' attributes.");
    }
    break;


}  


}





}