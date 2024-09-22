class ComputerMenu {

    MenuDeskop() {


        cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click()

        cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div.header-menu > ul.top-menu > li:nth-child(2) > a").trigger('mouseover')

        cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div.header-menu > ul.top-menu > li:nth-child(2) > ul > li:nth-child(1)").click()

    }
}

export default ComputerMenu