class loginPage {

    //elements = {
    //    usernameInput: () => cy.get('#user-name', { timeout: 500000 }),
    //    passwordInput: () => cy.get('#password'),
    //    loginBtn: () => cy.get('#login-button')
    //}

    //LoginExecution() {

    //    this.elements.usernameInput().type('standard_user');
    //    this.elements.passwordInput().type('secret_sauce');
    //    this.elements.loginBtn().click();
    //}

    LoginExecution(username,password) {

        cy.get('#user-name', { timeout: 500000 }).type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();
    }

}
export default loginPage;