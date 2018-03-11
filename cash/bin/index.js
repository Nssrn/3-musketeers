#!/usr/bin/env node

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

const argv = process.argv.slice(2);

helpers(argv);

/**
 * Convert money from a currency to another
 * The first argument is 'amount', then 'from' and the third argument is 'to'
 * 
 * @example - 1 EUR to AUD
 */

const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

/**
 * Call the cash() function
 */
cash(command);
