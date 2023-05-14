class Checkout {

    CheckoutExecution() {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();

    }

}
export default Checkout;