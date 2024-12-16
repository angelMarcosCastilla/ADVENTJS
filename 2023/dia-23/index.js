function organizeChristmasDinner(dishes) {
  const ingredientMap = {};

  dishes.forEach(([dish, ...ingredients]) => {
    ingredients.forEach((ingredient) => {
      ingredientMap[ingredient] ??= [];
      ingredientMap[ingredient].push(dish);
    });
  });

  return Object.entries(ingredientMap)
    .filter(([_, dishes]) => dishes.length > 1)
    .map(([ingredient, dishes]) => {
      dishes.sort((a,b) => a.localeCompare(b));
      return [ingredient, ...dishes]
    }).sort((a,b) =>a[0].localeCompare(b[0]) )
}


console.log(organizeChristmasDinner([
  ["gingerbread", "flour", "ginger", "sugar"],
  ["glazed ham", "ham", "honey", "sugar", "vinegar"],
  ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
  ["vegetable soup", "carrot", "potato", "onion", "garlic"],
  ["fruit punch", "apple juice", "orange juice", "sugar"]
]));
