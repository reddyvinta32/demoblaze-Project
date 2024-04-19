class CartPage {
  deleteFirstItem() {
    cy.xpath('//*[@id="tbodyid"]/tr[1]/td[4]/a').click();
  }

  placeOrder() {
    cy.xpath('//*[@id="page-wrapper"]/div/div[2]/button').click();
  }

  fillOrderForm(name, country, city, creditCard, month, year) {
    cy.xpath('//*[@id="name"]').type(name);
    cy.xpath('//*[@id="country"]').type(country);
    cy.xpath('//*[@id="city"]').type(city);
    cy.xpath('//*[@id="card"]').type(creditCard);
    cy.xpath('//*[@id="month"]').type(month);
    cy.xpath('//*[@id="year"]').type(year);
  }

  confirmOrder() {
    cy.get('button[onclick="purchaseOrder()"]').click();
  }

  validateConfirmationText(expectedText) {
    cy.get('.sweet-alert')
      .should('be.visible')
      .and('contain.text', expectedText);
  }
}

export default CartPage;
