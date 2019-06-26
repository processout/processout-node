"use strict";
var Activity = require("./activity");
var Addon = require("./addon");
var APIRequest = require("./apirequest");
var APIVersion = require("./apiversion");
var Card = require("./card");
var CardInformation = require("./cardinformation");
var Coupon = require("./coupon");
var Customer = require("./customer");
var Token = require("./token");
var Discount = require("./discount");
var Event = require("./event");
var Gateway = require("./gateway");
var GatewayConfiguration = require("./gatewayconfiguration");
var Invoice = require("./invoice");
var InvoiceRisk = require("./invoicerisk");
var InvoiceDevice = require("./invoicedevice");
var InvoiceShipping = require("./invoiceshipping");
var InvoiceDetail = require("./invoicedetail");
var CustomerAction = require("./customeraction");
var DunningAction = require("./dunningaction");
var Payout = require("./payout");
var PayoutItem = require("./payoutitem");
var Plan = require("./plan");
var Product = require("./product");
var Project = require("./project");
var Refund = require("./refund");
var Subscription = require("./subscription");
var Transaction = require("./transaction");
var PaymentDataThreeDSRequest = require("./paymentdatathreedsrequest");
var PaymentDataNetworkAuthentication = require("./paymentdatanetworkauthentication");
var PaymentDataThreeDSAuthentication = require("./paymentdatathreedsauthentication");
var TransactionOperation = require("./transactionoperation");
var Webhook = require("./webhook");
var WebhookEndpoint = require("./webhookendpoint");
var ProcessOut = /** @class */ (function () {
    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     * @param {string} projectID
     * @param {string} projectSecret
     * @class {ProcessOut}
     */
    function ProcessOut(projectID, projectSecret) {
        /**
         * ProcessOut api host
         * @type {string}
         */
        this.host = 'https://api.processout.com';
        /**
         * ProcessOut project ID
         * @type {string}
         */
        this.projectID = '';
        /**
         * ProcessOut project secret key
         * @type {string}
         */
        this.projectSecret = '';
        this.projectID = projectID;
        this.projectSecret = projectSecret;
    }
    /**
     * Get the library host URL
     * @return {string}
     */
    ProcessOut.prototype.getHost = function () {
        return this.host;
    };
    /**
     * Set the library host URL
     * @param {string} h
     * @return {ProcessOut}
     */
    ProcessOut.prototype.setHost = function (h) {
        this.host = h;
    };
    /**
     * Get projectID
     * @return {string}
     */
    ProcessOut.prototype.getProjectID = function () {
        return this.projectID;
    };
    /**
     * Get projectSecret
     * @return {string}
     */
    ProcessOut.prototype.getProjectSecret = function () {
        return this.projectSecret;
    };
    /**
     * Create a new Activity instance
     * @param {array} prefill
     * @return {Activity}
     */
    ProcessOut.prototype.newActivity = function (prefill) {
        return new Activity(this, prefill);
    };
    /**
     * Create a new Addon instance
     * @param {array} prefill
     * @return {Addon}
     */
    ProcessOut.prototype.newAddon = function (prefill) {
        return new Addon(this, prefill);
    };
    /**
     * Create a new APIRequest instance
     * @param {array} prefill
     * @return {APIRequest}
     */
    ProcessOut.prototype.newAPIRequest = function (prefill) {
        return new APIRequest(this, prefill);
    };
    /**
     * Create a new APIVersion instance
     * @param {array} prefill
     * @return {APIVersion}
     */
    ProcessOut.prototype.newAPIVersion = function (prefill) {
        return new APIVersion(this, prefill);
    };
    /**
     * Create a new Card instance
     * @param {array} prefill
     * @return {Card}
     */
    ProcessOut.prototype.newCard = function (prefill) {
        return new Card(this, prefill);
    };
    /**
     * Create a new CardInformation instance
     * @param {array} prefill
     * @return {CardInformation}
     */
    ProcessOut.prototype.newCardInformation = function (prefill) {
        return new CardInformation(this, prefill);
    };
    /**
     * Create a new Coupon instance
     * @param {array} prefill
     * @return {Coupon}
     */
    ProcessOut.prototype.newCoupon = function (prefill) {
        return new Coupon(this, prefill);
    };
    /**
     * Create a new Customer instance
     * @param {array} prefill
     * @return {Customer}
     */
    ProcessOut.prototype.newCustomer = function (prefill) {
        return new Customer(this, prefill);
    };
    /**
     * Create a new Token instance
     * @param {array} prefill
     * @return {Token}
     */
    ProcessOut.prototype.newToken = function (prefill) {
        return new Token(this, prefill);
    };
    /**
     * Create a new Discount instance
     * @param {array} prefill
     * @return {Discount}
     */
    ProcessOut.prototype.newDiscount = function (prefill) {
        return new Discount(this, prefill);
    };
    /**
     * Create a new Event instance
     * @param {array} prefill
     * @return {Event}
     */
    ProcessOut.prototype.newEvent = function (prefill) {
        return new Event(this, prefill);
    };
    /**
     * Create a new Gateway instance
     * @param {array} prefill
     * @return {Gateway}
     */
    ProcessOut.prototype.newGateway = function (prefill) {
        return new Gateway(this, prefill);
    };
    /**
     * Create a new GatewayConfiguration instance
     * @param {array} prefill
     * @return {GatewayConfiguration}
     */
    ProcessOut.prototype.newGatewayConfiguration = function (prefill) {
        return new GatewayConfiguration(this, prefill);
    };
    /**
     * Create a new Invoice instance
     * @param {array} prefill
     * @return {Invoice}
     */
    ProcessOut.prototype.newInvoice = function (prefill) {
        return new Invoice(this, prefill);
    };
    /**
     * Create a new InvoiceRisk instance
     * @param {array} prefill
     * @return {InvoiceRisk}
     */
    ProcessOut.prototype.newInvoiceRisk = function (prefill) {
        return new InvoiceRisk(this, prefill);
    };
    /**
     * Create a new InvoiceDevice instance
     * @param {array} prefill
     * @return {InvoiceDevice}
     */
    ProcessOut.prototype.newInvoiceDevice = function (prefill) {
        return new InvoiceDevice(this, prefill);
    };
    /**
     * Create a new InvoiceShipping instance
     * @param {array} prefill
     * @return {InvoiceShipping}
     */
    ProcessOut.prototype.newInvoiceShipping = function (prefill) {
        return new InvoiceShipping(this, prefill);
    };
    /**
     * Create a new InvoiceDetail instance
     * @param {array} prefill
     * @return {InvoiceDetail}
     */
    ProcessOut.prototype.newInvoiceDetail = function (prefill) {
        return new InvoiceDetail(this, prefill);
    };
    /**
     * Create a new CustomerAction instance
     * @param {array} prefill
     * @return {CustomerAction}
     */
    ProcessOut.prototype.newCustomerAction = function (prefill) {
        return new CustomerAction(this, prefill);
    };
    /**
     * Create a new DunningAction instance
     * @param {array} prefill
     * @return {DunningAction}
     */
    ProcessOut.prototype.newDunningAction = function (prefill) {
        return new DunningAction(this, prefill);
    };
    /**
     * Create a new Payout instance
     * @param {array} prefill
     * @return {Payout}
     */
    ProcessOut.prototype.newPayout = function (prefill) {
        return new Payout(this, prefill);
    };
    /**
     * Create a new PayoutItem instance
     * @param {array} prefill
     * @return {PayoutItem}
     */
    ProcessOut.prototype.newPayoutItem = function (prefill) {
        return new PayoutItem(this, prefill);
    };
    /**
     * Create a new Plan instance
     * @param {array} prefill
     * @return {Plan}
     */
    ProcessOut.prototype.newPlan = function (prefill) {
        return new Plan(this, prefill);
    };
    /**
     * Create a new Product instance
     * @param {array} prefill
     * @return {Product}
     */
    ProcessOut.prototype.newProduct = function (prefill) {
        return new Product(this, prefill);
    };
    /**
     * Create a new Project instance
     * @param {array} prefill
     * @return {Project}
     */
    ProcessOut.prototype.newProject = function (prefill) {
        return new Project(this, prefill);
    };
    /**
     * Create a new Refund instance
     * @param {array} prefill
     * @return {Refund}
     */
    ProcessOut.prototype.newRefund = function (prefill) {
        return new Refund(this, prefill);
    };
    /**
     * Create a new Subscription instance
     * @param {array} prefill
     * @return {Subscription}
     */
    ProcessOut.prototype.newSubscription = function (prefill) {
        return new Subscription(this, prefill);
    };
    /**
     * Create a new Transaction instance
     * @param {array} prefill
     * @return {Transaction}
     */
    ProcessOut.prototype.newTransaction = function (prefill) {
        return new Transaction(this, prefill);
    };
    /**
     * Create a new PaymentDataThreeDSRequest instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSRequest}
     */
    ProcessOut.prototype.newPaymentDataThreeDSRequest = function (prefill) {
        return new PaymentDataThreeDSRequest(this, prefill);
    };
    /**
     * Create a new PaymentDataNetworkAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataNetworkAuthentication}
     */
    ProcessOut.prototype.newPaymentDataNetworkAuthentication = function (prefill) {
        return new PaymentDataNetworkAuthentication(this, prefill);
    };
    /**
     * Create a new PaymentDataThreeDSAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSAuthentication}
     */
    ProcessOut.prototype.newPaymentDataThreeDSAuthentication = function (prefill) {
        return new PaymentDataThreeDSAuthentication(this, prefill);
    };
    /**
     * Create a new TransactionOperation instance
     * @param {array} prefill
     * @return {TransactionOperation}
     */
    ProcessOut.prototype.newTransactionOperation = function (prefill) {
        return new TransactionOperation(this, prefill);
    };
    /**
     * Create a new Webhook instance
     * @param {array} prefill
     * @return {Webhook}
     */
    ProcessOut.prototype.newWebhook = function (prefill) {
        return new Webhook(this, prefill);
    };
    /**
     * Create a new WebhookEndpoint instance
     * @param {array} prefill
     * @return {WebhookEndpoint}
     */
    ProcessOut.prototype.newWebhookEndpoint = function (prefill) {
        return new WebhookEndpoint(this, prefill);
    };
    return ProcessOut;
}());
module.exports = ProcessOut;
//# sourceMappingURL=processout.js.map