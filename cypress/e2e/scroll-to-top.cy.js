/// <reference types="cypress" />

context("scroll to top tests", () => {
    //S'applique à chaque testes
    beforeEach(() => {
        //Visite de la page
        cy.visit('../../app/scroll-to-top.html'); 
    });

    //Tester l’apparition du bouton "scroll-to-top" en bas à droite lorsqu’on scroll vers le bas.
    it("should display the 'scroll to top' button when down scrolling", () => {
        // ACT
        cy.get('[data-cy=scroll-down-button]').click()
        // ASSERT
        cy.get('[data-cy=scroll-to-the-top-button]').should('be.visible')
    })

    //3. Tester le retour en haut de la page et la disparition du bouton "scroll-to-top" lors du clique sur celui-ci.
    it("should hide the scroll up button when clicking on and go on top of the page", () => {
        // ARRANGE
        cy.get('[data-cy=scroll-down-button]').click()
        cy.get('[data-cy=scroll-to-the-top-button]').should('be.visible')
        // ACT
        cy.get('[data-cy=scroll-to-the-top-button]').click()
        // ASSERT
        cy.get('[data-cy=scroll-to-the-top-button]').should('not.be.visible')
        cy.window().its('scrollY').should('equal', 0);
    })
})