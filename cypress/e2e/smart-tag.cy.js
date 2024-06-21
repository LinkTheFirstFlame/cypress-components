/// <reference types="cypress" />

context("smart tag tests", () => {
    //S'applique à chaque testes
    beforeEach(() => {
        //Visite de la page
        cy.visit('../../app/smart-tag.html'); 
    });

    // 2. Tester l'apparition du tag au survol du bouton "See more".
    it("should display the 'scroll to top' button when down scrolling", () => {
        // ACT
        cy.get('[data-cy=see-more-trigger-div]').trigger('mouseover')
        
        // ASSERT
        cy.get('[data-cy=see-more-content-div]').should('be.visible')
    })

    // 3. Tester la disparition du tag à la sortie du survol du bouton "See more". 
    it("should hide when the mouse is outside of the 'See more' button", () => {
        //ARRANGE
        cy.get('[data-cy=see-more-trigger-div]').trigger('mouseover')

        // ACT
        cy.get('[data-cy=see-more-trigger-div]').trigger('mouseout')

        // ASSERT
        cy.get('[data-cy=see-more-content-div]').should('not.be.visible')
    })
})