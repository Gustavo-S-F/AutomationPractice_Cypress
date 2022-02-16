//nesta file fazemos as classes que possúi funções que usam os elementos da file elements

//comando que "importa" os elementos da pasta elements
const el = require ('./elements').elementsAuthentication;
import UtilFunctions from '../../Util/UtilFunctions';


//classe da página
class authenticationPage{

    //método que usa os elementos importados e faz ações apartir deles
    provideAValidEmail(){

        cy.xpath(el.emailField).type(UtilFunctions.aleatoryStringAndNumber() + '@gmail.com')
        cy.get(el.createAccountButton).click()



       //essa função é um "util"  que pode ser reutilizada em vários testes pois gera uma sequência aleatória de números e letras 
       /* function aleatoryStringAndNumber() {

            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;

        }*/
    
    }
   
}

//comando que exporta a classe para que os métodos dela possam ser utilizados em outro package que importar a mesma 
export default new authenticationPage();