import Page from './page';
import { $, expect } from '@wdio/globals';

class CartPage extends Page{
    
    get checkButton() {};
    get continueShoppingButton() {};

    open() {
        return super.open('cart.html');
    };
};

export default new CheckoutPage();