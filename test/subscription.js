'use strict';

var expect = require('chai').expect;

var processout = require('..');
var client = new processout.ProcessOut('test-proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_sandbox_mah31RDFqcDxmaS7MvhDbJfDJvjtsFTB');

describe('Subscription', function() {
    it('should create a subscription for a customer', function(done) {
        client.newCustomer().create().then(function(customer) {
            expect(customer.getId()).not.to.be.empty;

            client.newSubscription({
                'customer_id': customer.getId(),
                'amount': '9.99',
                'currency': 'USD',
                'interval': '1d',
                'name': 'great subscription'
            }).create().then(function(subscription) {
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