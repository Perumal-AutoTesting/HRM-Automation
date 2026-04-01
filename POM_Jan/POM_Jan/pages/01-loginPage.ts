
/* Actionablities :
1. Loading ur.
2. Enter Credentials
3. Click Login */

import {Page,chromium} from "@playwright/test"

export class LoginPage{

lppage : Page // lppage ==> globally declared as well as assigned with "page" reference through Lpage local variable  used under constructor method and at

//First step inside a class should be assigning the refrence to the page variable

constructor(Lpage:Page){ // constructor method is invoked first

    this.lppage=Lpage // Lpage is a local varible to capture the page reference passed as an argument through the parameterized constructor 

//Lpage === page (through argument passing)// lppage(global variable) == Lpage asssigned with the value of local variable
//page(constructor argument) --> Lpage(local) --> lppage(global)
}

async loadurl(url:string){

    await this.lppage.goto(url)

}

async enterCrdentials(username:string,password:string){

    await this.lppage.locator(this.selectors.usernameField).fill(username)
    await this.lppage.locator(this.selectors.PwdField).fill(password)

}

async clickLogin(){

    await this.lppage.locator(this.selectors.lgbtn).click()
}

async closeBrowser(){
    await this.lppage.close()
}

public selectors = {
    "usernameField":"#username",
    "PwdField":"#password",
    "lgbtn":`.decorativeSubmit`
}
}

