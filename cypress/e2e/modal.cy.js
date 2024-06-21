/// <reference types="cypress" />

context("modal tests", () => {
    //S'applique à chaque teste
    beforeEach(() => {
        //Visite de la page
        cy.visit('../../app/modal.html'); 
    });


// 2. Tester l’ouverture de la fênetre modale au clique sur display.
it("should open the modal when clicking on the display button", () => {
    //ARRANGE
    // ACT
    cy.get('[data-cy=display-modal-button]').click()
    // ASSERT
    cy.get('[data-cy=modal-div]').should('be.visible')
})
// 3. Tester la fermeture de la fênetre modale au clique en dehors de la modale.
it("should close the modal when clicking outside of the modal", () => {
    // ACT
    cy.get('[data-cy=display-modal-button]').click()
    cy.get('[data-cy=parent-modal-div]').click(0,0)
    // ASSERT
   
    cy.get('[data-cy=modal-div]').should('not.be.visible')
})
// 4. Tester que la fênetre modale contient un <h2></h2> contenant Lorem Ipsum.
it("the modal should contain lorem Ipsum", () => {
     //ACT
     cy.get('[data-cy=display-modal-button]').click()

    // ASSERT
    cy.get('[data-cy=modal-title]').should('have.prop', 'tagName', 'H2').and('contain', 'Lorem Ipsum')
})
})