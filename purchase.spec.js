import LoginPage from '../pageObjects/LoginPage';
import PhonesPage from '../pageObjects/PhonesPage';
import CartPage from '../pageObjects/CartPage';

describe('Complete Purchase Flow', () => {
  const loginPage = new LoginPage();
  const phonesPage = new PhonesPage();
  const cartPage = new CartPage();

  before(() => {
    loginPage.visit();
    loginPage.login('reddy.vinta', 'reddy123');
    
  });

  it('should add a phone to the cart, navigate to the cart, delete an item, and complete the purchase', () => {
    phonesPage.selectPhoneByNameXpath('Samsung galaxy s6');
    phonesPage.addToCart();
    phonesPage.validateAddToCartConfirmation();
    

    cy.wait(1000); 

    phonesPage.selectPhoneByNameXpath('Nokia lumia 1520');
    phonesPage.addToCart();
    phonesPage.validateAddToCartConfirmation();

    cy.wait(1000); 
    phonesPage.navigateToCart();

    cy.wait(1000); 

    cartPage.deleteFirstItem();

    cy.wait(1000); 

    cartPage.placeOrder();
    cartPage.fillOrderForm('Reddy Vinta', 'Canada', 'Waterloo', '123456789', '09', '2028');
    cartPage.confirmOrder();
    cartPage.validateConfirmationText('Thank you for your purchase!');
    
  });
});
