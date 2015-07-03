'use strict';

// Let's laod our ProcessOut module
var ProcessOut = require('../index.js');

// Create a new ProcessOut instance
var processout = new ProcessOut.ProcessOut(
    '008a8331-db1b-4cf4-b905-e21fd4aa78e9',
    'key-bb6edef7b8b486b8fabb3097c21f171ad85022b057e9422f960509016a6afcdc');

var data = {
    'transaction_id': '2fac6a3a-b5da-4067-a694-67373de3283d',
    'hmac_signature': 'qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc=',
    'action':         'invoice.completed'
    // ...
    // For a full list of the data returned by a callback, please visit
    // http://docs.processout.apiary.io/#reference/callbacks-/-web-hooks
};

var callback = new ProcessOut.Callback(processout);

if(! callback.validate(data['transaction_id'], data['hmac_signature'])) {
    console.log('Bad callback');
    return;
}

switch(data['action']) {
    case 'invoice.completed':
        // Transaction completed / successful
        break;

    case 'invoice.pending':
        // Transaction still needs some time to be processed
        break;

    case 'invoice.failed':
        // Damn, something went wrong
        break;

    case 'invoice.disputed':
        // Your customer opened a dispute on the transaction
        break;

    case 'invoice.solved':
        // You won/solved a dispute
        break;

    case 'invoice.reversed':
        // You most likely lost a dispute and the transaction got reversed
        break;

    case 'invoice.refunded':
        // You refunded the transaction
        break;

    default:
        console.log('Unknown callback action');
        return;
}