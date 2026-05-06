//AHMAD SILMI NOORHSIBYAN
describe('Interception login pages',()=>
{
    it('Login menggunakan Username & Password yang salah', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admina')
        cy.get('[name="password"]').type('admin12s3')
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginPage')
        cy.get('.oxd-button').click()
        cy.wait('@loginPage').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(304)
        })
        cy.url().should('include','dashboard')
    })
    it('Login menggunakan Username & Password yang benar lalu ke halaman dashboard', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        cy.get('.oxd-button').click()
        cy.wait('@summaryProfile').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        cy.url().should('include','dashboard')
    })
    it('Login menggunakan Username & Password benar lalu ke halaman admin, intercept API users', ()=>
    {
        cy.intercept('GET','**/api/v2/admin/users*').as('adminPage')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait('@adminPage').its('response.statusCode').should('eq', 200)
        cy.url().should('include','viewSystemUsers')
    })
    it('Login dengan Username & Password yang benar lalu ke halaman PIM, intercept API employees', ()=>
    {
        cy.intercept('GET','**/api/v2/pim/employees*').as('Pim')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.wait('@Pim').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        cy.url().should('include','viewEmployeeList')
    })
    it('Login dengan Username & Password yang benar lalu ke halaman Leave, intercept API leave requests', ()=>
    {
        cy.intercept('GET','**/api/v2/leave/employees/leave-requests*').as('leave')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
        cy.wait('@leave').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        cy.url().should('include','viewLeaveList')
    })
    it('Login dengan Username & Password yang benar lalu ke halaman Leave, intercept API leave requests', ()=>
    {
        cy.intercept('GET','**/api/v2/leave/employees/leave-requests*').as('leave')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include','dashboard')
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
        cy.wait('@leave').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        cy.url().should('include','viewLeaveList')
    })
    it('Login menggunakan Username & Password yang benar lalu ke halaman dashboard kemudian klik profile drop down menu lalu klik about', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('summaryProfile')
        cy.get('.oxd-button').click()
        cy.wait('@summaryProfile').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        })
        cy.url().should('include','dashboard')
        cy.intercept('GET','**/api/v2/core/about').as('about')
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
        cy.wait('@about').its('response.statusCode').should('eq',200)
    })
})