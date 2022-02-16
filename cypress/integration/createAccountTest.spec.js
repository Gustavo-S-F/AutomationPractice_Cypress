//comando que referencia o type usado para escrever os testes
///<reference types="Cypress" />

//imports das páginas seguindo o padrão pageObjects
import homePage from '../support/pages/homePage';
import authenticationPage from '../support/pages/authenticationPage';
import registrationPage from '../support/pages/registrationPage';
import myAccountPage from '../support/pages/myAccountPage';

//estrutura de testes
describe('Create account on Automation Practice', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    //teste e funções a serem executadas
    
    //este caso de teste cria uma conta masculina
    it('Create Male Account', () => {
        homePage.goToAuthenticationPage()
       
        authenticationPage.provideAValidEmail()
        
        registrationPage.fillRecordsWithMaleConfig()
     
        myAccountPage.validationMyAccountPage()

    })

    //este caso de teste cria uma conta feminina
    it('Create Female Account', () => {
        homePage.goToAuthenticationPage()
       
        authenticationPage.provideAValidEmail()
        
        registrationPage.fillRecordsWithFemaleConfig()
     
        myAccountPage.validationMyAccountPage()

    })

})

