const pool = require('../../db');
const queries = require('./queries');


const getRecipes = (req, res) => {
    pool.query(queries.getRecipes, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });

};
const getRecipeById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getRecipeById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
};
const addRecipe = (req,res) => {
    const { name, ingredients, cooking_time, instructions } = req.body;
    //check if name already exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if (results.rowCount.length) {
      res.send("name already exists");
    }
    pool.query
    (queries.addRecipe, 
    [name, ingredients, cooking_time, instructions], 
    (error, results) => {
    if(error) throw error;
    res.status(201).send("Recipe created successfully!");
    console.log("recipe create")
 })
    });
}

const deleteRecipe = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query(queries.getRecipeById, [id], (error, results) => {
        const noRecipeFound = !results.rows.length;
        if(noRecipeFound){
            res.send("Recipe does not exist in database")
        }
        pool.query(queries.deleteRecipe, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Recipe deleted successfully!")
        });

    });
};

const updateRecipe = (req, res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body;
    pool.query(queries.getRecipeById, [id], (error, results) => {
        const noRecipeFound = !results.rows.length;
        if(noRecipeFound){
            res.send("Recipe does not exist in database")
        }
        pool.query(queries.updateRecipe, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Recipe has been updated successfully")
        });
    });
};

module.exports = {
    getRecipes,
    getRecipeById,
    addRecipe,
    deleteRecipe,
    updateRecipe,
    
};