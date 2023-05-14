import loginPage from '../pageobjects/loginPage'
import Checkout from '../pageobjects/Checkout'
import Information from '../pageobjects/Information'

describe('Testing Swags Lab Functionalities', () => {

    beforeEach(function () {
        // executes prior each test within it block
        cy.visit('https://www.saucedemo.com/', { timeout: 500000 });
    })

    //Smoke testing
    it('Visits the website and login with valid username and password', () => {


        //For login

        const loginObj = new loginPage();
        loginObj.LoginExecution('standard_user','secret_sauce');

        //cy.get('#user-name', { timeout: 500000 }).type('standard_user');
        //cy.get('#password').type('secret_sauce');
        //cy.get('#login-button').click();

        cy.get('.app_logo').should('be.visible');


        //For Checkout

        const CheckoutObj = new Checkout();
        CheckoutObj.CheckoutExecution();

        //For Information
        const InformationObj = new Information();
        InformationObj.InformationExecution('Mujahid Akber Ali', 'Akber Ali', '78600');
 
    })

    //Negative test case

    it('Visits the website and login with Invalid username and password', () => {

        const loginObj = new loginPage();
        loginObj.LoginExecution('Mujahid Akber Ali', 'Mujahid Akber Ali');


        cy.get('.app_logo').should('be.visible');

    })
})
