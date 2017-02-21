'use strict';

/**
 * case_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var caseObj = sequelize.define('case', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sfid: DataTypes.STRING,
    contact_name__c: DataTypes.STRING,
    company_name__c: DataTypes.STRING,
    contact_phone__c: DataTypes.STRING,
    subject: DataTypes.STRING,
    recordtypeid: DataTypes.STRING,
    affl_sales_rep__c: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'case',
    timestamps: false
  });

  caseObj.$schema = "salesforce";

  return caseObj;
};