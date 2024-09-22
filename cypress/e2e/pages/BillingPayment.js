
class BillingPayment {

    payment() {

      // cy.wait(1000)
      // cy.get('#BillingNewAddress_Company').type('Redpanda')
      // cy.wait(3000)
      // cy.get('#BillingNewAddress_CountryId').select('South Africaa')
      // cy.get('#BillingNewAddress_City').type('Cape Town')
      // cy.get('#BillingNewAddress_Address1').type('01 Sage Street adress1')
      // cy.wait(3000)
      // cy.get('#BillingNewAddress_Address2').type('01 Sage Street adress2')
      // cy.get('#BillingNewAddress_ZipPostalCode').type('1234')
      // cy.get('#BillingNewAddress_PhoneNumber').type('0787201959')
      // cy.wait(3000)
      // cy.get('#BillingNewAddress_FaxNumber').type('1234567')


       

      cy.get('#billing-buttons-container > .button-1').click({force: true})
      cy.get('#PickUpInStore').click({force: true})
      cy.get('#shipping-buttons-container > .button-1').click({force: true})
      cy.get('#shipping-method-buttons-container > .button-1').click({force: true})
      cy.get('#payment-method-buttons-container > .button-1').click()
      cy.get('#payment-info-buttons-container > .button-1').click()
      cy.get('#confirm-order-buttons-container > .button-1').click()
       

    }

}

export default BillingPayment