// The content of this file was automatically generated

import type fetch from 'node-fetch';
import * as p from '.';

class ProcessOut {
    /**
     * ProcessOut api host
     * @type {string}
     */
    protected host: string = 'https://api.processout.com';

    /**
     * ProcessOut project ID
     * @type {string}
     */
    protected projectID: string = '';

    /**
     * ProcessOut project secret key
     * @type {string}
     */
    protected projectSecret: string = '';

    /**
     * Custom fetch client used for requests
     * @type {fetch}
     */
     public fetch: fetch = null;

    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     * @param {string} projectID
     * @param {string} projectSecret
     * @param {object} options
     * @param {fetch} options.fetch
     * @class {ProcessOut}
     */
    constructor(projectID: string, projectSecret: string, options?: { fetch?: fetch }) {
        this.projectID     = projectID;
        this.projectSecret = projectSecret;
        this.fetch         = options && options.fetch;
    }

    /**
     * Get the library host URL
     * @return {string}
     */
    public getHost(): string {
        return this.host;
    }

    /**
     * Set the library host URL
     * @param {string} h
     * @return {ProcessOut}
     */
    public setHost(h: string): void {
        this.host = h;
    }

    /**
     * Get projectID
     * @return {string}
     */
    public getProjectID(): string {
        return this.projectID;
    }

    /**
     * Get projectSecret
     * @return {string}
     */
    public getProjectSecret(): string {
        return this.projectSecret;
    }

    
    /**
     * Create a new Activity instance
     * @param {array} prefill
     * @return {Activity}
     */
	public newActivity(prefill?: p.Activity): p.Activity {
        return new p.Activity(this, prefill);
    }
	
    /**
     * Create a new Addon instance
     * @param {array} prefill
     * @return {Addon}
     */
	public newAddon(prefill?: p.Addon): p.Addon {
        return new p.Addon(this, prefill);
    }
	
    /**
     * Create a new APIVersion instance
     * @param {array} prefill
     * @return {APIVersion}
     */
	public newAPIVersion(prefill?: p.APIVersion): p.APIVersion {
        return new p.APIVersion(this, prefill);
    }
	
    /**
     * Create a new ApplePayAlternativeMerchantCertificates instance
     * @param {array} prefill
     * @return {ApplePayAlternativeMerchantCertificates}
     */
	public newApplePayAlternativeMerchantCertificates(prefill?: p.ApplePayAlternativeMerchantCertificates): p.ApplePayAlternativeMerchantCertificates {
        return new p.ApplePayAlternativeMerchantCertificates(this, prefill);
    }
	
    /**
     * Create a new AlternativeMerchantCertificate instance
     * @param {array} prefill
     * @return {AlternativeMerchantCertificate}
     */
	public newAlternativeMerchantCertificate(prefill?: p.AlternativeMerchantCertificate): p.AlternativeMerchantCertificate {
        return new p.AlternativeMerchantCertificate(this, prefill);
    }
	
    /**
     * Create a new Balances instance
     * @param {array} prefill
     * @return {Balances}
     */
	public newBalances(prefill?: p.Balances): p.Balances {
        return new p.Balances(this, prefill);
    }
	
    /**
     * Create a new Balance instance
     * @param {array} prefill
     * @return {Balance}
     */
	public newBalance(prefill?: p.Balance): p.Balance {
        return new p.Balance(this, prefill);
    }
	
    /**
     * Create a new Card instance
     * @param {array} prefill
     * @return {Card}
     */
	public newCard(prefill?: p.Card): p.Card {
        return new p.Card(this, prefill);
    }
	
    /**
     * Create a new CardInformation instance
     * @param {array} prefill
     * @return {CardInformation}
     */
	public newCardInformation(prefill?: p.CardInformation): p.CardInformation {
        return new p.CardInformation(this, prefill);
    }
	
