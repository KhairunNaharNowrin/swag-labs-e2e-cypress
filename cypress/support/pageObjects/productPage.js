class productPage {

    get addProductSauceLabsBackpack() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }


    get addProductSauceLabsBikeLight() {
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }


    get cartBadge() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    get checkOutButton() {
        return cy.get('[data-test="checkout"]');
    }

    get sortDropdown() {
        return cy.get('[data-test="product-sort-container"]');
    }

    get selectNameAtoZ() {

        return cy.contains('Name (A to Z)')

    }
    get selectNameZtoA() {

        return cy.contains('Name (Z to A)')

    }
    get selectPriceLowToHigh() {

        return cy.contains('Price (Low to High)')

    }
    get selectPriceHighToLow() {
        return cy.contains('Price (High to Low)')

    }

    selectSortOption(option) {
        this.sortDropdown.select(option);
    }

    get productNames() {
        return cy.get('[data-test="inventory-item-name"]')
    }

    get productPrice() {
        return cy.get('[data-test="inventory-item-price"]')
    }



    verifyCartCount(expectedCount) {
        this.cartBadge.should('have.text', expectedCount);
    }

    getProductDetails() {
        const products = [];

        this.productNames.each(($el, index) => {
            const name = $el.text();
            this.productPrice.eq(index).then(($priceEl) => {
                const price = parseFloat($priceEl.text().replace('$', ''));
                products.push({ name, price });
            });
        });

        return cy.wrap(products);
    }

    sortProducts(products, meassure) {
        if (meassure === 'az') {
            return products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (meassure === 'za') {
            return products.sort((a, b) => b.name.localeCompare(a.name));
        } else if (meassure === 'lohi') {
            return products.sort((a, b) => a.price - b.price);
        } else if (meassure === 'hilo') {
            return products.sort((a, b) => b.price - a.price);
        }
    }

    verifySortOrder(meassure) {
        this.getProductDetails().then((products) => {
            const sortedProducts = this.sortProducts(products, meassure);
            const sortedNames = sortedProducts.map(product => product.name);

            this.productNames.each(($el, index) => {
                expect($el.text()).to.equal(sortedNames[index]);
            });
        });
    }




}

export default productPage;
