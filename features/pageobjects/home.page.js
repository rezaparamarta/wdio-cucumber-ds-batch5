import Page from './page';
import { $, expect } from '@wdio/globals';

class HomePage extends Page{
    
    get cartIcon() {
        return $('#shopping_cart_container');
    };

    get productImage() {
        return $('#item_4_img_link');
    };

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    };

    get cartAdded() {
        return $('//*[@id="shopping_cart_container"]/a/span');
    };

    get removeButton() {
        return $('#remove-sauce-labs-backpack');
    };

    //Function Method
    async existCartIcon() {
        await this.cartIcon.waitForExist({ timeout: 2000 });
    }

    async existProductImage() {
        await this.productImage.waitForExist({ timeout: 2000 });
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click(); // Memanggil loginButton yang baru diubah
    }

    async addedItemAtCart() {
        await this.cartAdded.waitForExist({ timeout: 2000 });
        await expect(this.cartAdded).toHaveText('1');
    }

    async removeItemFromCart() {
        await this.removeButton.click();
    }


    async validateOnHomePage() {
        await expect(this.cartIcon).toBeExisting();
        await expect(this.productImage).toBeExisting();
        await expect(this.addToCartButton).toBeExisting();
        await this.clickAddToCartButton();
        await this.addedItemAtCart();
        await this.removeItemFromCart();
    }

    open() {
        return super.open('inventory.html');
    };
};

export default new HomePage();