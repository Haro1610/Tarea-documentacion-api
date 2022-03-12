const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const messageRoutes = require('./../modules/message/message.routes');
const userGroupRoutes = require('./../modules/userGroup/userGroup.routes');
const roomRoutes = require('./../modules/room/room.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const rolesRoutes = require('./../modules/role/role.routes');


router.use('/users', userRoutes);
router.use('/Channel', channelRoutes);
router.use('/messages',messageRoutes);
router.use('/userGroups',userGroupRoutes);
router.use('/rooms',roomRoutes);
router.use('/sessions',sessionRoutes);
router.use('/roles',rolesRoutes);

module.exports = router;