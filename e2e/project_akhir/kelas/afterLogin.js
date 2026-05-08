class afterLogin
{
        checkDashboard()
    {
        cy.url().should('include','dashboard')
    }
    adminPage()
    {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    }
    pimPage()
    {
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    }
    checkEmployeePage()
    {
        cy.url().should('include','viewEmployeeList')
    }
}
export default new afterLogin()