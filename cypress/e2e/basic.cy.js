describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('Software Engineer @ Gameopedia AS⭐Rapid Development⭐Quick Learner⭐End-User Focus');
  });
});
