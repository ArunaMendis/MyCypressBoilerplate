
export class ConfirmationPage {
    static visitConfirmatioPage() {
       // cy.allure().logStep('Visit login page')
        cy.visit('/registration-form/');
    }

    static verifyConfirmationPage() {
     //    cy.allure().logStep('Verify Login page loaded properly')
       cy.contains('h2', 'Training Registration Form').should('be.visible');
       
    }
}