'use strict';

var expect = require('chai').expect;

var processout = require('..');
var client = new processout.ProcessOut('test-proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_sandbox_mah31RDFqcDxmaS7MvhDbJfDJvjtsFTB');

function handleError(done, fn) {
    try { // boilerplate to be able to get the assert failures
        fn();
    } catch (error) {
        done(error);
    }
}

describe('Invoice', function() {
    it('should create a new invoice and fetch it', function(done) {
        client.newInvoice({
            'name': 'Test invoice',
            'amount': '9.99',
            'currency': 'USD'
        }).create().then(function(invoice) {
            handleError(done, function() {
                expect(invoice.getId()).not.to.be.empty;

                client.newInvoice().find(invoice.getId()).then(function(fetched) {
                    handleError(done, function() {
                        expect(fetched.getId()).not.to.be.empty;
                        expect(fetched.getId()).to.equal(invoice.getId());
                        done();
                    });
                }, function(err) {
                    done(err);
                });
            });
        }, function(err) {
            done(err);
        });
    });

    it('should capture a payment and expand gateway configuration', function(done) {
        this.timeout(4000);

        client.newInvoice({
            'name': 'Test invoice',
            'amount': '9.99',
            'currency': 'USD'
        }).create().then(function(invoice) {
            handleError(done, function() {
                expect(invoice.getId()).not.to.be.empty;

                var gr = new processout.GatewayRequest('sandbox', 'POST', 'https://processout.com?token=test-valid',
                    {'Content-Type': 'application/json'}, 
                    '{}');
                invoice.capture(gr.toString()).then(function(transaction) {
                    handleError(done, function() {
                        expect(transaction.getStatus()).to.equal('completed');
                        transaction.find(transaction.getId(), {
                            expand: ['gateway_configuration']
                        }).then(function(transaction) {
                            handleError(done, function() {
                                expect(transaction.getGatewayConfiguration().getId()).not.to.be.empty;

                                done();
                            });
                        }, function(err) {
                            done(err);  
                        });
                    });
                }, function(err) {
                    done(err);
                });
            });
        }, function(err) {
            done(err);
        });
    });
});