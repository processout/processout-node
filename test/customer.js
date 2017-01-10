'use strict';

var expect = require('chai').expect;

var processout = require('..');
var client = new processout.ProcessOut('proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_fBjPvkgT8gyKc1SUpy0PfjL7UgsRmUug');

describe('Customer', function() {
    it('should fetch the customers list', function(done) {
    client.newCustomer().all().then(function(customers) {
            done();
        }, function(err) {
            done(err);
        });
    });
});