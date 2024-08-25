import Page from './page';

class CartPage extends Page{
    
    get checkButton() {};
    get continueShoppingButton() {};

    open() {
        return super.open('cart.html');
    };
};

export default new CheckoutPage();