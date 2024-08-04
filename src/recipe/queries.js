const getRecipes = "SELECT * FROM recipes";
const getRecipeById = "SELECT * FROM recipes WHERE id=$1";
const checkNameExists = "SELECT s FROM recipes s WHERE s.name = $1";
const addRecipe = "INSERT INTO recipes (name, ingredients, cooking_time, instructions) VALUES ($1, $2, $3, $4)";
const deleteRecipe = "DELETE FROM recipes WHERE id = $1";
const updateRecipe = "UPDATE recipes SET name = $1 WHERE id = $2"

module.exports = {
    getRecipes,
    getRecipeById,
    checkNameExists,
    addRecipe,
    deleteRecipe,
    updateRecipe,
    
}