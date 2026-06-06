
import {Page,test,BrowserContext} from "@playwright/test"

export abstract class PlaywrightWrapper {

  Gpage : Page;
  Gcontext : BrowserContext;

 constructor (Lpage : Page, context : BrowserContext){

  this.Gpage = Lpage;
  this.Gcontext = context;
}


}