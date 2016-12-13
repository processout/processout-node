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

// Create and fetch a new invoice
client.newInvoice({
    'name': 'Test invoice',
    'amount': '9.99',
    'currency': 'USD'
}).create().then(function(invoice) {
    expect(invoice.getId() != '', 'The invoice ID should not be empty');

    client.newInvoice().find(invoice.getId()).then(function(fetched) {
        expect(fetched.getId() != '', 'The fetched invoice ID should not be empty');
        expect(invoice.getId() == fetched.getId(), 'The invoices ID should be equal');
    }, function(err) {
        expect(false, 'There should not be any error');
    });
}, function(err) {
    expect(false, 'There should not be any error');
});


// Fetch the customers
client.newCustomer().all().then(function(customers) {
    //
}, function(err) {
    expect(false, 'There should not be any error');
});

// Create a subscription for a customer
client.newCustomer().create(function(customer) {
    expect(customer.getId() != '', 'The created customer ID should not be empty');

    client.newSubscription({
        'amount': '9.99',
        'currency': 'USD',
        'interval': '1d',
        'name': 'great subscription'
    }).create(customer.getId()).then(function(subscription) {
        expect(subscription.getId() != '', 'The created subscription ID should not be empty');
    }, function(err) {
        expect(false, 'There should not be any error');
    });
}, function(err) {
    expect(false, 'There should not be any error');
});

// Expand a customers' project and fetch gateways
var options = {expand: ["project"]};
client.newCustomer().create(options).then(function(customer) {
    expect(customer.getProject(), 'The invoice project could not be expanded');

    customer.getProject().fetchGatewayConfigurations().then(function(conf) {
        //
    }, function(err) {
        expect(false, 'There should not be any error');
    });
}, function(err) {
    expect(false, 'There should not be any error');
});

// Make sure the error code is correctly set
client.newCustomer().find("bad").then(function(customer) {
    expect(false, 'There should have been an error');
}, function(err) {
    expect(err.code == 'resource.customer.not-found', 'The error code was incorrect: '+err.code);
});
