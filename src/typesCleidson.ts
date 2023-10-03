export type FilterMealContext = {
  meals: {
    strMeal:string
    strMealThumb: string
    idMeal: string
  }[]
};

export type FilterDrinkContext = {
  drinks: {
    strDrink:string
    strDrinkThumb: string
    idDrink: string
  }[]
};

// retorno da fetchMealsByIdRecipe
export type ReturnFetchMealsByIdRecipe = {
  meals: [
    {
      idMeal: string,
      strMeal: string,
      strDrinkAlternate: null,
      strCategory: string,
      strArea: string,
      strInstructions: string,
      strMealThumb: string,
      strTags: string,
      strYoutube: string,
      strIngredient1: string,
      strIngredient2: string,
      strIngredient3: string,
      strIngredient4: string,
      strIngredient5: string,
      strIngredient6: string,
      strIngredient7: string,
      strIngredient8: string,
      strIngredient9: string,
      strIngredient10: string,
      strIngredient11: string,
      strIngredient12: string,
      strIngredient13: string,
      strIngredient14: string,
      strIngredient15: string,
      strIngredient16: string,
      strIngredient17: string,
      strIngredient18: string,
      strIngredient19: string,
      strIngredient20: string,
      strMeasure1: string,
      strMeasure2: string,
      strMeasure3: string,
      strMeasure4: string,
      strMeasure5: string,
      strMeasure6: string,
      strMeasure7: string,
      strMeasure8: string,
      strMeasure9: string,
      strMeasure10: string,
      strMeasure11: string,
      strMeasure12: string,
      strMeasure13: string,
      strMeasure14: string,
      strMeasure15: string,
      strMeasure16: string,
      strMeasure17: string,
      strMeasure18: string,
      strMeasure19: string,
      strMeasure20: string,
      strSource: string,
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null
    },
  ]
};

// Tipagem do MealsResults que está no Context

// export type MealsResultsContext = {
//   dateModified: null
//   idMeal: string
//   strArea: string
//   strCategory: string
//   strCreativeCommonsConfirmed: null
//   strDrinkAlternate: null
//   strImageSource: null
//   strIngredient1: string
//   strIngredient2: string
//   strIngredient3:string
//   strIngredient4: string
//   strIngredient5: string
//   strIngredient6: string
//   strIngredient7: string
//   strIngredient8: string
//   strIngredient9: string
//   strIngredient10: string
//   strIngredient11: string
//   strIngredient12: string
//   strIngredient13: string
//   strIngredient14: string
//   strIngredient15: string
//   strIngredient16: string
//   strIngredient17: string
//   strIngredient18: string
//   strIngredient19: string
//   strIngredient20: string
//   strInstructions: string
//   strMeal: string
//   strMealThumb: string
//   strMeasure1: string
//   strMeasure2: string
//   strMeasure3: string
//   strMeasure4: string
//   strMeasure5: string
//   strMeasure6: string
//   strMeasure7: string
//   strMeasure8: string
//   strMeasure9: string
//   strMeasure10: string
//   strMeasure11: string
//   strMeasure12: string
//   strMeasure13: string
//   strMeasure14: string
//   strMeasure15: string
//   strMeasure16: string
//   strMeasure17: string
//   strMeasure18: string
//   strMeasure19: string
//   strMeasure20: string
//   strSource: string
//   strTags: string
//   strYoutube: string
// }[];

// Tipagem do DrinksResults que está no Context

// export type DrinksResultsContext = {
//   dateModified: string
//   idDrink: string
//   strAlcoholic: string
//   strCategory: string
//   strCreativeCommonsConfirmed: string
//   strDrink: string
//   strDrinkAlternate: null
//   strDrinkThumb: string
//   strGlass: string
//   strIBA: null
//   strImageAttribution: null
//   strImageSource: string
//   strIngredient1: string
//   strIngredient2: string
//   strIngredient3: string
//   strIngredient4: string
//   strIngredient5: string
//   strIngredient6: string
//   strIngredient7: string
//   strIngredient8: string
//   strIngredient9: string
//   strIngredient10: string
//   strIngredient11: string
//   strIngredient12: string
//   strIngredient13: string
//   strIngredient14: string
//   strIngredient15: string
//   strInstructions: string
//   strInstructionsDE: string
//   strInstructionsES: string
//   strInstructionsFR: string
//   strInstructionsIT: string
//   strInstructionsZH_HANS: string
//   strInstructionsZH_HANT: string
//   strMeasure1: string
//   strMeasure2: string
//   strMeasure3: string
//   strMeasure4: string
//   strMeasure5: string
//   strMeasure6: string
//   strMeasure7: string
//   strMeasure8: string
//   strMeasure9: string
//   strMeasure10: string
//   strMeasure11: string
//   strMeasure12: string
//   strMeasure13: string
//   strMeasure14: string
//   strMeasure15: string
//   strTags: string
//   strVideo: string
// };
