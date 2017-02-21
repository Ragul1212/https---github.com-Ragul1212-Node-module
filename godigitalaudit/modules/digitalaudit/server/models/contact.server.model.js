'use strict';

/**
 * contact_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var contact = sequelize.define('contact', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sfid: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    web_submitter__c: DataTypes.BOOLEAN,
    recordtypeid: DataTypes.STRING,
    lastname: DataTypes.STRING,
    title: DataTypes.STRING,
    phone: DataTypes.STRING,
    accountid: DataTypes.STRING,
    firstname: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'contact',
    timestamps: false
  });

  contact.$schema = "salesforce";

  return contact;
};
