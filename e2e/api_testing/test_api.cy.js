///<reference types="cypress"/>
describe('API Testing ReqRes', () => {
  it('GET List 1 item dengan id', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/categories/4')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
  it('GET List 1 item dengan slug', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/categories/slug/shoes')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
    it('Update data shoes',()=>{
    cy.request({
      method:'PUT',
      url:'https://api.escuelajs.co/api/v1/categories/4',
      body:{
        name:"sepatuku",
        image:'https://i.imgur.com/ZANVnHwE.jpeg'
      }
    }).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name','sepatuku')
      expect(response.body).to.have.property('image','https://i.imgur.com/ZANVnHwE.jpeg')
    })
  })
  it('GET List all available categories', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/categories')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
  it('Hit 1 data sepatu',()=>{
    cy.request({
      method: 'POST',
      url:'https://api.escuelajs.co/api/v1/categories/',
      body:{
        name:"sepatu",
        image:'https://i.imgur.com/ZANVnHE.jpeg'
      }
    }).then((response)=>{
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('name','sepatu')
      expect(response.body).to.have.property('image','https://i.imgur.com/ZANVnHE.jpeg')
    })
  })
  it('Update data sepatu',()=>{
    cy.request({
      method:'PUT',
      url:'https://api.escuelajs.co/api/v1/categories/149',
      body:{
        name:"sepatuku",
        image:'https://i.imgur.com/ZANVnHwE.jpeg'
      }
    }).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name','sepatuku')
      expect(response.body).to.have.property('image','https://i.imgur.com/ZANVnHwE.jpeg')
    })
  })
  it('Hapus data tes sepatu',()=>{
    cy.request({
      method:'DELETE',
      url:'https://api.escuelajs.co/api/v1/categories/149',
    }).then((response)=>{
      expect(response.status).to.eq(200)
    })
  })
})