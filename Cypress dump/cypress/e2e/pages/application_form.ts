const applicationFormPage = {
    firstname: '[id="nf-field-17"]',
    lastname: '[id="nf-field-18"]',
    emailadd:'[id="nf-field-19"]',
    phone: '[id="nf-field-20"]',
    courseselection: '[id="nf-field-22"]',
    selectselenium: '[value="manual-web-automation-selenium"]',
    selectname: 'Selenium Automation',
    selectmonth: '[id="nf-field-24"]',
    selectfebruary: '[value="february"]',
    selectmonthname: 'February',
    source: '#nf-label-class-field-23-1',
    submitbotton: '#nf-field-15'
}

export class ApplicationFormPage {
    static visitLoginPage() {
      //  cy.allure().logStep('Visit login page')
        cy.visit('/registration-form/');
    }

    
    static verifyApplication(firstname: string, lastname: string, emailadd: string, phone: string) {
   //      cy.allure().logStep('Verify Login page loaded properly')
         cy.get(applicationFormPage.firstname).should('be.visible');
         cy.get(applicationFormPage.firstname).type(firstname)
         cy.get(applicationFormPage.lastname).should('be.visible');
         cy.get(applicationFormPage.lastname).type(lastname);
         cy.get(applicationFormPage.emailadd).should('be.visible');
         cy.get(applicationFormPage.emailadd).type(emailadd);
         cy.get(applicationFormPage.phone).should('be.visible');
         cy.get(applicationFormPage.phone).type(phone);
         cy.get(applicationFormPage.courseselection).select(applicationFormPage.selectname);
         cy.get(applicationFormPage.selectmonth).select(applicationFormPage.selectmonthname);
         cy.get(applicationFormPage.source).click({force: true});
         cy.get(applicationFormPage.submitbotton).click();
    }

}