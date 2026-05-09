import loginPage from "../project_akhir/kelas/loginPage"
import forgotPasswordPage from "../project_akhir/kelas/forgotPasswordPage"
import afterLogin from "../project_akhir/kelas/afterLogin"
import loginData from "../project_akhir/kelas/loginData.json"
describe('Testing Login Feature',()=>
{
        it('LF-01 Login menggunakan Username & Password yang benar', ()=>
    {
        loginPage.intercept()
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        loginPage.interceptWait()
        loginPage.loginButton()
        afterLogin.checkDashboard()
    })
        it('LF-02 Periksa error credentials pop up', ()=>
    {
        loginPage.intercept()
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordFalse)
        loginPage.interceptWait()
        loginPage.loginButton()
        loginPage.alertError()
        
    })
        it('LF-03 Login menggunakan Username & Password yang salah', ()=>
    {
        loginPage.intercept()
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameFalse)
        loginPage.passwordTrue(loginData.passwordFalse)
        loginPage.interceptWait()
        loginPage.loginButton()
        loginPage.alertError()
        afterLogin.checkDashboard()
    })
        it('LF-04 Login menggunakan Username  yang salah', ()=>
    {
        loginPage.intercept()
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameFalse)
        loginPage.passwordTrue(loginData.passwordTrue)
        loginPage.interceptWait()
        loginPage.loginButton()
        loginPage.alertError()
        afterLogin.checkDashboard()
    })
        it('LF-05 Login menggunakan password  yang salah', ()=>
    {
        loginPage.intercept()
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordFalse)
        loginPage.interceptWait()
        loginPage.loginButton()
        loginPage.alertError()
        afterLogin.checkDashboard()
        
})
})
describe('Testing halaman Forgot Password',()=>
{
        it('FP-01 Buka halaman forgot your password', ()=>
    {
        forgotPasswordPage.intercept()
        forgotPasswordPage.visit()
        forgotPasswordPage.forgotPageCheck()
        forgotPasswordPage.interceptWait()
    })
        it('FP-02 Kosongkan field lupa password lalu klik tombol Reset Password', ()=>
    {
        forgotPasswordPage.intercept()
        forgotPasswordPage.visit()
        forgotPasswordPage.forgotPageCheck()
        forgotPasswordPage.interceptWait()
        forgotPasswordPage.resetButton()
        forgotPasswordPage.requiredError()
    })
        it('FP-03 Masukan Username yang akan direset passwordnya lalu tekan tombol reset button', ()=>
    {
        forgotPasswordPage.intercept()
        forgotPasswordPage.visit()
        forgotPasswordPage.forgotPageCheck()
        forgotPasswordPage.interceptWait()
        forgotPasswordPage.inputField(loginData.usernameFalse)
        forgotPasswordPage.resetButton()
        forgotPasswordPage.sendPasswordResetCheck()
    })
        it('FP-04 Klik tombol cancel', ()=>
    {
        forgotPasswordPage.intercept()
        forgotPasswordPage.visit()
        forgotPasswordPage.forgotPageCheck()
        forgotPasswordPage.interceptWait()
        forgotPasswordPage.cancelButton()
    })
})
    describe('Testing halaman setelah login',()=>
{
        it('LP-01 Login menggunakan Username & Password benar lalu ke halaman admin', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        loginPage.loginButton()
        cy.wait('@summaryProfile').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        afterLogin.checkDashboard()
        afterLogin.adminPage()
    })
        it('LP-02 Login menggunakan Username & Password yang benar lalu ke halaman dashboard kemudian klik profile drop down menu lalu klik about', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        cy.intercept('GET','**/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        loginPage.loginButton()
        cy.wait('@summaryProfile').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        afterLogin.checkDashboard()
        cy.intercept('GET','**/api/v2/core/about').as('about')
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
        cy.wait('@about').its('response.statusCode').should('eq',200)
    })
        it('LP-03 Login menggunakan Username & Password yang benar lalu ke halaman dashboard kemudian cek semua elemen Oxd sheet', ()=>
    {
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        cy.intercept('GET','**/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        loginPage.loginButton()
        cy.wait('@summaryProfile').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        afterLogin.checkDashboard()
        afterLogin.dashboardItemsCheck()
    })
    it('LP-04 Login dengan Username & Password yang benar lalu ke halaman PIM, intercept API employees', ()=>
    {
        cy.intercept('GET','**/api/v2/pim/employees*').as('Pim')
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        loginPage.loginButton()
        afterLogin.checkDashboard()
        afterLogin.pimPage()
        cy.wait('@Pim').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        afterLogin.checkEmployeePage()
    })
    it('LP-05 Login dengan Username & Password yang benar lalu ke halaman Leave, intercept API employees', ()=>
    {
        cy.intercept('GET','**/api/v2/leave/leave-periods*').as('leave')
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        loginPage.loginButton()
        afterLogin.checkDashboard()
        afterLogin.leavePage()
        cy.wait('@leave').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        afterLogin.checkleavePage()
    })
    it('LP-06 Login dengan Username & Password yang benar lalu ke halaman Time, intercept API Timesheet', ()=>
    {
        cy.intercept('GET','**/api/v2/time/employees/timesheets/list*').as('time')
        loginPage.visit()
        loginPage.usernameTrue(loginData.usernameTrue)
        loginPage.passwordTrue(loginData.passwordTrue)
        loginPage.loginButton()
        afterLogin.checkDashboard()
        afterLogin.timePage()
        cy.wait('@time').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        afterLogin.checkTimePage()
    })

})
