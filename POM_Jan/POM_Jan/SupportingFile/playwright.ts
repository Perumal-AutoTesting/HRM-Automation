
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

  case "CLASS":

    if(action === "Click"){
      await this.Gpage.locator(locator).click();
    } else {

      await this.Gpage.locator(locator).fill(data)      
    }
    break;


}  


}



}