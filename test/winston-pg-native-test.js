'use strict';
/**
 * @module 'winston-pg-transport-test'
 * @fileoverview Tests of winston transport for logging into PostgreSQL
 * @license MIT
 * @author Andrei Tretyakov <andrei.tretyakov@gmail.com>
 */

var vows = require('vows');
var transport = require('winston/test/transports/transport');
var Postgres = require('../lib/winston-pg-transport.js');

var conString = 'postgres://' + process.env.POSTGRES_USER +
':' + process.env.POSTGRES_PASSWORD +
'@' + process.env.POSTGRES_HOST +
':' + process.env.POSTGRES_PORT +
'/' + process.env.POSTGRES_DBNAME;

vows.describe('winston-pg-transport')
  .addBatch({
    'An instance of the Postgres Transport': transport(Postgres, {
      conString: conString
    })
  })
  .export(module);
