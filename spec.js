'use strict';

const assert = require('assert');
var processout = require('.');

var client = new processout.ProcessOut('proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_fBjPvkgT8gyKc1SUpy0PfjL7UgsRmUug');

function expect(val, message) {
    if (!val) {
        console.log('FAIL: '+message);
        process.exit(1);
    }
}

// Make sure the error code is correctly set
client.newCustomer().find("bad").then(function(customer) {
    expect(false, 'There should have been an error');
}, function(err) {
    expect(err.code == 'resource.customer.not-found', 'The error code was incorrect: '+err.code);
});

// Capture a payment
client.newInvoice({
    'name': 'Test invoice',
    'amount': '9.99',
    'currency': 'USD'
}).create().then(function(invoice) {
    expect(invoice.getId() != '', 'The invoice ID should not be empty');

    var gr = new processout.GatewayRequest('', 'POST', 'https://processout.com', {
        'Content-Type': 'application/x-www-form-urlencoded'
    }, 'token=test-valid');
    invoice.capture().then(function(transaction) {
        //
    }, function(err) {
        expect(false, 'There should not be any error');
    });
}, function(err) {
    expect(false, 'There should not be any error');
});