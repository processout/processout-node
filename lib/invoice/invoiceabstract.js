'use strict';

var Base = require('basejs');

var InvoiceAbstract = module.exports = Base.extend({
    _processOut:   null,
    _lastResponse: null,

    /**
     * Item name
     * @type {string}
     */
    itemName: null,

    /**
     * Item price
     * @type {double}
     */
    itemPrice: null,

    /**
     * Item quantity
     * @type {int}
     */
    itemQuantity: 1,

    /**
     * Currency (USD, EUR...)
     * @type {string}
     */
    currency: null,

    /**
     * Taxes amount
     * @type {double}
     */
    taxes: 0,

    /**
     * Shipping amount
     * @type {double}
     */
    shipping: 0,

    /**
     * Recurring period in days
     * @type {int}
     */
    recurringDays: 0,

    /**
     * Request the customer email during the checkout
     * @type {Boolean}
     */
    requestEmail: false,

    /**
     * Request the customer shipping address during the checkout
     * @type {Boolean}
     */
    requestShipping: false,

    /**
     * Meta data shown during the checkout
     * @type {Object}
     */
    metas: {},

    /**
     * Url where to return the user once the payment has been placed
     * @type {string}
     */
    returnUrl: null,

    /**
     * Url where to return the user if he canceled the payment
     * @type {string}
     */
    cancelUrl: null,

    /**
     * Url called by ProcessOut to send webhooks to your application
     * @type {string}
     */
    notifyUrl: null,

    /**
     * Any data you may need. Will also be posted in the data sent to notifyUrl
     * @type {string}
     */
    custom: null,

    /**
     * Sandbox mode
     * @type {Boolean}
     */
    sandbox: false,

    /**
     * Invoice abstract constructor
     * @param  {ProcessOut} processOut ProcessOut instance
     */
    constructor: function(processOut) {
        this._processOut = processOut;
    },

    /**
     * Get the project id linked to this invoice
     * @return {string} Project id
     */
    getProjectId: function() {
        return this._processOut.getProjectId();
    },

    /**
     * Get the project key linked to this invoice
     * @return {string} Project key
     */
    getProjectKey: function() {
        return this._processOut.getProjectKey();
    },

    /**
     * Get the last response received when performing a request to ProcessOut
     * @return {Response} Response
     */
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

            'request_email':    this.requestEmail,
            'request_shipping': this.requestShipping,

            'metas': this.metas,

            'return_url': this.returnUrl,
            'cancel_url': this.cancelUrl,
            'notify_url': this.notifyUrl,
            'custom':     this.custom,
            'sandbox':    this.sandbox
        };
    }
});