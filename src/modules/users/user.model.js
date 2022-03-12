const Model = require('../../core/model');
class User extends Model {
    constructor() {
        super('Users');
    }
}
module.exports = User;