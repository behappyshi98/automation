

describe("invoice Details", () => {
  // Before each test, visit the login page
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


  beforeEach(() => {
    // cy.visit("https://acc.ceyinfo.cloud/"); // Adjust the URL as needed
    // cy.get('input[placeholder="Enter your email"]').type("kamal@gmail.com");
    // cy.get('input[name="password"]').type("123456789");

    cy.visit("http://localhost:6001/login"); // Adjust the URL as needed
    cy.get('input[placeholder="Enter your email"]').type("lak@gmail.com");
    cy.get('input[name="password"]').type("987654321");

    cy.get('button[type="submit"]').click();
    cy.log("Login complete");
  });

  
    it.only("add invoice", () => {
      cy.contains("Sales and Payments").click({ force: true });
      cy.contains("Invoices").click({ force: true });
      cy.wait(1000)
      cy.contains('Invoice Details').should('be.visible');

      cy.log("displayed list");

      cy.contains("+Add new").click({ force: true });
      cy.wait(10000)
      cy.get("input[name='invoiceno']").type("98")



      cy.contains('Select a customer')  // Ensure this targets the correct element
      .should('be.visible')
      .click({ force: true }); // Force the click if necessary

    // Wait for the dropdown (listbox) to be visible
    cy.get('[role="listbox"]', { timeout: 15000 })
      .should('be.visible');

    // Click on the "Dilanga" option in the listbox
    cy.get('[role="listbox"]')
      .contains('Dilanga')  // Find the option with text "Dilanga"
      .click({ force: true }); // Force click if the option is not interactable

    // Wait for the dropdown to close, or ensure it is not visible anymore
    // cy.get('[role="listbox"]', { timeout: 5000 }).should('not.exist');
cy.wait(15000)
    // // Use `.invoke('text')` to get the actual button text, which can help with dynamic content
    // cy.get('[role="listbox"]')
    //   .should('be.visible')
    //   .invoke('text')
    //   .should('include', 'Dilanga'); // Check if the button contains the text "Dilanga"

    // Alternatively, use `.contains()` for flexible matching if you don't need exact text
    cy.get('[role="combobox"]')
      .should('be.visible')
      .contains('Dilanga');





    });


  
    




});
