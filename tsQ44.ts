function makeSandwich(...ingredients: string[]): void {
  console.log(`You ordered a sandwich with ${ingredients.join(", ")}.`);
}
makeSandwich("turkey", "lettuce", "tomato");
makeSandwich("peanut butter", "jelly");
makeSandwich("ham", "cheese", "mayo", "mustard", "pickles");
