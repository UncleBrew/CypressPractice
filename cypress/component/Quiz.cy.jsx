import React from 'react';
import Quiz from '../../client/src/components/Quiz.tsx';

describe('<Quiz />', () => {
  it('should render the quiz component', () => {
    cy.mount(<Quiz />);
  });

  it('should render the quiz component with the proper content', () => {
    cy.mount(<Quiz />);
    cy.get('button').should('have.text', 'Start Quiz');
  });

  it('should start the quiz and display a question when the button is clicked', () => {
    cy.mount(<Quiz />);
    cy.get('button').click();
    cy.get('.card.p-4').should('exist');
  });

  it('should check if the restart button exists after 10 questions', () => {
    cy.mount(<Quiz />);
    cy.get('button').click(); 

    for (let i = 0; i < 10; i++) {
      
      cy.get('.btn.btn-primary').first().click(); 
    }

    cy.get('.btn.btn-primary.d-inline-block.mx-auto').should('exist'); 
  });
});
