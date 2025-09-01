'use strict';

/**
 * blogcard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blogcard.blogcard');
