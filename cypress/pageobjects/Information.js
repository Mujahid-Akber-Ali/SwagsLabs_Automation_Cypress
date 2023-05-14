class Information {

    InformationExecution(Firstname,Lastname,PostalCode) {

        cy.get('[data-test="firstName"]').type(Firstname);
        cy.get('[data-test="lastName"]').type(Lastname);
        cy.get('[data-test="postalCode"]').type(PostalCode);
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

    }

}
export default Information;