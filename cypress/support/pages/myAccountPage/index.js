//nesta file fazemos as classes que possúi funções que usam os elementos da file elements

//comando que "importa" os elementos da pasta elements
const el = require('./elements').elementsMyAccount;

//classe da página
class myAccountPage{
   
     //método que usa os elementos importados e faz ações apartir deles
    validationMyAccountPage(){
        //método que faz uma assertiva para certificar que o teste entrou na página desejada 
        cy.get(el.validationElement).contains('Welcome to your account')
    }
    
}

//comando que exporta a classe para que os métodos dela possam ser utilizados em outro package que importar a mesma
export default new myAccountPage()