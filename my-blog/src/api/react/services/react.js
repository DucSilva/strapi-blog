'use strict';

/**
 * react service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::react.react');
