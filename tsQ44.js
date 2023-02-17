function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with ".concat(ingredients.join(", "), "."));
}
makeSandwich("turkey", "lettuce", "tomato");
makeSandwich("peanut butter", "jelly");
makeSandwich("ham", "cheese", "mayo", "mustard", "pickles");
