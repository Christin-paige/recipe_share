const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get('/', controller.getRecipes);
router.get('/:id', controller.getRecipeById);
router.post('/', controller.addRecipe);
router.delete('/:id', controller.deleteRecipe);
router.put('/:id', controller.updateRecipe);



module.exports = router;