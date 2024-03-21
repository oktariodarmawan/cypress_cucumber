import LoginPage from '../pages/LoginPage';
import SecurePage from '../pages/SecurePage';

const loginPage = new LoginPage();
const securePage = new SecurePage();

context('Login', () => {

    it('Login successfully', () => {
    
     loginPage.visitLogin();
     
     loginPage.clickLogin();

     loginPage.clickCheckBox()

     loginPage.clickCheckBoxTNC()
   
     loginPage.typeUsername("oktariodarmawan@gmail.com");
   
     loginPage.typePassword("kvnunited42");

     loginPage.loginButton_Submit()

     cy.wait(10000)

     securePage.getMessage().should((actual) => {

        expect(actual).to.have.string('Hello,')
     
       })
   
   
    })
   
   })