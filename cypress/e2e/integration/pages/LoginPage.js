export default class LoginPage{
    path = '/';

    //Create variable for element locator

    checkbox_punya_akun = ".v-input--hide-details > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"

    usernameInput = "body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";

    passwordInput = "body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"

    loginButton = '.v-app-bar > .v-toolbar__content > [target="_blank"] > .v-btn__content'

    checkbox_TNC = ':nth-child(4) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'

    loginButtonSubmit = '[style="color: rgb(255, 255, 255); background-color: rgb(23, 40, 84); border-color: rgb(23, 40, 84);"] > .v-btn__content > span'
    

     // Create independent methods to do actions on elements

     visitLogin(){
        cy.visit(this.path)
     }


     typeUsername(username){

        cy.get(this.usernameInput).type(username);
    
      }
    
     
    
      typePassword(password){
    
        cy.get(this.passwordInput).type(password);
    
      }
    
     clickCheckBox(){
        cy.get(this.checkbox_punya_akun).click()
     }

     clickCheckBoxTNC(){
        cy.get(this.checkbox_TNC).click()
     }

      clickLogin(){
    
        cy.get(this.loginButton).click();
      }

      loginButton_Submit(){
        cy.get(this.loginButtonSubmit).click();
      }
}