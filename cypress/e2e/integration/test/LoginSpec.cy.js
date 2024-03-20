import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

context('Login', () => {

    it('Login successfully', () => {
    
     loginPage.visitLogin();
     
     loginPage.clickLogin();

     loginPage.clickCheckBox()
   
     loginPage.typeUsername("tomsmith");
   
     loginPage.typePassword("SuperSecretPassword!");
   
     
   
    })
   
   })