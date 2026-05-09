class afterLogin
{
    checkDashboard()
    {
        cy.url().should('include','dashboard')
    }
    dashboardItemsCheck()
    {
        cy.get('.oxd-sheet').should('have.length', 7).and('be.visible')
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
    leavePage()
    {
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    }
    checkleavePage()
    {
        cy.url().should('include', 'viewLeaveList')
    }
    timePage()
    {
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    }
    checkTimePage()
    {
        cy.url().should('include', 'viewEmployeeTimesheet')
    }
}
export default new afterLogin()