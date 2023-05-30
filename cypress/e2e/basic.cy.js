describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('Software Engineer @ Gameopedia AS <> Multiple Solutions || Quick Learner || Rapid Development');
  });
});
