ProcessOut Node.js
=================

[![Code Climate](https://codeclimate.com/github/ProcessOut/processout-node/badges/gpa.svg)](https://codeclimate.com/github/ProcessOut/processout-node)

This package provides bindings to the ProcessOut API. Manage your callbacks,
create new invoices, redirect your users to a newly generated checkout
page and more.

ProcessOut allows you to manage a lot of payment gateways such as PayPal,
Crypto currencies, Payza or Dwolla, with no effort.
Learn more on the [ProcessOut website](https://www.processout.com).

Dependencies
------------

* basejs
* promise
* restler

Installation
------------

The package can easily be installed using npm

``` sh
npm install processout
```

-------------------------

Prerequisites
-------------

### Import the ProcessOut package

``` js
var ProcessOut = require('processout');
```

### Instantiate a new ProcessOut instance

``` js
var projectId     = '21184268-76fa-4b33-99a0-63fb15f9041a';
var projectSecret = 'key-24a2061d0fd2853b75728073d5406de437d525b2ff941fe34ca061cb2180d0f8';

var processout = new ProcessOut.ProcessOut(projectId, projectSecret);
```

Usage
-----

### Create a new invoice from scratch

``` js
var invoice = new ProcessOut.Invoice(processout);
invoice.itemName = 'Amazing product';
// Set more attributes here
invoice.save();
```

### Create a new invoice from a tailored invoice

``` js
var tailored = new ProcessOut.TailoredInvoice(processout);
tailored.from('1ca570ac-0cb4-4c54-8ff2-f7c82f4fb12b').then(
    function(tailored) {
        var invoice = tailored.invoice();
        // You can set more attributes here too,
        // invoice is an instance of Invoice
        invoice.save();
    }, function(err) {
        // Oops, an error occured
        console.log(err);
    });
```

##### Shared invoice attributes

The following attributes are shared between Invoice and TailoredInvoice instances

- *attribute*   - *example*
- itemName      - **Amazing product**
- itemPrice     - **4.20**
- itemQuantity  - *2*
- currency      - **USD**
- taxes         - *4.20*
- shipping      - *4.20*
- recurringDays - *7*
- returnUrl     - *URL to which the customer will be redirected upon purchase*
- cancelUrl     - *URL to which the customer will be redirected upon cancellation*
- notifyUrl     - *URL being called by ProcessOut to send callbacks upon transaction updates*
- custom        - *A custom field containing anything you want, sent back within all callbacks*
- sandbox       - *Decide weither or not to activate the sandbox mode*

### Promises and errors

The ProcessOut node package uses promises in order to return requests responses
and errors.

``` js
invoice.save().then(function(invoice) {
    // The updated invoice object is passed in the function arguments.

    // Things went great, let's get its invoice url
    console.log(invoice.getUrl());

    // Or get its id
    console.log(invoice.getId());

}, function(err) {
    // Some error happened, let's get them
    console.log(err);
});
```

You may also directly pass callback functions

``` js
invoice.save().then(onComplete, onError);
```

### Receiving callbacks / Webhooks

Callbacks can be used to automate transaction management once a payment has
been placed by one of your customers. One example could be adding credit to
an account once the user has paid their subscription.

However, it doesn't stop there. ProcessOut also supports chargeback handling,
and much more. Please refer to the
[API documentation](http://docs.processout.apiary.io/#) to learn what data is
sent through callbacks.

Once a callback has been sent to your server, you need to check its authenticity,
as follows:

``` js
var callback = new ProcessOut.Callback(processout);
if(! callback.validate(data['transaction_id'], data['hmac_signature'])) {
    console.log('Bad callback');
    return;
}

// Continue normally here, the callback is verified
// One common thing to do would be to check the price, currency, etc...
```

-------------------------

Full API documentation
----------------------

### Apiary

The ProcessOut's full API documentation can be found on
[Apiary](http://docs.processout.apiary.io). It contains all the needed
information, including callback data, and much more.