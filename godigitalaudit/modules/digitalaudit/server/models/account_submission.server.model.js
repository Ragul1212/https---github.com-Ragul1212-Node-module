'use strict';

/**
 * account_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var account_submission = sequelize.define('account_submission', {
    account_submission_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_page_completed: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    form_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    name: DataTypes.STRING,
    media_property_list__c: DataTypes.STRING,
    recordtypeid: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'account_submissions'
  });

  return account_submission;
};
