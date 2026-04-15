'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const person = {

  employees: new JsonStore('./models/person.json', { employees: {} }),
  collection: 'employees',

  getEmployees()  {
    return this.employees.findAll(this.collection);
  },

};

export default person;
