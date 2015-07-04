'use strict';

var rest            = require('restler');
var Promise         = require('promise');
var Response        = require('../networking/response');
var InvoiceAbstract = require('./invoiceabstract');
var Invoice         = require('./invoice');
var ProcessOut      = require('../processout');

var TailoredInvoice = module.exports = InvoiceAbstract.extend({
    _id: null,

    /**
     * Tailored invoice constructor
     * @param  {ProcessOut} processOut ProcessOut instance
     */
    constructor: function(processOut) {
        if(typeof processOut === 'undefined')
            processOut = ProcessOut.getDefault();

        this.base(processOut);
    },

    _setFields: function(response) {
        this.itemName     = response.item_name;
        this.itemPrice    = response.item_price;
        this.itemQuantity = response.item_quantity;
        this.currency     = response.currency;
        this.taxes        = response.taxes;
        this.shipping     = response.shipping;
        this.returnUrl    = response.return_url;
        this.cancelUrl    = response.cancel_url;
        this.notifyUrl    = response.notify_url;
    },

    /**
     * Load a tailored invoice from its id and pull its data from ProcessOut
     * @param  {string} tailoredInvoiceId Tailored invoice id
     * @return {Promise}
     */
    from: function(tailoredInvoiceId) {
        this._id     = tailoredInvoiceId;

        var tailored = this;

        return new Promise(function(resolve, reject) {
            rest.get(ProcessOut.HOST + '/tailored-invoices/' +
                    tailored.getId(), {
                username: tailored.getProjectId(),
                password: tailored.getProjectKey()
            }).on('complete', function(result, response) {
                if (result instanceof Error)
                    return reject(result);

                tailored._lastResponse = new Response(result, response);
                var err                = tailored._lastResponse.check();

                if(err !== null)
                    return reject(err);

                // All good
                tailored._setFields(tailored._lastResponse.body);

                return resolve(tailored);
            });
        });
    },

    /**
     * Create a new invoice from this tailored invoice and return the newly
     * created object
     * @return {Invoice} Newly created invoice from this tailored invoice
     */
    invoice: function() {
        var invoice = new Invoice(this._processOut);

        invoice.itemName      = this.itemName;
        invoice.itemPrice     = this.itemPrice;
        invoice.itemQuantity  = this.itemQuantity;
        invoice.taxes         = this.taxes;
        invoice.shipping      = this.shipping;
        invoice.recurringDays = this.recurringDays;
        invoice.currency      = this.currency;
        invoice.returnUrl     = this.returnUrl;
        invoice.cancelUrl     = this.cancelUrl;
        invoice.notifyUrl     = this.notifyUrl;
        invoice.custom        = this.custom;

        return invoice;
    },

    /**
     * Get the id of the tailored invoice
     * @return {string} Tailored invoice id
     */
    getId: function() {
        return this._id;
    }
});