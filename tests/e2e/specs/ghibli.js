describe('Visit the app', () => {
  it('Visits the app root url', () => {
    cy.visit('http://127.0.0.1:5502/index.html');
    cy.contains('h1', 'Studio Ghibli Films');
    cy.wait(1000);
    cy.get('input[name="query"]').type('castle in the sky', { delay: 50 });
    cy.contains('h2', 'Castle in the Sky');
    cy.contains('h3', 'Description').click();
    cy.contains('p', 'The orphan Sheeta');
    cy.wait(1000);
    cy.contains('h3', 'Description').click();
  });
})