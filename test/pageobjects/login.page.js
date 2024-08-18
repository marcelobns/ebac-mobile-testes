const { $ } = require('@wdio/globals')

class LoginPage {
    get email (){
        return $('id:email')
    }

    get password (){
        return $('android=new UiSelector().text("Password")')
    }

    get btnLogin(){
        return $('~Login')
    }

    async login(email, password){
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.btnLogin.click()
    }

}

module.exports = new LoginPage();