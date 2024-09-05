import Page from './page';
import { $, expect } from '@wdio/globals';

class CartPage extends Page{
    
    get titleItem() {
        return $('//*[@id="item_4_title_link"]/div');
    };


    get checkButton() {
        return $('#checkout');
    };

    get continueShoppingButton() {
        return $('#continue-shopping');
    };

    open() {
        return super.open('cart.html');
    };
};

export default new CheckoutPage();