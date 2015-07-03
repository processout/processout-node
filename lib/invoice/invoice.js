'use strict';

var rest            = require('restler');
var Promise         = require('promise');
var Response        = require('../networking/response');
var InvoiceAbstract = require('./invoiceabstract');
var ProcessOut      = require('../processout');

var Invoice = module.exports = InvoiceAbstract.extend({
    _id:                null,
    _url:               null,
    _tailoredInvoiceId: null,

    constructor: function(processOut) {
        if(typeof processOut === 'undefined')
            processOut = ProcessOut.getDefault();

        this.base(processOut);
    },

    _setFields: function(response) {
        this._id  = response.id;
        this._url = response.url;
    },

    from: function(tailoredInvoice) {
        this._tailoredInvoiceId = tailoredInvoice.id;
    },

    save: function() {
        if(this.getTailoredInvoiceId() === null)
            return this._saveNew();
        else
            return this._saveFromTailored();
    },

    _saveNew: function() {
        var invoice = this;

        return new Promise(function(resolve, reject) {
            rest.post(ProcessOut.HOST + '/invoices', {
                username: invoice.getProjectId(),
                password: invoice.getProjectKey(),
                data:     invoice._generateData()
            }).on('complete', function(result, response) {
                if (result instanceof Error)
                    return reject(result);

                invoice._lastResponse = new Response(result, response);
                var err                = invoice._lastResponse.check();

                if(err !== null)
                    return reject(err);

                // All good
                invoice._setFields(invoice._lastResponse.body);

                return resolve(invoice);
            });
        });
    },

    _saveFromTailored: function() {
        var invoice = this;

        return new Promise(function(resolve, reject) {
            rest.post(ProcessOut.HOST + '/invoices/from-tailored/' +
                    invoice.getTailoredInvoiceId(), {
                username: invoice.getProjectId(),
                password: invoice.getProjectKey()
            }).on('complete', function(result, response) {
                if (result instanceof Error)
                    return reject(result);

                invoice._lastResponse = new Response(result, response);
                var err                = invoice._lastResponse.check();

                if(err !== null)
                    return reject(err);

                // All good
                invoice._setFields(invoice._lastResponse.body);

                return resolve(invoice);
            });
        });
    },

    getId: function() {
        return this._id;
    },

    getUrl: function() {
        return this._url;
    },

    getTailoredInvoiceId: function() {
        return this._tailoredInvoiceId;
    }
});