    /**
     * Create a new Phone instance
     * @param {array} prefill
     * @return {Phone}
     */
	public newPhone(prefill?: p.Phone): p.Phone {
        return new p.Phone(this, prefill);
    }
	
    /**
     * Create a new Coupon instance
     * @param {array} prefill
     * @return {Coupon}
     */
	public newCoupon(prefill?: p.Coupon): p.Coupon {
        return new p.Coupon(this, prefill);
    }
	
    /**
     * Create a new Customer instance
     * @param {array} prefill
     * @return {Customer}
     */
	public newCustomer(prefill?: p.Customer): p.Customer {
        return new p.Customer(this, prefill);
    }
	
    /**
     * Create a new CustomerPhone instance
     * @param {array} prefill
     * @return {CustomerPhone}
     */
	public newCustomerPhone(prefill?: p.CustomerPhone): p.CustomerPhone {
        return new p.CustomerPhone(this, prefill);
    }
	
    /**
     * Create a new Token instance
     * @param {array} prefill
     * @return {Token}
     */
	public newToken(prefill?: p.Token): p.Token {
        return new p.Token(this, prefill);
    }
	
    /**
     * Create a new Discount instance
     * @param {array} prefill
     * @return {Discount}
     */
	public newDiscount(prefill?: p.Discount): p.Discount {
        return new p.Discount(this, prefill);
    }
	
    /**
     * Create a new Event instance
     * @param {array} prefill
     * @return {Event}
     */
	public newEvent(prefill?: p.Event): p.Event {
        return new p.Event(this, prefill);
    }
	
    /**
     * Create a new Gateway instance
     * @param {array} prefill
     * @return {Gateway}
     */
	public newGateway(prefill?: p.Gateway): p.Gateway {
        return new p.Gateway(this, prefill);
    }
	
    /**
     * Create a new GatewayConfiguration instance
     * @param {array} prefill
     * @return {GatewayConfiguration}
     */
	public newGatewayConfiguration(prefill?: p.GatewayConfiguration): p.GatewayConfiguration {
        return new p.GatewayConfiguration(this, prefill);
    }
	
    /**
     * Create a new Invoice instance
     * @param {array} prefill
     * @return {Invoice}
     */
	public newInvoice(prefill?: p.Invoice): p.Invoice {
        return new p.Invoice(this, prefill);
    }
	
    /**
     * Create a new NativeAPMRequest instance
     * @param {array} prefill
     * @return {NativeAPMRequest}
     */
	public newNativeAPMRequest(prefill?: p.NativeAPMRequest): p.NativeAPMRequest {
        return new p.NativeAPMRequest(this, prefill);
    }
	
    /**
     * Create a new NativeAPMParameterValue instance
     * @param {array} prefill
     * @return {NativeAPMParameterValue}
     */
	public newNativeAPMParameterValue(prefill?: p.NativeAPMParameterValue): p.NativeAPMParameterValue {
        return new p.NativeAPMParameterValue(this, prefill);
    }
	
    /**
     * Create a new InvoiceTax instance
     * @param {array} prefill
     * @return {InvoiceTax}
     */
	public newInvoiceTax(prefill?: p.InvoiceTax): p.InvoiceTax {
        return new p.InvoiceTax(this, prefill);
    }
	
    /**
     * Create a new InvoiceExternalFraudTools instance
     * @param {array} prefill
     * @return {InvoiceExternalFraudTools}
     */
	public newInvoiceExternalFraudTools(prefill?: p.InvoiceExternalFraudTools): p.InvoiceExternalFraudTools {
        return new p.InvoiceExternalFraudTools(this, prefill);
    }
	
    /**
     * Create a new InvoiceRisk instance
     * @param {array} prefill
     * @return {InvoiceRisk}
     */
	public newInvoiceRisk(prefill?: p.InvoiceRisk): p.InvoiceRisk {
        return new p.InvoiceRisk(this, prefill);
    }
	
