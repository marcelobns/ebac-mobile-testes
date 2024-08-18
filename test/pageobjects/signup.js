const { $ } = require('@wdio/globals');

class SignupPage {
    get nome (){
        return $('id:firstName');
    }

    get sobrenome (){
        return $('id:lastName');
    }

    get telefone (){
        return $('id:phone');
    }

    get email (){
        return $('id:email');
    }

    get senha (){
        return $('id:password');
    }

    get senha2(){
        return $('id:repassword')
    }

    get btnCreate (){
        return $('id:create')
    }
   
    async register (nome, sobrenome, telefone, email, senha, senha2) {
        await this.nome.setValue(nome)
        await this.sobrenome.setValue(sobrenome)
        await this.telefone.setValue(telefone)
        await this.email.setValue(email)
        await this.senha.setValue(senha)
        await this.senha2.setValue(senha2)
        await this.btnCreate.click()
    }
}

module.exports = new SignupPage();