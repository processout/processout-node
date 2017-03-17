'use strict';

var Base = require('basejs');

var Activity = require('./activity');
var Addon = require('./addon');
var APIRequest = require('./apirequest');
var APIVersion = require('./apiversion');
var AuthorizationRequest = require('./authorizationrequest');
var Card = require('./card');
var CardInformation = require('./cardinformation');
var Coupon = require('./coupon');
var Customer = require('./customer');
var Token = require('./token');
var Discount = require('./discount');
var Event = require('./event');
var Gateway = require('./gateway');
var GatewayConfiguration = require('./gatewayconfiguration');
var Invoice = require('./invoice');
var InvoiceDetail = require('./invoicedetail');
var CustomerAction = require('./customeraction');
var DunningAction = require('./dunningaction');
var Plan = require('./plan');
var Product = require('./product');
var Project = require('./project');
var Refund = require('./refund');
var Subscription = require('./subscription');
var Transaction = require('./transaction');
var TransactionOperation = require('./transactionoperation');
var Webhook = require('./webhook');
var WebhookEndpoint = require('./webhookendpoint');

var ProcessOut = module.exports = Base.extend({
    /**
     * ProcessOut api host
     * @type {string}
     */
    _host: 'https://api.processout.com',

    /**
     * ProcessOut project ID
     * @type {string}
     */
    _projectID: '',

    /**
     * ProcessOut project secret key
     * @type {string}
     */
    _projectSecret: '',

    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     * @param {string} projectID
     * @param {string} projectSecret
     * @class {ProcessOut}
     */
    constructor: function(projectID, projectSecret) {
        this._projectID     = projectID;
        this._projectSecret = projectSecret;
    },

    /**
     * Get the library host URL
     * @return {string}
     */
    getHost: function() {
        return this._host;
    },

    /**
     * Set the library host URL
     * @return {ProcessOut}
     */
    setHost: function(host) {
        this._host = host;
        return this;
    },

    /**
     * Get projectID
     * @return {string}
     */
    getProjectID: function() {
        return this._projectID;
    },

    /**
     * Get projectSecret
     * @return {string}
     */
    getProjectSecret: function() {
        return this._projectSecret;
    },

    
    /**
     * Create a new Activity instance
     * @param {array} prefill
     * @return {Activity}
     */
	newActivity: function(prefill) {
        return new Activity(this, prefill);
    },
	
    /**
     * Create a new Addon instance
     * @param {array} prefill
     * @return {Addon}
     */
	newAddon: function(prefill) {
        return new Addon(this, prefill);
    },
	
    /**
     * Create a new APIRequest instance
     * @param {array} prefill
     * @return {APIRequest}
     */
	newAPIRequest: function(prefill) {
        return new APIRequest(this, prefill);
    },
	
    /**
     * Create a new APIVersion instance
     * @param {array} prefill
     * @return {APIVersion}
     */
	newAPIVersion: function(prefill) {
        return new APIVersion(this, prefill);
    },
	
    /**
     * Create a new AuthorizationRequest instance
     * @param {array} prefill
     * @return {AuthorizationRequest}
     */
	newAuthorizationRequest: function(prefill) {
        return new AuthorizationRequest(this, prefill);
    },
	
    /**
     * Create a new Card instance
     * @param {array} prefill
     * @return {Card}
     */
	newCard: function(prefill) {
        return new Card(this, prefill);
    },
	
    /**
     * Create a new CardInformation instance
     * @param {array} prefill
     * @return {CardInformation}
     */
	newCardInformation: function(prefill) {
        return new CardInformation(this, prefill);
    },
	
    /**
     * Create a new Coupon instance
     * @param {array} prefill
     * @return {Coupon}
     */
	newCoupon: function(prefill) {
        return new Coupon(this, prefill);
    },
	
    /**
     * Create a new Customer instance
     * @param {array} prefill
     * @return {Customer}
     */
	newCustomer: function(prefill) {
        return new Customer(this, prefill);
    },
	
    /**
     * Create a new Token instance
     * @param {array} prefill
     * @return {Token}
     */
	newToken: function(prefill) {
        return new Token(this, prefill);
    },
	
    /**
     * Create a new Discount instance
     * @param {array} prefill
     * @return {Discount}
     */
	newDiscount: function(prefill) {
        return new Discount(this, prefill);
    },
	
    /**
     * Create a new Event instance
     * @param {array} prefill
     * @return {Event}
     */
	newEvent: function(prefill) {
        return new Event(this, prefill);
    },
	
    /**
     * Create a new Gateway instance
     * @param {array} prefill
     * @return {Gateway}
     */
	newGateway: function(prefill) {
        return new Gateway(this, prefill);
    },
	
    /**
     * Create a new GatewayConfiguration instance
     * @param {array} prefill
     * @return {GatewayConfiguration}
     */
	newGatewayConfiguration: function(prefill) {
        return new GatewayConfiguration(this, prefill);
    },
	
    /**
     * Create a new Invoice instance
     * @param {array} prefill
     * @return {Invoice}
     */
	newInvoice: function(prefill) {
        return new Invoice(this, prefill);
    },
	
    /**
     * Create a new InvoiceDetail instance
     * @param {array} prefill
     * @return {InvoiceDetail}
     */
	newInvoiceDetail: function(prefill) {
        return new InvoiceDetail(this, prefill);
    },
	
    /**
     * Create a new CustomerAction instance
     * @param {array} prefill
     * @return {CustomerAction}
     */
	newCustomerAction: function(prefill) {
        return new CustomerAction(this, prefill);
    },
	
    /**
     * Create a new DunningAction instance
     * @param {array} prefill
     * @return {DunningAction}
     */
	newDunningAction: function(prefill) {
        return new DunningAction(this, prefill);
    },
	
    /**
     * Create a new Plan instance
     * @param {array} prefill
     * @return {Plan}
     */
	newPlan: function(prefill) {
        return new Plan(this, prefill);
    },
	
    /**
     * Create a new Product instance
     * @param {array} prefill
     * @return {Product}
     */
	newProduct: function(prefill) {
        return new Product(this, prefill);
    },
	
    /**
     * Create a new Project instance
     * @param {array} prefill
     * @return {Project}
     */
	newProject: function(prefill) {
        return new Project(this, prefill);
    },
	
    /**
     * Create a new Refund instance
     * @param {array} prefill
     * @return {Refund}
     */
	newRefund: function(prefill) {
        return new Refund(this, prefill);
    },
	
    /**
     * Create a new Subscription instance
     * @param {array} prefill
     * @return {Subscription}
     */
	newSubscription: function(prefill) {
        return new Subscription(this, prefill);
    },
	
    /**
     * Create a new Transaction instance
     * @param {array} prefill
     * @return {Transaction}
     */
	newTransaction: function(prefill) {
        return new Transaction(this, prefill);
    },
	
    /**
     * Create a new TransactionOperation instance
     * @param {array} prefill
     * @return {TransactionOperation}
     */
	newTransactionOperation: function(prefill) {
        return new TransactionOperation(this, prefill);
    },
	
    /**
     * Create a new Webhook instance
     * @param {array} prefill
     * @return {Webhook}
     */
	newWebhook: function(prefill) {
        return new Webhook(this, prefill);
    },
	
    /**
     * Create a new WebhookEndpoint instance
     * @param {array} prefill
     * @return {WebhookEndpoint}
     */
	newWebhookEndpoint: function(prefill) {
        return new WebhookEndpoint(this, prefill);
    },
	

}, {});