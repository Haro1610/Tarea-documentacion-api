const router = require('express').Router();
const controller = require('./channels.controllers');
//const router = express.Router();

/**
 * @swagger
 *   /api/Channel:
 *     get:
 *       tags:
 *       - Channel
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/Channel/{id}:
  *     get:
  *       tags:
  *         - Channel
  *       description: Get a channel by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the channel
  *       responses:
  *         200:
  *           description: Channel
  */
 
router.get('/:id', controller.getById);

router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);
router.patch('/:id',controller.patch);


module.exports = router;

/*const ChannelsController = require('./channels.controllers')

module.exports = function(app){
    app.get('/channels',ChannelsController.getAll);
}
*/