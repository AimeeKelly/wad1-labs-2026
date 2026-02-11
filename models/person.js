'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const person = {

  employee: new JsonStore('./models/person.json', { employee: {} }),
  collection: 'employee',

  getAppInfo() {
    return this.employee.findAll(this.collection);
  },

};

export default person;
