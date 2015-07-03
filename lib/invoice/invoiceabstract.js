'use strict';

var Base = require('basejs');

var InvoiceAbstract = module.exports = Base.extend({
    _processOut:   null,
    _lastResponse: null,

    itemName:      null,
    itemPrice:     null,
    itemQuantity:  1,
    currency:      null,
    taxes:         0,
    shipping:      0,
    recurringDays: 0,
    returnUrl:     null,
    cancelUrl:     null,
    notifyUrl:     null,
    custom:        null,
    sandbox:       false,

    constructor: function(processOut) {
        this._processOut = processOut;
    },

    getProjectId: function() {
        return this._processOut.getProjectId();
    },

    getProjectKey: function() {
        return this._processOut.getProjectKey();
    },

    getLastResponse: function() {
        return this._lastResponse;
    },

    _generateData: function() {
        return {
            'item_name':      this.itemName,
            'item_price':     this.itemPrice,
            'item_quantity':  this.itemQuantity,
            'currency':       this.currency,
            'taxes':          this.taxes,
            'shipping':       this.shipping,
            'recurring_days': this.recurringDays,
            'return_url':     this.returnUrl,
            'cancel_url':     this.cancelUrl,
            'notify_url':     this.notifyUrl,
            'custom':         this.custom,
            'sandbox':        this.sandbox
        };
    }
});