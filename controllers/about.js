'use strict';

import logger from "../utils/logger.js";
import person from "../models/person.js";
import accounts from './accounts.js';

const about = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("About page loading!");
    
    if (loggedInUser) {
      const viewData = {
        title: 'About the Playlist App',
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        employees: person.getEmployees(),
        picture: loggedInUser.picture,
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
  },

};


export default about;
