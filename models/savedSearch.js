'use strict';
module.exports = (sequelize, DataTypes) => {
  const savedSearch = sequelize.define('savedSearch', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userID: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  return savedSearch;
};
