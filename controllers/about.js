'use strict';

import logger from "../utils/logger.js";
import person from "../models/person.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "About the Playlist App",
      person: person.getAppInfo()
    };
    
    logger.info(viewData.person);
    response.render('about', viewData);   
  },
};


export default about;
