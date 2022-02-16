class Util{

    aleatoryStringAndNumber() {

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

    }

     //essa função é um "util"  que pode ser reutilizada em vários testes pois gera uma sequência aleatória de letras 
     aleatoryString() {

        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

    }

     //essa função é um "util"  que pode ser reutilizada em vários testes pois gera uma sequência aleatória de números com - 
     aleatoryNumber() {

        var text = "";
        var possible = "0123456789-";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

    }

     //essa função é um "util"  que pode ser reutilizada em vários testes pois gera uma sequência aleatória de números  
     aleatoryZip() {

        var text = "";
        var possible = "0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

    }

     aleatoryDDD() {

        var text = "";
        var possible = "0123456789";

        for (var i = 0; i < 2; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

    }

}

export default new Util();