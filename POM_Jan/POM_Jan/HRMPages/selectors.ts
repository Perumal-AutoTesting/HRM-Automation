
export let locators = {

  Username : `Username`,
  Password : `Password`,
  LoginButton : `button[type="submit"]`,
  firstName : `[placeholder="First Name"]`,
  lastName : `[placeholder="Last Name"]`,
  EmployeeID : `//label[text()='Employee Id']/following::input[contains(@class,'input')]`,
  EmployeeSubmitButton : `[type='submit']`,
  EmployeeIDField : `//label[text()='Employee Id']//following::input[contains(@class,'oxd-input')]`,
  ClickOnDeleteIcon : `(//i[contains(@class,'oxd-icon bi-trash')])[1]`,
  ClickYesOnDeleteConfirmation : `//i[contains(@class,'bi-trash oxd-button-icon')]`,
  DashboardText : `//h6[text()='Dashboard']`,
  AddEmployee : `//i[contains(@class,'bi-plus')]`,
  EmployeeList : `//a[text()='Employee List']`,
  EmployeeSearch : `[type="submit"]`

}