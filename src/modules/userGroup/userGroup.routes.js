const router = require('express').Router();
const controller = require('./userGroups.controller');

/**
 * @swagger
 *   /api/userGroups:
 *     get:
 *       tags:
 *       - userGroups
 *       description: Get all user groups
 *       responses:
 *         200:
 *           description: Array with a list of user groups
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/userGroups/{id}:
  *     get:
  *       tags:
  *         - userGroups
  *       description: Get a user groups by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the user groups
  *       responses:
  *         200:
  *           description: userGroups
  */
 
router.get('/:id', controller.getById);

router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);
router.patch('/:id',controller.patch);

module.exports = router;

