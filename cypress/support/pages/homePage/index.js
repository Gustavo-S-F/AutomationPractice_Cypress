//nesta file fazemos as classes que possúi funções que usam os elementos da file elements

//comando que "importa" os elementos da pasta elements
const el = require ('./elements').elementsHome;

//classe da página
class homePage{

//método que usa os elementos importados e faz ações apartir deles
goToAuthenticationPage(){
     cy.get(el.signInButton).click({ force: true })
}

}

//comando que exporta a classe para que os métodos dela possam ser utilizados em outro package que importar a mesma 
export default new homePage()