class PhonesPage {
  selectPhoneByNameXpath(phoneName) {
    cy.xpath(`//*[@id="tbodyid"]/div[contains(@class, "hrefch")]/div/div/h4/a[text()="${phoneName}"]`).click();
  }

  addToCart() {
    cy.xpath(`//*[@id="tbodyid"]/div[2]/div/a`).click();
  }

  validateAddToCartConfirmation() {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Product added.');
    });
  }

  navigateToCart() {
    cy.xpath('//*[@id="cartur"]').click();
  }
}

export default PhonesPage;
