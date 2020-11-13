// The content of this file was automatically generated

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
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     * @param {string} projectID
     * @param {string} projectSecret
     * @class {ProcessOut}
     */
    constructor(projectID: string, projectSecret: string) {
        this.projectID     = projectID;
        this.projectSecret = projectSecret;
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
     * Create a new APIRequest instance
     * @param {array} prefill
     * @return {APIRequest}
     */
	public newAPIRequest(prefill?: p.APIRequest): p.APIRequest {
        return new p.APIRequest(this, prefill);
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
	

}
export = ProcessOut;
