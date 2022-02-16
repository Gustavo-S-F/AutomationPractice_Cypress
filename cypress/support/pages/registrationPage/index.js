//nesta file fazemos as classes que possúi funções que usam os elementos da file elements

import UtilFunctions from '../../Util/UtilFunctions'

//comando que "importa" os elementos da pasta elements
const el = require('./elements').elemenRegistration

//classe da página
class registrationPage {


    //método que usa os elementos importados e faz ações apartir deles/ cria uma conta masculina
    fillRecordsWithMaleConfig() {

        cy.wait(10000)
        
        cy.get(el.mrRadioButtonMale).check()
        
        cy.get(el.firstNameField).type(UtilFunctions.aleatoryString())

        cy.get(el.passwordField).type(UtilFunctions.aleatoryStringAndNumber())

        cy.get(el.lastNameField).type('fernandes')

        cy.get(el.dayOfBirthField).select('2').should('have.value', '2')

        cy.get(el.mounthOfBirthField).select('7').should('have.value', '7')

        cy.get(el.yearOfBirthField).select('1989').should('have.value', '1989')

        cy.get(el.companyField).type('Food')

        cy.get(el.addressField).type('Los Angels Street')

        cy.get(el.cityField).type('Los Angeles')

        cy.get(el.stateField).select('California').should('have.value', '5')

        cy.get(el.zipField).type(UtilFunctions.aleatoryZip())

        cy.get(el.additionalInformationField).type('nada')

        cy.get(el.homePhoneField).type("("+UtilFunctions.aleatoryDDD()+")"+UtilFunctions.aleatoryNumber())

        cy.get(el.mobilePhoneField).type("("+UtilFunctions.aleatoryDDD()+")"+UtilFunctions.aleatoryNumber())

        cy.get(el.registerButton).click()

    }
    
    //método que usa os elementos importados e faz ações apartir deles/ cria uma conta feminina
    fillRecordsWithFemaleConfig() {

        cy.wait(10000)

        cy.get(el.mrRadioButtonFemale).check()
        
        cy.get(el.firstNameField).type(UtilFunctions.aleatoryString())

        cy.get(el.passwordField).type(UtilFunctions.aleatoryStringAndNumber())

        cy.get(el.lastNameField).type('fernandes')

        cy.get(el.dayOfBirthField).select('2').should('have.value', '2')

        cy.get(el.mounthOfBirthField).select('7').should('have.value', '7')

        cy.get(el.yearOfBirthField).select('1989').should('have.value', '1989')

        cy.get(el.companyField).type('Food')

        cy.get(el.addressField).type('Los Angels Street')

        cy.get(el.cityField).type('Los Angeles')

        cy.get(el.stateField).select('California').should('have.value', '5')

        cy.get(el.zipField).type(UtilFunctions.aleatoryZip())

        cy.get(el.additionalInformationField).type('nada')

        cy.get(el.homePhoneField).type("("+UtilFunctions.aleatoryDDD()+")"+UtilFunctions.aleatoryNumber())

        cy.get(el.mobilePhoneField).type("("+UtilFunctions.aleatoryDDD()+")"+UtilFunctions.aleatoryNumber())

        cy.get(el.registerButton).click()

    }
     
}
//comando que exporta a classe para que os métodos dela possam ser utilizados em outro package que importar a mesma 
export default new registrationPage();