    /**
     * Create a new InvoiceDevice instance
     * @param {array} prefill
     * @return {InvoiceDevice}
     */
	public newInvoiceDevice(prefill?: p.InvoiceDevice): p.InvoiceDevice {
        return new p.InvoiceDevice(this, prefill);
    }
	
    /**
     * Create a new InvoiceShipping instance
     * @param {array} prefill
     * @return {InvoiceShipping}
     */
	public newInvoiceShipping(prefill?: p.InvoiceShipping): p.InvoiceShipping {
        return new p.InvoiceShipping(this, prefill);
    }
	
    /**
     * Create a new InvoiceShippingPhone instance
     * @param {array} prefill
     * @return {InvoiceShippingPhone}
     */
	public newInvoiceShippingPhone(prefill?: p.InvoiceShippingPhone): p.InvoiceShippingPhone {
        return new p.InvoiceShippingPhone(this, prefill);
    }
	
    /**
     * Create a new InvoiceBilling instance
     * @param {array} prefill
     * @return {InvoiceBilling}
     */
	public newInvoiceBilling(prefill?: p.InvoiceBilling): p.InvoiceBilling {
        return new p.InvoiceBilling(this, prefill);
    }
	
    /**
     * Create a new UnsupportedFeatureBypass instance
     * @param {array} prefill
     * @return {UnsupportedFeatureBypass}
     */
	public newUnsupportedFeatureBypass(prefill?: p.UnsupportedFeatureBypass): p.UnsupportedFeatureBypass {
        return new p.UnsupportedFeatureBypass(this, prefill);
    }
	
    /**
     * Create a new InvoiceDetail instance
     * @param {array} prefill
     * @return {InvoiceDetail}
     */
	public newInvoiceDetail(prefill?: p.InvoiceDetail): p.InvoiceDetail {
        return new p.InvoiceDetail(this, prefill);
    }
	
    /**
     * Create a new CustomerAction instance
     * @param {array} prefill
     * @return {CustomerAction}
     */
	public newCustomerAction(prefill?: p.CustomerAction): p.CustomerAction {
        return new p.CustomerAction(this, prefill);
    }
	
    /**
     * Create a new DunningAction instance
     * @param {array} prefill
     * @return {DunningAction}
     */
	public newDunningAction(prefill?: p.DunningAction): p.DunningAction {
        return new p.DunningAction(this, prefill);
    }
	
    /**
     * Create a new Payout instance
     * @param {array} prefill
     * @return {Payout}
     */
	public newPayout(prefill?: p.Payout): p.Payout {
        return new p.Payout(this, prefill);
    }
	
    /**
     * Create a new PayoutItem instance
     * @param {array} prefill
     * @return {PayoutItem}
     */
	public newPayoutItem(prefill?: p.PayoutItem): p.PayoutItem {
        return new p.PayoutItem(this, prefill);
    }
	
    /**
     * Create a new PayoutItemAmountBreakdowns instance
     * @param {array} prefill
     * @return {PayoutItemAmountBreakdowns}
     */
	public newPayoutItemAmountBreakdowns(prefill?: p.PayoutItemAmountBreakdowns): p.PayoutItemAmountBreakdowns {
        return new p.PayoutItemAmountBreakdowns(this, prefill);
    }
	
    /**
     * Create a new Plan instance
     * @param {array} prefill
     * @return {Plan}
     */
	public newPlan(prefill?: p.Plan): p.Plan {
        return new p.Plan(this, prefill);
    }
	
    /**
     * Create a new Product instance
     * @param {array} prefill
     * @return {Product}
     */
	public newProduct(prefill?: p.Product): p.Product {
        return new p.Product(this, prefill);
    }
	
    /**
     * Create a new Project instance
     * @param {array} prefill
     * @return {Project}
     */
	public newProject(prefill?: p.Project): p.Project {
        return new p.Project(this, prefill);
    }
	
