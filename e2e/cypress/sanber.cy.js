//AHMAD SILMI NOORHSIBYAN
describe('Login Feature',()=>
{
    it('Login menggunakan Username & Password yang benar', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        cy.get('.oxd-button').click()
        cy.wait('@summaryProfile')
        cy.url().should('include','dashboard')
    })
        it('Login menggunakan Username & Password yang salah', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admina')
        cy.get('[name="password"]').type('admin12ss3')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
    })
        it('Login menggunakan Username  yang salah', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admina')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
    })
        it('Login menggunakan password  yang salah', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admins123')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
        
    })
        it('Login dengan field username kosong', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]')
        cy.get('[name="password"]').type('admins123')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
    })
        it('Login dengan field password kosong', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
    })
        it('Login dengan field Username dan Password kosong', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]')
        cy.get('[name="password"]')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
    })
        it('Buka halaman forgot your password?', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-forgot-header').click()
        
    })
        it('Reset password dengan field kosong?', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-forgot-header').click()
        cy.get('.orangehrm-forgot-password-button--reset').click()
    })
        it('Cancel reset password', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-forgot-header').click()
        cy.get('.orangehrm-forgot-password-button--cancel').click()
    })
})