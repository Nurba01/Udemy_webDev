var carSeller1 = {
    firstName: 'Jack',
    lastName: "white",
    regYear: 2010,
    hasDiscount: true,
    discount: 0,
    discountCalculation: function() {
        var discount;

        if ((2019 - this.regYear) <= 2) {
            discount = 0
        } else if (((2019 - this.regYear) > 2) && ((2019 - this.regYear) <= 5)) {
            discount = 20;
        } else if (((2019 - this.regYear) > 5)) {
            discount = 30;
        }
        this.discount = discount;
    }
}
carSeller1.discountCalculation();
console.log(carSeller1.discount);