    /**
     * Create a new ProjectSFTPSettings instance
     * @param {array} prefill
     * @return {ProjectSFTPSettings}
     */
	public newProjectSFTPSettings(prefill?: p.ProjectSFTPSettings): p.ProjectSFTPSettings {
        return new p.ProjectSFTPSettings(this, prefill);
    }
	
    /**
     * Create a new ProjectSFTPSettingsPublic instance
     * @param {array} prefill
     * @return {ProjectSFTPSettingsPublic}
     */
	public newProjectSFTPSettingsPublic(prefill?: p.ProjectSFTPSettingsPublic): p.ProjectSFTPSettingsPublic {
        return new p.ProjectSFTPSettingsPublic(this, prefill);
    }
	
    /**
     * Create a new Refund instance
     * @param {array} prefill
     * @return {Refund}
     */
	public newRefund(prefill?: p.Refund): p.Refund {
        return new p.Refund(this, prefill);
    }
	
    /**
     * Create a new Subscription instance
     * @param {array} prefill
     * @return {Subscription}
     */
	public newSubscription(prefill?: p.Subscription): p.Subscription {
        return new p.Subscription(this, prefill);
    }
	
    /**
     * Create a new Transaction instance
     * @param {array} prefill
     * @return {Transaction}
     */
	public newTransaction(prefill?: p.Transaction): p.Transaction {
        return new p.Transaction(this, prefill);
    }
	
    /**
     * Create a new NativeAPMResponse instance
     * @param {array} prefill
     * @return {NativeAPMResponse}
     */
	public newNativeAPMResponse(prefill?: p.NativeAPMResponse): p.NativeAPMResponse {
        return new p.NativeAPMResponse(this, prefill);
    }
	
    /**
     * Create a new NativeAPMParameterDefinition instance
     * @param {array} prefill
     * @return {NativeAPMParameterDefinition}
     */
	public newNativeAPMParameterDefinition(prefill?: p.NativeAPMParameterDefinition): p.NativeAPMParameterDefinition {
        return new p.NativeAPMParameterDefinition(this, prefill);
    }
	
    /**
     * Create a new NativeAPMParameterValueDefinition instance
     * @param {array} prefill
     * @return {NativeAPMParameterValueDefinition}
     */
	public newNativeAPMParameterValueDefinition(prefill?: p.NativeAPMParameterValueDefinition): p.NativeAPMParameterValueDefinition {
        return new p.NativeAPMParameterValueDefinition(this, prefill);
    }
	
    /**
     * Create a new ThreeDS instance
     * @param {array} prefill
     * @return {ThreeDS}
     */
	public newThreeDS(prefill?: p.ThreeDS): p.ThreeDS {
        return new p.ThreeDS(this, prefill);
    }
	
    /**
     * Create a new PaymentDataThreeDSRequest instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSRequest}
     */
	public newPaymentDataThreeDSRequest(prefill?: p.PaymentDataThreeDSRequest): p.PaymentDataThreeDSRequest {
        return new p.PaymentDataThreeDSRequest(this, prefill);
    }
	
    /**
     * Create a new PaymentDataNetworkAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataNetworkAuthentication}
     */
	public newPaymentDataNetworkAuthentication(prefill?: p.PaymentDataNetworkAuthentication): p.PaymentDataNetworkAuthentication {
        return new p.PaymentDataNetworkAuthentication(this, prefill);
    }
	
    /**
     * Create a new PaymentDataThreeDSAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSAuthentication}
     */
	public newPaymentDataThreeDSAuthentication(prefill?: p.PaymentDataThreeDSAuthentication): p.PaymentDataThreeDSAuthentication {
        return new p.PaymentDataThreeDSAuthentication(this, prefill);
    }
	
    /**
     * Create a new TransactionOperation instance
     * @param {array} prefill
     * @return {TransactionOperation}
     */
	public newTransactionOperation(prefill?: p.TransactionOperation): p.TransactionOperation {
        return new p.TransactionOperation(this, prefill);
    }
	
