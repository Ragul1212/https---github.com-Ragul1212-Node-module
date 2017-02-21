'use strict';

/**
 * contact_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var contact_submission = sequelize.define('contact_submission', {
    contact_submission_id: {
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
    search_sales_rep: DataTypes.STRING,
    select_sales_rep: DataTypes.STRING,
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
    tableName: 'contact_submissions'
  });

  return contact_submission;
};
