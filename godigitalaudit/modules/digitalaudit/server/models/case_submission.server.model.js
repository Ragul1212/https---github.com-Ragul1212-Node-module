'use strict';

/**
 * case_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var case_submission = sequelize.define('case_submission', {
    case_submission_id: {
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
    contact_name__c: DataTypes.STRING,
    company_name__c: DataTypes.STRING,
    contact_phone__c: DataTypes.STRING,
    subject: DataTypes.STRING,
    recordtypeid: DataTypes.STRING,
    affl_sales_rep__c: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'case_submissions'
  });

  return case_submission;
};
