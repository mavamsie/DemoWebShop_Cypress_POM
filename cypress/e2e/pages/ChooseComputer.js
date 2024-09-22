
class ComputerChoice {

    choice() {

        ///Choose BUILD YOUR OWN CHEAP COMPUTER ///

        cy.get(':nth-child(1) > .product-item > .picture > a > img').click()

        ///Add to chart

        cy.get('#add-to-cart-button-72').click()

        // Check my Shooping Cart

        cy.get('.ico-cart > .cart-label').click()

        // Accept Ts & Cs check it out 

        cy.get("#termsofservice").click()

        //CheckOut 

      cy.get('#checkout').click({force: true})
       cy.wait(2000)

    }
}

export default ComputerChoice