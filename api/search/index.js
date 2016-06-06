//var express = require('express');
import express from 'express';
import { sortBy, filter } from 'lodash';

var router = express.Router();
var api = router.route('/search');

var users = [
  { id : 1, firstName : 'Łukasz', lastName : 'Wojcik'},
  { id : 2, firstName : 'Aleksandra', lastName : 'Wojcik'},
  { id : 3, firstName : 'Julia', lastName : 'Wojcik'},
  { id : 4, firstName : 'Julia', lastName : 'Wojcik'}
];

var filterElements = (items, search) => {
  return sortBy(items.filter((item) => item.firstName.indexOf(search) !== -1 || item.lastName.indexOf(search) !== -1), 'firstName')
};

api
  .get((req, res, next) => {

  });

module.exports = router;
