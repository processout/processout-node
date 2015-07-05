'use strict';

// Let's laod our ProcessOut module
var ProcessOut = require('../index.js');

// Create a new ProcessOut instance
var processout = new ProcessOut.ProcessOut(
    '008a8331-db1b-4cf4-b905-e21fd4aa78e9',
    'key-bb6edef7b8b486b8fabb3097c21f171ad85022b057e9422f960509016a6afcdc');

var createInvoice = function() {
    // Create a new invoice, with custom name, price and currency
    var invoice       = new ProcessOut.Invoice(processout);
    invoice.itemName  = 'Amazing product';
    invoice.itemPrice = 4.20;
    invoice.currency  = 'USD';

    // Save it and push it to ProcessOut
    invoice.save().then(function(invoice) {
        // Things went great, let's get its invoice url
        console.log(invoice.getUrl());

        // Or get its id
        console.log(invoice.getId());

    }, function(err) {
        // Some error happened, let's get them
        console.log(err);
    });
};
createInvoice();


//
// ======================================
//


var fetchTailoredInvoice = function() {
    // Create a new tailored invoice
    var tailoredInvoice = new ProcessOut.TailoredInvoice(processout);

    // Fetch its data from ProcessOut
    tailoredInvoice.from('a4fb38dd-b36c-42c9-8b92-c515de122a16')
        .then(function(tailoredInvoice) {
            // Things went well
            createInvoiceFromTailored(tailoredInvoice);
        }, function(err) {
            // Some error happened, let's get them
            console.log(err);
        });
};
var createInvoiceFromTailored = function(tailoredInvoice) {
    var invoice = tailoredInvoice.invoice();

    invoice.save().then(function(invoice) {
        // Things went great, let's get its invoice url
        console.log(invoice.getUrl());

        // Or get its id
        console.log(invoice.getId());
    }, function(err) {
        // Some error happened, let's get them
        console.log(err);
    });
};
fetchTailoredInvoice();
