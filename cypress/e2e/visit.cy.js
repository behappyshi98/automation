describe("Login Functionality", () => {
  // Before each test, visit the login page

  beforeEach(() => {
    cy.visit("http://localhost:6001/login"); // Adjust the URL as needed
  });

  describe("login1", () => {
    it("correctlogin", () => {
      cy.get('input[placeholder="Enter your email"]').type("lak@gmail.com");
      cy.get('input[name="password"]').type("987654321");
      cy.log("Login complete");
      cy.get('button[type="submit"]').click();
      //cy.get('h1.text-3xl.font-bold.mb-6')  // Select the <h1> element using its classes
      cy.get('h1[class="text-3xl font-bold mb-6"]')
        .should("be.visible") // Assert that the element is visible
        .and("contain.text", "Hello lak!");

      //cy.contains("Sales and Payments").click({ force: true })
      //cy.contains("Customers").click({ force: true })
      //cy.contains("+Add new").click({ force: true })
    });

    it("incorrectlogin", () => {
      cy.get('input[placeholder="Enter your email"]').type("kamal@gmail.com");
      cy.get('input[name="password"]').type("123456789");
      cy.log("Login incomplete");
      cy.get('button[type="submit"]').click();
    });
  });
});
