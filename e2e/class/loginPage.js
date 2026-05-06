class loginPage{
    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    usernameTrue(username)
    {
        cy.get('[name="username"]').type(username)
    }
    passwordTrue(passwordTrue)
    {
        cy.get('[name="password"]').type(passwordTrue)
    }
    loginButton()
    {
        cy.get('.oxd-button').click()
    }
    checkDashboard()
    {
        cy.url().should('include','dashboard')
    }
    adminPage()
    {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    }
    forgotPage()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
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
export default new loginPage()