export default class LoginPage{
    path = '/';

    //Create variable for element locator

    checkbox_punya_akun = ".v-input--hide-details > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"

    usernameInput = "body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";

    passwordInput = "body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"

    loginButton = '.v-app-bar > .v-toolbar__content > [target="_blank"] > .v-btn__content'

    

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

      clickLogin(){
    
        cy.get(this.loginButton).click();
    
      }
}