'use strict';

/**
 * case_submission Schema
 *
 * For generating list in dashboard
 */
 module.exports = function(sequelize, DataTypes) {

  var digitalaudit_form_submission_listOnly = sequelize.define('digitalaudit_form_submission_listOnly', {
    case_submission_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
    },
    last_page_completed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
    },
    form_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null
    },
    contact_name__c: DataTypes.STRING,
    company_name__c: DataTypes.STRING,
    contact_phone__c: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'case_submissions'
  });

  return digitalaudit_form_submission_listOnly;
};
