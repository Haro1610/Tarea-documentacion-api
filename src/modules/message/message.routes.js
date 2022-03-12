const router = require('express').Router();
const controller = require('./messages.controller');

/**
 * @swagger
 *   /api/Messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messagess
 *       responses:
 *         200:
 *           description: Array with a list of messages
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/Messages/{id}:
  *     get:
  *       tags:
  *         - Messages
  *       description: Get a message by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the message
  *       responses:
  *         200:
  *           description: Messages
  */
 
router.get('/:id', controller.getById);

router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);
router.patch('/:id',controller.patch);

module.exports = router;

