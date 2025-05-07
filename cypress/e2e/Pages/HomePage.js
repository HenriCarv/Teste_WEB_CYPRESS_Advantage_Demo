class HomePage {
  go() {
    cy.visit("/");
    cy.get('.logo').should('contain', 'dvantage');
  }

  clickSeOffer() {
    cy.xpath('(//button[@class="ng-scope"])[1]').click()
  }

  AddItemOnCart() {
    cy.xpath('//button[@class="roboto-medium ng-scope"]').click()
    cy.xpath('(//a[@class="img"])[4]').click()
    cy.xpath('//a[@class="select  ng-binding"]').should("have.text", " SHOPPING CART");
    cy.xpath('//label[@class="roboto-regular productName ng-binding"]').should("have.text", "HP PAVILION 15Z TOUCH LAPTOP");
  }

  GoToCheckout() {
    cy.xpath('//button[@class="roboto-medium tami uft-class ng-binding"]').click()
    cy.xpath('(//h3[@class="ng-binding"])[1]').should("have.text", "HP PAVILION 15Z TOUCH LAPTOP");
  }
}

export default new HomePage();
