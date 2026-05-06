import loginPage from "../../class/loginPage"
import loginData from "../../class/loginData.json"
describe('Login Feature',()=>
{
        it('Login menggunakan Username & Password yang benar', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        loginPage.loginButton()
        loginPage.checkDashboard()
    })
        it('Login menggunakan Username & Password yang salah', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameFalse)
        loginPage.passwordTrue(loginData.passwordFalse)
        loginPage.loginButton()
        loginPage.checkDashboard()
    })
        it('Login menggunakan Username  yang salah', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameFalse)
        loginPage.passwordTrue(loginData.passwordTrue)
        loginPage.loginButton()
        loginPage.checkDashboard()
    })
        it('Login menggunakan password  yang salah', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordFalse)
        loginPage.loginButton()
        loginPage.checkDashboard()
        
    })
        it('Buka halaman forgot your password?', ()=>
    {
        loginPage.visit()
        loginPage.forgotPage()
    })
        it('Login menggunakan Username & Password benar lalu ke halaman admin', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        loginPage.loginButton()
        cy.wait('@summaryProfile').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        loginPage.checkDashboard()
        loginPage.adminPage()
    })
        it('Login menggunakan Username & Password yang benar lalu ke halaman dashboard kemudian klik profile drop down menu lalu klik about', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        loginPage.loginButton()
        cy.wait('@summaryProfile').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        loginPage.checkDashboard()
        cy.intercept('GET','**/api/v2/core/about').as('about')
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
        cy.wait('@about').its('response.statusCode').should('eq',200)
    })
    it('Login dengan Username & Password yang benar lalu ke halaman PIM, intercept API employees', ()=>
    {
        cy.intercept('GET','**/api/v2/pim/employees*').as('Pim')
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        loginPage.loginButton()
        loginPage.checkDashboard()
        loginPage.pimPage()
        cy.wait('@Pim').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        loginPage.checkEmployeePage()
    })
})