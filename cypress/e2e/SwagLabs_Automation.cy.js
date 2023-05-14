describe('Testing Swags Lab Functionalities', () => {
    it('Visits the website and login with valid username and password', () => {

        cy.visit('https://www.saucedemo.com/', { timeout: 500000 });
        cy.get('#user-name', { timeout: 500000 }).type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.app_logo').should('be.visible');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Mujahid Akber Ali');
        cy.get('[data-test="lastName"]').type('Akber Ali');
        cy.get('[data-test="postalCode"]').type('78600');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
    })

    //it('Visits the website and login with valid username and password', () => {

    //    cy.visit('https://www.saucedemo.com/', { timeout: 500000 });
    //    cy.get('#user-name', { timeout: 500000 }).type('Mujahid Akber Ali');
    //    cy.get('#password').type('Mujahid Akber Ali');
    //    cy.get('#login-button').click();

    // //   cy.get('.app_logo').should('be.visible');

    //})
})
