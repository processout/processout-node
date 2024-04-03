"use strict";
// The content of this file was automatically generated
var p = require(".");
var ProcessOut = /** @class */ (function () {
    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     * @param {string} projectID
     * @param {string} projectSecret
     * @param {object} options
     * @param {fetch} options.fetch
     * @class {ProcessOut}
     */
    function ProcessOut(projectID, projectSecret, options) {
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
        /**
         * Custom fetch client used for requests
         * @type {fetch}
         */
        this.fetch = null;
        this.projectID = projectID;
        this.projectSecret = projectSecret;
        this.fetch = options && options.fetch;
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
        return new p.Activity(this, prefill);
    };
    /**
     * Create a new Addon instance
     * @param {array} prefill
     * @return {Addon}
     */
    ProcessOut.prototype.newAddon = function (prefill) {
        return new p.Addon(this, prefill);
    };
    /**
     * Create a new APIVersion instance
     * @param {array} prefill
     * @return {APIVersion}
     */
    ProcessOut.prototype.newAPIVersion = function (prefill) {
        return new p.APIVersion(this, prefill);
    };
    /**
     * Create a new ApplePayAlternativeMerchantCertificates instance
     * @param {array} prefill
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    ProcessOut.prototype.newApplePayAlternativeMerchantCertificates = function (prefill) {
        return new p.ApplePayAlternativeMerchantCertificates(this, prefill);
    };
    /**
     * Create a new AlternativeMerchantCertificate instance
     * @param {array} prefill
     * @return {AlternativeMerchantCertificate}
     */
    ProcessOut.prototype.newAlternativeMerchantCertificate = function (prefill) {
        return new p.AlternativeMerchantCertificate(this, prefill);
    };
    /**
     * Create a new Balances instance
     * @param {array} prefill
     * @return {Balances}
     */
    ProcessOut.prototype.newBalances = function (prefill) {
        return new p.Balances(this, prefill);
    };
    /**
     * Create a new Balance instance
     * @param {array} prefill
     * @return {Balance}
     */
    ProcessOut.prototype.newBalance = function (prefill) {
        return new p.Balance(this, prefill);
    };
    /**
     * Create a new Card instance
     * @param {array} prefill
     * @return {Card}
     */
    ProcessOut.prototype.newCard = function (prefill) {
        return new p.Card(this, prefill);
    };
    /**
     * Create a new CardInformation instance
     * @param {array} prefill
     * @return {CardInformation}
     */
    ProcessOut.prototype.newCardInformation = function (prefill) {
        return new p.CardInformation(this, prefill);
    };
    /**
     * Create a new Phone instance
     * @param {array} prefill
     * @return {Phone}
     */
    ProcessOut.prototype.newPhone = function (prefill) {
        return new p.Phone(this, prefill);
    };
    /**
     * Create a new Coupon instance
     * @param {array} prefill
     * @return {Coupon}
     */
    ProcessOut.prototype.newCoupon = function (prefill) {
        return new p.Coupon(this, prefill);
    };
    /**
     * Create a new Customer instance
     * @param {array} prefill
     * @return {Customer}
     */
    ProcessOut.prototype.newCustomer = function (prefill) {
        return new p.Customer(this, prefill);
    };
    /**
     * Create a new CustomerPhone instance
     * @param {array} prefill
     * @return {CustomerPhone}
     */
    ProcessOut.prototype.newCustomerPhone = function (prefill) {
        return new p.CustomerPhone(this, prefill);
    };
    /**
     * Create a new Token instance
     * @param {array} prefill
     * @return {Token}
     */
    ProcessOut.prototype.newToken = function (prefill) {
        return new p.Token(this, prefill);
    };
    /**
     * Create a new Discount instance
     * @param {array} prefill
     * @return {Discount}
     */
    ProcessOut.prototype.newDiscount = function (prefill) {
        return new p.Discount(this, prefill);
    };
    /**
     * Create a new Event instance
     * @param {array} prefill
     * @return {Event}
     */
    ProcessOut.prototype.newEvent = function (prefill) {
        return new p.Event(this, prefill);
    };
    /**
     * Create a new Gateway instance
     * @param {array} prefill
     * @return {Gateway}
     */
    ProcessOut.prototype.newGateway = function (prefill) {
        return new p.Gateway(this, prefill);
    };
    /**
     * Create a new GatewayConfiguration instance
     * @param {array} prefill
     * @return {GatewayConfiguration}
     */
    ProcessOut.prototype.newGatewayConfiguration = function (prefill) {
        return new p.GatewayConfiguration(this, prefill);
    };
    /**
     * Create a new Invoice instance
     * @param {array} prefill
     * @return {Invoice}
     */
    ProcessOut.prototype.newInvoice = function (prefill) {
        return new p.Invoice(this, prefill);
    };
    /**
     * Create a new NativeAPMRequest instance
     * @param {array} prefill
     * @return {NativeAPMRequest}
     */
    ProcessOut.prototype.newNativeAPMRequest = function (prefill) {
        return new p.NativeAPMRequest(this, prefill);
    };
    /**
     * Create a new NativeAPMParameterValue instance
     * @param {array} prefill
     * @return {NativeAPMParameterValue}
     */
    ProcessOut.prototype.newNativeAPMParameterValue = function (prefill) {
        return new p.NativeAPMParameterValue(this, prefill);
    };
    /**
     * Create a new InvoiceTax instance
     * @param {array} prefill
     * @return {InvoiceTax}
     */
    ProcessOut.prototype.newInvoiceTax = function (prefill) {
        return new p.InvoiceTax(this, prefill);
    };
    /**
     * Create a new InvoiceExternalFraudTools instance
     * @param {array} prefill
     * @return {InvoiceExternalFraudTools}
     */
    ProcessOut.prototype.newInvoiceExternalFraudTools = function (prefill) {
        return new p.InvoiceExternalFraudTools(this, prefill);
    };
    /**
     * Create a new InvoiceRisk instance
     * @param {array} prefill
     * @return {InvoiceRisk}
     */
    ProcessOut.prototype.newInvoiceRisk = function (prefill) {
        return new p.InvoiceRisk(this, prefill);
    };
    /**
     * Create a new InvoiceDevice instance
     * @param {array} prefill
     * @return {InvoiceDevice}
     */
    ProcessOut.prototype.newInvoiceDevice = function (prefill) {
        return new p.InvoiceDevice(this, prefill);
    };
    /**
     * Create a new InvoiceShipping instance
     * @param {array} prefill
     * @return {InvoiceShipping}
     */
    ProcessOut.prototype.newInvoiceShipping = function (prefill) {
        return new p.InvoiceShipping(this, prefill);
    };
    /**
     * Create a new InvoiceShippingPhone instance
     * @param {array} prefill
     * @return {InvoiceShippingPhone}
     */
    ProcessOut.prototype.newInvoiceShippingPhone = function (prefill) {
        return new p.InvoiceShippingPhone(this, prefill);
    };
    /**
     * Create a new InvoiceBilling instance
     * @param {array} prefill
     * @return {InvoiceBilling}
     */
    ProcessOut.prototype.newInvoiceBilling = function (prefill) {
        return new p.InvoiceBilling(this, prefill);
    };
    /**
     * Create a new UnsupportedFeatureBypass instance
     * @param {array} prefill
     * @return {UnsupportedFeatureBypass}
     */
    ProcessOut.prototype.newUnsupportedFeatureBypass = function (prefill) {
        return new p.UnsupportedFeatureBypass(this, prefill);
    };
    /**
     * Create a new InvoiceDetail instance
     * @param {array} prefill
     * @return {InvoiceDetail}
     */
    ProcessOut.prototype.newInvoiceDetail = function (prefill) {
        return new p.InvoiceDetail(this, prefill);
    };
    /**
     * Create a new CustomerAction instance
     * @param {array} prefill
     * @return {CustomerAction}
     */
    ProcessOut.prototype.newCustomerAction = function (prefill) {
        return new p.CustomerAction(this, prefill);
    };
    /**
     * Create a new DunningAction instance
     * @param {array} prefill
     * @return {DunningAction}
     */
    ProcessOut.prototype.newDunningAction = function (prefill) {
        return new p.DunningAction(this, prefill);
    };
    /**
     * Create a new Payout instance
     * @param {array} prefill
     * @return {Payout}
     */
    ProcessOut.prototype.newPayout = function (prefill) {
        return new p.Payout(this, prefill);
    };
    /**
     * Create a new PayoutItem instance
     * @param {array} prefill
     * @return {PayoutItem}
     */
    ProcessOut.prototype.newPayoutItem = function (prefill) {
        return new p.PayoutItem(this, prefill);
    };
    /**
     * Create a new PayoutItemAmountBreakdowns instance
     * @param {array} prefill
     * @return {PayoutItemAmountBreakdowns}
     */
    ProcessOut.prototype.newPayoutItemAmountBreakdowns = function (prefill) {
        return new p.PayoutItemAmountBreakdowns(this, prefill);
    };
    /**
     * Create a new Plan instance
     * @param {array} prefill
     * @return {Plan}
     */
    ProcessOut.prototype.newPlan = function (prefill) {
        return new p.Plan(this, prefill);
    };
    /**
     * Create a new Product instance
     * @param {array} prefill
     * @return {Product}
     */
    ProcessOut.prototype.newProduct = function (prefill) {
        return new p.Product(this, prefill);
    };
    /**
     * Create a new Project instance
     * @param {array} prefill
     * @return {Project}
     */
    ProcessOut.prototype.newProject = function (prefill) {
        return new p.Project(this, prefill);
    };
    /**
     * Create a new ProjectSFTPSettings instance
     * @param {array} prefill
     * @return {ProjectSFTPSettings}
     */
    ProcessOut.prototype.newProjectSFTPSettings = function (prefill) {
        return new p.ProjectSFTPSettings(this, prefill);
    };
    /**
     * Create a new ProjectSFTPSettingsPublic instance
     * @param {array} prefill
     * @return {ProjectSFTPSettingsPublic}
     */
    ProcessOut.prototype.newProjectSFTPSettingsPublic = function (prefill) {
        return new p.ProjectSFTPSettingsPublic(this, prefill);
    };
    /**
     * Create a new Refund instance
     * @param {array} prefill
     * @return {Refund}
     */
    ProcessOut.prototype.newRefund = function (prefill) {
        return new p.Refund(this, prefill);
    };
    /**
     * Create a new Subscription instance
     * @param {array} prefill
     * @return {Subscription}
     */
    ProcessOut.prototype.newSubscription = function (prefill) {
        return new p.Subscription(this, prefill);
    };
    /**
     * Create a new Transaction instance
     * @param {array} prefill
     * @return {Transaction}
     */
    ProcessOut.prototype.newTransaction = function (prefill) {
        return new p.Transaction(this, prefill);
    };
    /**
     * Create a new NativeAPMResponse instance
     * @param {array} prefill
     * @return {NativeAPMResponse}
     */
    ProcessOut.prototype.newNativeAPMResponse = function (prefill) {
        return new p.NativeAPMResponse(this, prefill);
    };
    /**
     * Create a new NativeAPMParameterDefinition instance
     * @param {array} prefill
     * @return {NativeAPMParameterDefinition}
     */
    ProcessOut.prototype.newNativeAPMParameterDefinition = function (prefill) {
        return new p.NativeAPMParameterDefinition(this, prefill);
    };
    /**
     * Create a new NativeAPMParameterValueDefinition instance
     * @param {array} prefill
     * @return {NativeAPMParameterValueDefinition}
     */
    ProcessOut.prototype.newNativeAPMParameterValueDefinition = function (prefill) {
        return new p.NativeAPMParameterValueDefinition(this, prefill);
    };
    /**
     * Create a new ThreeDS instance
     * @param {array} prefill
     * @return {ThreeDS}
     */
    ProcessOut.prototype.newThreeDS = function (prefill) {
        return new p.ThreeDS(this, prefill);
    };
    /**
     * Create a new PaymentDataThreeDSRequest instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSRequest}
     */
    ProcessOut.prototype.newPaymentDataThreeDSRequest = function (prefill) {
        return new p.PaymentDataThreeDSRequest(this, prefill);
    };
    /**
     * Create a new PaymentDataNetworkAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataNetworkAuthentication}
     */
    ProcessOut.prototype.newPaymentDataNetworkAuthentication = function (prefill) {
        return new p.PaymentDataNetworkAuthentication(this, prefill);
    };
    /**
     * Create a new PaymentDataThreeDSAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSAuthentication}
     */
    ProcessOut.prototype.newPaymentDataThreeDSAuthentication = function (prefill) {
        return new p.PaymentDataThreeDSAuthentication(this, prefill);
    };
    /**
     * Create a new TransactionOperation instance
     * @param {array} prefill
     * @return {TransactionOperation}
     */
    ProcessOut.prototype.newTransactionOperation = function (prefill) {
        return new p.TransactionOperation(this, prefill);
    };
    /**
     * Create a new Webhook instance
     * @param {array} prefill
     * @return {Webhook}
     */
    ProcessOut.prototype.newWebhook = function (prefill) {
        return new p.Webhook(this, prefill);
    };
    /**
     * Create a new WebhookEndpoint instance
     * @param {array} prefill
     * @return {WebhookEndpoint}
     */
    ProcessOut.prototype.newWebhookEndpoint = function (prefill) {
        return new p.WebhookEndpoint(this, prefill);
    };
    /**
     * Create a new CardCreateRequest instance
     * @param {array} prefill
     * @return {CardCreateRequest}
     */
    ProcessOut.prototype.newCardCreateRequest = function (prefill) {
        return new p.CardCreateRequest(this, prefill);
    };
    /**
     * Create a new Device instance
     * @param {array} prefill
     * @return {Device}
     */
    ProcessOut.prototype.newDevice = function (prefill) {
        return new p.Device(this, prefill);
    };
    /**
     * Create a new CardContact instance
     * @param {array} prefill
     * @return {CardContact}
     */
    ProcessOut.prototype.newCardContact = function (prefill) {
        return new p.CardContact(this, prefill);
    };
    /**
     * Create a new CardShipping instance
     * @param {array} prefill
     * @return {CardShipping}
     */
    ProcessOut.prototype.newCardShipping = function (prefill) {
        return new p.CardShipping(this, prefill);
    };
    /**
     * Create a new CardUpdateRequest instance
     * @param {array} prefill
     * @return {CardUpdateRequest}
     */
    ProcessOut.prototype.newCardUpdateRequest = function (prefill) {
        return new p.CardUpdateRequest(this, prefill);
    };
    /**
     * Create a new ErrorCodes instance
     * @param {array} prefill
     * @return {ErrorCodes}
     */
    ProcessOut.prototype.newErrorCodes = function (prefill) {
        return new p.ErrorCodes(this, prefill);
    };
    /**
     * Create a new CategoryErrorCodes instance
     * @param {array} prefill
     * @return {CategoryErrorCodes}
     */
    ProcessOut.prototype.newCategoryErrorCodes = function (prefill) {
        return new p.CategoryErrorCodes(this, prefill);
    };
    /**
     * Create a new NativeAPMTransactionDetailsGateway instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetailsGateway}
     */
    ProcessOut.prototype.newNativeAPMTransactionDetailsGateway = function (prefill) {
        return new p.NativeAPMTransactionDetailsGateway(this, prefill);
    };
    /**
     * Create a new NativeAPMTransactionDetailsInvoice instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    ProcessOut.prototype.newNativeAPMTransactionDetailsInvoice = function (prefill) {
        return new p.NativeAPMTransactionDetailsInvoice(this, prefill);
    };
    /**
     * Create a new NativeAPMTransactionDetails instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetails}
     */
    ProcessOut.prototype.newNativeAPMTransactionDetails = function (prefill) {
        return new p.NativeAPMTransactionDetails(this, prefill);
    };
    /**
     * Create a new InvoicesProcessNativePaymentResponse instance
     * @param {array} prefill
     * @return {InvoicesProcessNativePaymentResponse}
     */
    ProcessOut.prototype.newInvoicesProcessNativePaymentResponse = function (prefill) {
        return new p.InvoicesProcessNativePaymentResponse(this, prefill);
    };
    return ProcessOut;
}());
module.exports = ProcessOut;
//# sourceMappingURL=processout.js.map