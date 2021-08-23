describe('Pokedex', () => {
  it("should allow a user to navigate through the list of Pokémon using the 'Next' pagination button", () => {
    cy.visit('/');
    cy.findByRole('button', { name: /Next/i }).click();
    cy.contains('Pidgey');
  });

  it('should allow a user to search for a Pokémon by name', () => {
    cy.visit('/');
    cy.findByPlaceholderText('Search Pokémon').click().type('Zubat');
    cy.contains('Zubat');
  });
});
