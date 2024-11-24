

describe("customer Details", () => {
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

  
    it("customer list", () => {
      cy.contains("Sales and Payments").click({ force: true });
      cy.contains("Customers").click({ force: true });
      cy.contains('Customer List').should('be.visible');

      cy.log("displayed list");
    });


  
    it.skip("add customer", () => {
      cy.contains("Sales and Payments").click({ force: true });
      cy.contains("Customers").click({ force: true });
      cy.contains("+Add new").click({ force: true });
      cy.get('input[name="cname"]').type("Kamal");
      cy.get('input[name="phone"]').type("0765656543");
      cy.get('input[name="nic"]').type("976543234v");


      cy.get('.flex-wrap > :nth-child(2) > :nth-child(1) > .flex').should('be.visible')
      cy.get('.flex-wrap > :nth-child(2) > :nth-child(1) > .flex').click()
      cy.wait(500)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="listbox"]','Company').click()
      cy.get('[role="combobox"]').should('contain','Company')
      cy.wait(500)
      cy.get('input[name="email"]').type("abc@gmail.com");
      cy.get('textarea[name="location"]') 
        .type("Test location value") 
        .should("have.value", "Test location value");

      cy.get('button[type="submit"]').click()
  
  });


  it("validate phonenumber", () => {
    cy.contains("Sales and Payments").click({ force: true });
    cy.contains("Customers").click({ force: true });
    cy.contains("+Add new").click({ force: true });
    cy.get('input[name="cname"]').type("Kamal");
    cy.get('input[name="phone"]').type("jjhhs");
    cy.get('input[name="nic"]').type("976543234v");


    cy.get('.flex-wrap > :nth-child(2) > :nth-child(1) > .flex').should('be.visible')
    cy.get('.flex-wrap > :nth-child(2) > :nth-child(1) > .flex').click()
    cy.wait(500)
    cy.get('[role="listbox"]').should('be.visible')
    cy.contains('[role="listbox"]','Company').click()
    cy.get('[role="combobox"]').should('contain','Company')
    cy.wait(500)
    cy.get('input[name="email"]').type("abc@gmail.com");
    cy.get('textarea[name="location"]') 
      .type("Test location value") 
      .should("have.value", "Test location value");

    cy.get('button[type="submit"]').click()

    cy.wait(500)
    cy.get("div[class='mt-5'] div[class='space-y-2'] p[class='text-sm font-medium text-destructive']") 
        .should('have.text', 'Invalid phone number format.');
    

});


it("validate Email", () => {
  cy.contains("Sales and Payments").click({ force: true });
  cy.contains("Customers").click({ force: true });
  cy.contains("+Add new").click({ force: true });
  cy.get('input[name="cname"]').type("Kamal");
  cy.get('input[name="phone"]').type("0376545333");
  cy.get('input[name="nic"]').type("976543234v");


  cy.get('.flex-wrap > :nth-child(2) > :nth-child(1) > .flex').should('be.visible')
  cy.get('.flex-wrap > :nth-child(2) > :nth-child(1) > .flex').click()
  cy.wait(500)
  cy.get('[role="listbox"]').should('be.visible')
  cy.contains('[role="listbox"]','Company').click()
  cy.get('[role="combobox"]').should('contain','Company')
  cy.wait(500)
  cy.get('input[name="email"]').type("abcgmail.com");
  cy.get('textarea[name="location"]') 
    .type("Test location value") 
    .should("have.value", "Test location value");

  cy.get('button[type="submit"]').click()

  cy.wait(1000)
  

      cy.get('div.space-y-2')
      .find('p.text-sm.font-medium.text-destructive') 
      .should('have.text', 'Invalid email');
  

});


it("submit form without data", () => {
 
  cy.contains("Sales and Payments").click({ force: true });
  cy.contains("Customers").click({ force: true });
  cy.contains("+Add new").click({ force: true });
  cy.get('button[type="submit"]').click()
  //cy.contains('New Customer').should(be.visible)
  cy.get('p.text-xl.font-bold.pb-6.pt-3.pl-6')  // Target the <p> element with the appropriate classes
  .should('be.visible')  // Ensure the element is visible
  .and('have.text', 'New Customer');  


});

it("Customer list view when click view list", () => {
 
  cy.contains("Sales and Payments").click({ force: true });
  cy.contains("Customers").click({ force: true });
  cy.contains("+Add new").click({ force: true });
  cy.wait(1000)

  // cy.get('button.bg-green-600')
  // .contains('View List')  
  // .click();
  // cy.wait(500)
  // cy.contains('Customer List').should('be.visible');

  cy.get('button[type="button"]')  // Select the button by its 'type' attribute
  .contains('View List')         // Ensure the button contains the text "View List"
  .should('have.attr', 'type', 'button')  // Assert the button has 'type="button"'
  .click();  // Click the button
  cy.wait(500)
   cy.contains('Customer List').should('be.visible');
  

});


it.skip("Edit customer", () => {
 
  cy.contains("Sales and Payments").click({ force: true });
  cy.contains("Customers").click({ force: true });
  cy.contains('Customer List').should('be.visible');

  cy.get('table.w-full tbody tr')
  .first()
  .contains('button', 'Edit') // Find the button with the text "Edit"
  .click(); // Click the button

  cy.get('form.w-full').should('be.visible');
    cy.get('input[name="email"]')
      .should('be.visible')   // Ensure the email input field is visible
      .clear({ force: true })  // Clear the input field (force in case there's an input mask)
      .focus()                 // Focus on the input field
      .type('{selectall}')      // Select all text in the input field
      .type('{backspace}')      // Simulate the backspace key to delete the text
      .should('have.value', '')
      .type('abcd@gmail.com')      // Type the new phone number       
      .should('have.value', 'abcd@gmail.com'); 
      cy.contains('button', 'Update') // Find the button with the text "Edit"
  .click(); // Click the butt
  
  cy.wait(500)


});

it.only("Delete customer", () => {
 
  cy.contains("Sales and Payments").click({ force: true });
  cy.contains("Customers").click({ force: true });
  cy.contains('Customer List').should('be.visible');

  cy.get('table.w-full tbody tr')
  .first()
  .contains('button', 'Delete') // Find the button with the text "Edit"
  .click(); // Click the button

  cy.get('div.flex').should('be.visible'); // Ensure the dialog/modal is visible

  // Click the "Delete" button
  cy.get('button.bg-red-600')  // Select the "Delete" button by its background color class
    .should('be.visible')  // Make sure the button is visible
    .click();              // Click the "Dele

 
  
  cy.wait(500)


});


});
