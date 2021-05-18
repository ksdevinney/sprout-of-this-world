const User = require('./User');
const Plant = require('./Plant');

User.hasMany(Plant, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

Plant.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
  User,
  Plant,
};