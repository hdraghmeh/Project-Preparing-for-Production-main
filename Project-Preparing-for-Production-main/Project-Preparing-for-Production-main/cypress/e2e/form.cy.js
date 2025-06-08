describe('🧪 Form Tests', () => {
  beforeEach(() => {

    cy.visit('http://localhost:1234');
  });

  it('✅ يجب أن ينشئ مجموعة جديدة عند إدخال اسم صالح', () => {
    cy.get('[data-cy=nav-create-set]').click();
    cy.get('[data-cy=set-name]').type('Math');
    cy.get('[data-cy=create-set-btn]').click();

 
    cy.contains('Math').should('exist');
  });

  it('❌ يجب أن يعرض رسالة خطأ عند ترك الحقل فارغًا', () => {
    cy.get('[data-cy=nav-create-set]').click();
    cy.get('[data-cy=create-set-btn]').click();

  
    cy.contains('Please enter a name').should('be.visible');
  });
});
