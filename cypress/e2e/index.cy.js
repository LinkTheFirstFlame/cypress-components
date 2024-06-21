/// <reference types="cypress" />

context("index tests", () => {
    //S'applique à chaque testes
    beforeEach(() => {
        //Visite de la page
        cy.visit('../../app/index.html'); 
    });

//2. Tester l'ajout de quatre todos puis la suppression de la deuxième todo au clique sur la croix associée. Enfin tester le fait qu’il ne reste plus que 3 todos. 
    it("should add 4 todo, delete the second, and should remain 3 todos", () => {
        // ARRANGE
        cy.get('[data-cy=todo-input]')
        cy.get('[data-cy=todo-submit-button]')

        // ACT
        cy.addTodo('Task 1')
        cy.addTodo('Task 2')
        cy.addTodo('Task 3')
        cy.addTodo('Task 4')
               
        // ASSERT
        cy.get('[data-cy=todo-element-div]').should('have.length', 4)
        cy.get('[data-cy=delete-todo-button]').eq(1).click();
        cy.get('[data-cy=todo-element-div]').should('have.length', 3)
    })
})