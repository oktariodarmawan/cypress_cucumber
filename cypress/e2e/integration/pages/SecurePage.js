export default class SecurePage{

    path = "/myaccount";
  
    // Create variables for element locators
  
    messageDiv = '[style=""] > .v-btn__content > .mr-md-2'
  
   
  
    // Create independent methods to do actions on elements
  
    getMessage(){
  
      return cy.get(this.messageDiv).invoke('text')
  
    }
  
  }