

import NewLoginDetails from '.././pages/loginPage.js';

import ComputerMenu from '.././pages/computerMenu.js';

import ChooseComputer from '.././pages/ChooseComputer.js';

import BillingPayment from '.././pages/BillingPayment.js';

const login = new NewLoginDetails();

const menu = new ComputerMenu();

const Choose = new ChooseComputer();

const pay = new BillingPayment();


describe('Demo Web Shop', () => {

  it('Login on the shopping cart', () => {

    cy.fixture('example').then(testdata => {
      testdata.forEach(data => {

        login.loginDetails(data)
        menu.MenuDeskop()
        Choose.choice()
        pay.payment()
       
        

      });
    });


  })
})