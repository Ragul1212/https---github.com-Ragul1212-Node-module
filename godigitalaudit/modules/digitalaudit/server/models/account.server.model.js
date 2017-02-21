'use strict';

/**
 * account_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var account = sequelize.define('account', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sfid: DataTypes.STRING,
    name: DataTypes.STRING,
    media_property_list__c: DataTypes.STRING,
    recordtypeid: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'account',
    timestamps: false
  });

  account.$schema = "salesforce";

  return account;
};