    /**
     * Create a new Webhook instance
     * @param {array} prefill
     * @return {Webhook}
     */
	public newWebhook(prefill?: p.Webhook): p.Webhook {
        return new p.Webhook(this, prefill);
    }
	
    /**
     * Create a new WebhookEndpoint instance
     * @param {array} prefill
     * @return {WebhookEndpoint}
     */
	public newWebhookEndpoint(prefill?: p.WebhookEndpoint): p.WebhookEndpoint {
        return new p.WebhookEndpoint(this, prefill);
    }
	
    /**
     * Create a new CardCreateRequest instance
     * @param {array} prefill
     * @return {CardCreateRequest}
     */
	public newCardCreateRequest(prefill?: p.CardCreateRequest): p.CardCreateRequest {
        return new p.CardCreateRequest(this, prefill);
    }
	
    /**
     * Create a new Device instance
     * @param {array} prefill
     * @return {Device}
     */
	public newDevice(prefill?: p.Device): p.Device {
        return new p.Device(this, prefill);
    }
	
    /**
     * Create a new CardContact instance
     * @param {array} prefill
     * @return {CardContact}
     */
	public newCardContact(prefill?: p.CardContact): p.CardContact {
        return new p.CardContact(this, prefill);
    }
	
    /**
     * Create a new CardShipping instance
     * @param {array} prefill
     * @return {CardShipping}
     */
	public newCardShipping(prefill?: p.CardShipping): p.CardShipping {
        return new p.CardShipping(this, prefill);
    }
	
    /**
     * Create a new CardUpdateRequest instance
     * @param {array} prefill
     * @return {CardUpdateRequest}
     */
	public newCardUpdateRequest(prefill?: p.CardUpdateRequest): p.CardUpdateRequest {
        return new p.CardUpdateRequest(this, prefill);
    }
	
    /**
     * Create a new ErrorCodes instance
     * @param {array} prefill
     * @return {ErrorCodes}
     */
	public newErrorCodes(prefill?: p.ErrorCodes): p.ErrorCodes {
        return new p.ErrorCodes(this, prefill);
    }
	
    /**
     * Create a new CategoryErrorCodes instance
     * @param {array} prefill
     * @return {CategoryErrorCodes}
     */
	public newCategoryErrorCodes(prefill?: p.CategoryErrorCodes): p.CategoryErrorCodes {
        return new p.CategoryErrorCodes(this, prefill);
    }
	
    /**
     * Create a new NativeAPMTransactionDetailsGateway instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetailsGateway}
     */
	public newNativeAPMTransactionDetailsGateway(prefill?: p.NativeAPMTransactionDetailsGateway): p.NativeAPMTransactionDetailsGateway {
        return new p.NativeAPMTransactionDetailsGateway(this, prefill);
    }
	
    /**
     * Create a new NativeAPMTransactionDetailsInvoice instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetailsInvoice}
     */
	public newNativeAPMTransactionDetailsInvoice(prefill?: p.NativeAPMTransactionDetailsInvoice): p.NativeAPMTransactionDetailsInvoice {
        return new p.NativeAPMTransactionDetailsInvoice(this, prefill);
    }
	
    /**
     * Create a new NativeAPMTransactionDetails instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetails}
     */
	public newNativeAPMTransactionDetails(prefill?: p.NativeAPMTransactionDetails): p.NativeAPMTransactionDetails {
        return new p.NativeAPMTransactionDetails(this, prefill);
    }
	
    /**
     * Create a new InvoicesProcessNativePaymentResponse instance
     * @param {array} prefill
     * @return {InvoicesProcessNativePaymentResponse}
     */
	public newInvoicesProcessNativePaymentResponse(prefill?: p.InvoicesProcessNativePaymentResponse): p.InvoicesProcessNativePaymentResponse {
        return new p.InvoicesProcessNativePaymentResponse(this, prefill);
    }
	

}
export = ProcessOut;
