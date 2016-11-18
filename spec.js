'use strict';

const assert = require('assert');
var processout = require('.');

var client = new processout.ProcessOut('proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_fBjPvkgT8gyKc1SUpy0PfjL7UgsRmUug');

// Create and fetch a new invoice
client.newInvoice({
    'name': 'Test invoice',
    'amount': '9.99',
    'currency': 'USD'
}).create().then(function(invoice) {
    assert(invoice.getId() != '', 'The invoice ID should not be empty');

    client.newInvoice().find(invoice.getId()).then(function(fetched) {
        assert(fetched.getId() != '', 'The fetched invoice ID should not be empty');
        assert(invoice.getId() == fetched.getId(), 'The invoices ID should be equal');
    }, function(err) {
        assert(false, 'There should not be any error');
    });
}, function(err) {
    assert(false, 'There should not be any error');
});


// Fetch the customers
client.newCustomer().all().then(function(customers) {
    //
}, function(err) {
    assert(false, 'There should not be any error');
});

// Create a subscription for a customer
client.newCustomer().create(function(customer) {
    assert(customer.getId() != '', 'The created customer ID should not be empty');

    client.newSubscription({
        'amount': '9.99',
        'currency': 'USD',
        'interval': '1d',
        'name': 'great subscription'
    }).create(customer.getId()).then(function(subscription) {
        assert(subscription.getId() != '', 'The created subscription ID should not be empty');
    }, function(err) {
        assert(false ,'There should not be any error');
    });
}, function(err) {
    assert(false ,'There should not be any error');
});

// Expand a customers' project and fetch gateways
var options = {expand: ["project"]};
client.newCustomer().create(function(customer, options) {
    assert(customer.getProject(), 'The invoice project could not be expanded');

    customer.getProject().fetchGatewayConfigurations().then(function(conf) {
        //
    }, function(err) {
        assert(false ,'There should not be any error');
    });
}, function(err) {
    assert(false ,'There should not be any error');
});
