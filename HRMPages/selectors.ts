
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
    AddIcon : `//i[contains(@class,'bi-plus')]`,
    EmployeeList : `//a[text()='Employee List']`,
    EmployeeSearch : `[type="submit"]`,
    ClaimLink : `//a[contains(@href,'claim')]`,
    PIMLink : `//a[contains(@href,'viewPim')]`,

  ClaimPage : {

    employeeName : `input[placeholder="Type for hints..."]`,
    eventDropdown : `(//div[@class='oxd-select-wrapper'])[1]`,
    dropdownValueSelector : (value : string) => `//span[text()='${value}']`,
    currencyDropdown : `(//div[@class='oxd-select-wrapper'])[2]`,
    remarks : `//textarea`

  },

  ForgotPasswordPage : {

    forgotpasswordLink : `p.orangehrm-login-forgot-header`,
    forgotpasswordtitle : `h6.orangehrm-forgot-password-title`,
    resetPassworButton : `.orangehrm-forgot-password-button--reset`,
    fieldErrorMessage : `.oxd-input-field-error-message`

  }

}