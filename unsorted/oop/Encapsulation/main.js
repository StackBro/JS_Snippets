'use strict';

/**
 * Class Product
 * @param {string} name
 * @param {number} price
 * @param {number} category
 * @param {number} discount
 * @param {Date} createAt
 * @constructor
 */
function Product(
    name = 'Default product',
    price = 0,
    category = 1,
    discount = 0,
    createAt = new Date()
) {
    const self = this;

    this.name = name;
    this.price = price;
    this.category = category;
    this.priceWithDiscount = getPriceWithDiscount(discount);

    const createDate = createAt;

    /**
     * Private Method
     */
    function getPriceWithDiscount(discount) {
        const price = self.price * (100 - discount) / 100;
        return price
    }

    /**
     * Method for update product
     * @param {string} name
     * @param {number} price
     * @param {number} category
     * @param {number} discount
     * @return this
     */
    this.updateProduct = function (name, price, category, discount = 0) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.priceWithDiscount = getPriceWithDiscount(discount);
        return this
    }

    /**
     *  Method fot get createDate
     * @return {Date} createDate
     */
    this.getCreateDate = function () {
        return createDate;
    }
}

let product = new Product('Coffee', 100, 2);
product.updateProduct(product.name, 99, product.category, 25);
product.getCreateDate();
console.log(product)
