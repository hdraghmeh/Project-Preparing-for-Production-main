describe('🧪 Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
    // انتظار تحميل العناصر الأساسية لتجنب الأخطاء
    cy.get('[data-cy=nav-create-set]', { timeout: 10000 }).should('be.visible');
  });

  it('✅ يجب أن ينشئ مجموعة جديدة عند إدخال اسم صالح', () => {
    cy.get('[data-cy=nav-create-set]').click();
    cy.get('[data-cy=set-name]', { timeout: 5000 }).should('be.visible').type('Math');
    cy.get('[data-cy=create-set-btn]', { timeout: 5000 }).should('be.visible').click();

    cy.contains('Math').should('exist');
  });

  it('❌ يجب أن يعرض رسالة خطأ عند ترك الحقل فارغًا', () => {
    cy.get('[data-cy=nav-create-set]').click();
    cy.get('[data-cy=create-set-btn]', { timeout: 5000 }).should('be.visible').click();

    cy.contains('Please enter a name').should('be.visible');
  });
});