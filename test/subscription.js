'use strict';

var expect = require('chai').expect;

var processout = require('..');
var client = new processout.ProcessOut('test-proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_jqSPvwq3AG5MlYAgqxlwwgOcAC3Zy7d8');

describe('Subscription', function() {
    it('should create a subscription for a customer', function(done) {
        client.newCustomer().create().then(function(customer) {
            expect(customer.getId()).not.to.be.empty;

            client.newSubscription({
                'amount': '9.99',
                'currency': 'USD',
                'interval': '1d',
                'name': 'great subscription'
            }).create(customer.getId()).then(function(subscription) {
                expect(subscription.getId()).not.to.be.empty;
                done();
            }, function(err) {
                done(err);
            });
        }, function(err) {
            done(err);
        });
    });
});