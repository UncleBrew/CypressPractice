describe('Quiz', () => {
    before(() => {
        cy.visit('http://localhost:3001/');
    });

    it('should complete the quiz', () => {
        cy.get('.btn.btn-primary.d-inline-block.mx-auto').should('be.visible').click();
        
        for (let i = 1; i <= 10; i++) {
            cy.get('.card.p-4').should('be.visible');

            cy.get('.btn.btn-primary').first().click();

            if (i < 10) {
                cy.get('.card.p-4').should('be.visible');
            } else {
                cy.get('.btn.btn-primary.d-inline-block.mx-auto').should('be.visible');
            }
        }
    });
});
