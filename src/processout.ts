
import Activity = require('./activity');
import Addon = require('./addon');
import APIRequest = require('./apirequest');
import APIVersion = require('./apiversion');
import Card = require('./card');
import CardInformation = require('./cardinformation');
import Coupon = require('./coupon');
import Customer = require('./customer');
import Token = require('./token');
import Discount = require('./discount');
import Event = require('./event');
import Gateway = require('./gateway');
import GatewayConfiguration = require('./gatewayconfiguration');
import Invoice = require('./invoice');
import InvoiceRisk = require('./invoicerisk');
import InvoiceDevice = require('./invoicedevice');
import InvoiceShipping = require('./invoiceshipping');
import InvoiceDetail = require('./invoicedetail');
import CustomerAction = require('./customeraction');
import DunningAction = require('./dunningaction');
import Payout = require('./payout');
import PayoutItem = require('./payoutitem');
import Plan = require('./plan');
import Product = require('./product');
import Project = require('./project');
import Refund = require('./refund');
import Subscription = require('./subscription');
import Transaction = require('./transaction');
import PaymentDataThreeDSRequest = require('./paymentdatathreedsrequest');
import PaymentDataNetworkAuthentication = require('./paymentdatanetworkauthentication');
import PaymentDataThreeDSAuthentication = require('./paymentdatathreedsauthentication');
import TransactionOperation = require('./transactionoperation');
import Webhook = require('./webhook');
import WebhookEndpoint = require('./webhookendpoint');

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
	public newActivity(prefill?: Activity): Activity {
        return new Activity(this, prefill);
    }
	
    /**
     * Create a new Addon instance
     * @param {array} prefill
     * @return {Addon}
     */
	public newAddon(prefill?: Addon): Addon {
        return new Addon(this, prefill);
    }
	
    /**
     * Create a new APIRequest instance
     * @param {array} prefill
     * @return {APIRequest}
     */
	public newAPIRequest(prefill?: APIRequest): APIRequest {
        return new APIRequest(this, prefill);
    }
	
    /**
     * Create a new APIVersion instance
     * @param {array} prefill
     * @return {APIVersion}
     */
	public newAPIVersion(prefill?: APIVersion): APIVersion {
        return new APIVersion(this, prefill);
    }
	
    /**
     * Create a new Card instance
     * @param {array} prefill
     * @return {Card}
     */
	public newCard(prefill?: Card): Card {
        return new Card(this, prefill);
    }
	
    /**
     * Create a new CardInformation instance
     * @param {array} prefill
     * @return {CardInformation}
     */
	public newCardInformation(prefill?: CardInformation): CardInformation {
        return new CardInformation(this, prefill);
    }
	
    /**
     * Create a new Coupon instance
     * @param {array} prefill
     * @return {Coupon}
     */
	public newCoupon(prefill?: Coupon): Coupon {
        return new Coupon(this, prefill);
    }
	
    /**
     * Create a new Customer instance
     * @param {array} prefill
     * @return {Customer}
     */
	public newCustomer(prefill?: Customer): Customer {
        return new Customer(this, prefill);
    }
	
    /**
     * Create a new Token instance
     * @param {array} prefill
     * @return {Token}
     */
	public newToken(prefill?: Token): Token {
        return new Token(this, prefill);
    }
	
    /**
     * Create a new Discount instance
     * @param {array} prefill
     * @return {Discount}
     */
	public newDiscount(prefill?: Discount): Discount {
        return new Discount(this, prefill);
    }
	
    /**
     * Create a new Event instance
     * @param {array} prefill
     * @return {Event}
     */
	public newEvent(prefill?: Event): Event {
        return new Event(this, prefill);
    }
	
    /**
     * Create a new Gateway instance
     * @param {array} prefill
     * @return {Gateway}
     */
	public newGateway(prefill?: Gateway): Gateway {
        return new Gateway(this, prefill);
    }
	
    /**
     * Create a new GatewayConfiguration instance
     * @param {array} prefill
     * @return {GatewayConfiguration}
     */
	public newGatewayConfiguration(prefill?: GatewayConfiguration): GatewayConfiguration {
        return new GatewayConfiguration(this, prefill);
    }
	
    /**
     * Create a new Invoice instance
     * @param {array} prefill
     * @return {Invoice}
     */
	public newInvoice(prefill?: Invoice): Invoice {
        return new Invoice(this, prefill);
    }
	
    /**
     * Create a new InvoiceRisk instance
     * @param {array} prefill
     * @return {InvoiceRisk}
     */
	public newInvoiceRisk(prefill?: InvoiceRisk): InvoiceRisk {
        return new InvoiceRisk(this, prefill);
    }
	
    /**
     * Create a new InvoiceDevice instance
     * @param {array} prefill
     * @return {InvoiceDevice}
     */
	public newInvoiceDevice(prefill?: InvoiceDevice): InvoiceDevice {
        return new InvoiceDevice(this, prefill);
    }
	
    /**
     * Create a new InvoiceShipping instance
     * @param {array} prefill
     * @return {InvoiceShipping}
     */
	public newInvoiceShipping(prefill?: InvoiceShipping): InvoiceShipping {
        return new InvoiceShipping(this, prefill);
    }
	
    /**
     * Create a new InvoiceDetail instance
     * @param {array} prefill
     * @return {InvoiceDetail}
     */
	public newInvoiceDetail(prefill?: InvoiceDetail): InvoiceDetail {
        return new InvoiceDetail(this, prefill);
    }
	
    /**
     * Create a new CustomerAction instance
     * @param {array} prefill
     * @return {CustomerAction}
     */
	public newCustomerAction(prefill?: CustomerAction): CustomerAction {
        return new CustomerAction(this, prefill);
    }
	
    /**
     * Create a new DunningAction instance
     * @param {array} prefill
     * @return {DunningAction}
     */
	public newDunningAction(prefill?: DunningAction): DunningAction {
        return new DunningAction(this, prefill);
    }
	
    /**
     * Create a new Payout instance
     * @param {array} prefill
     * @return {Payout}
     */
	public newPayout(prefill?: Payout): Payout {
        return new Payout(this, prefill);
    }
	
    /**
     * Create a new PayoutItem instance
     * @param {array} prefill
     * @return {PayoutItem}
     */
	public newPayoutItem(prefill?: PayoutItem): PayoutItem {
        return new PayoutItem(this, prefill);
    }
	
    /**
     * Create a new Plan instance
     * @param {array} prefill
     * @return {Plan}
     */
	public newPlan(prefill?: Plan): Plan {
        return new Plan(this, prefill);
    }
	
    /**
     * Create a new Product instance
     * @param {array} prefill
     * @return {Product}
     */
	public newProduct(prefill?: Product): Product {
        return new Product(this, prefill);
    }
	
    /**
     * Create a new Project instance
     * @param {array} prefill
     * @return {Project}
     */
	public newProject(prefill?: Project): Project {
        return new Project(this, prefill);
    }
	
    /**
     * Create a new Refund instance
     * @param {array} prefill
     * @return {Refund}
     */
	public newRefund(prefill?: Refund): Refund {
        return new Refund(this, prefill);
    }
	
    /**
     * Create a new Subscription instance
     * @param {array} prefill
     * @return {Subscription}
     */
	public newSubscription(prefill?: Subscription): Subscription {
        return new Subscription(this, prefill);
    }
	
    /**
     * Create a new Transaction instance
     * @param {array} prefill
     * @return {Transaction}
     */
	public newTransaction(prefill?: Transaction): Transaction {
        return new Transaction(this, prefill);
    }
	
    /**
     * Create a new PaymentDataThreeDSRequest instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSRequest}
     */
	public newPaymentDataThreeDSRequest(prefill?: PaymentDataThreeDSRequest): PaymentDataThreeDSRequest {
        return new PaymentDataThreeDSRequest(this, prefill);
    }
	
    /**
     * Create a new PaymentDataNetworkAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataNetworkAuthentication}
     */
	public newPaymentDataNetworkAuthentication(prefill?: PaymentDataNetworkAuthentication): PaymentDataNetworkAuthentication {
        return new PaymentDataNetworkAuthentication(this, prefill);
    }
	
    /**
     * Create a new PaymentDataThreeDSAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSAuthentication}
     */
	public newPaymentDataThreeDSAuthentication(prefill?: PaymentDataThreeDSAuthentication): PaymentDataThreeDSAuthentication {
        return new PaymentDataThreeDSAuthentication(this, prefill);
    }
	
    /**
     * Create a new TransactionOperation instance
     * @param {array} prefill
     * @return {TransactionOperation}
     */
	public newTransactionOperation(prefill?: TransactionOperation): TransactionOperation {
        return new TransactionOperation(this, prefill);
    }
	
    /**
     * Create a new Webhook instance
     * @param {array} prefill
     * @return {Webhook}
     */
	public newWebhook(prefill?: Webhook): Webhook {
        return new Webhook(this, prefill);
    }
	
    /**
     * Create a new WebhookEndpoint instance
     * @param {array} prefill
     * @return {WebhookEndpoint}
     */
	public newWebhookEndpoint(prefill?: WebhookEndpoint): WebhookEndpoint {
        return new WebhookEndpoint(this, prefill);
    }
	

}
export = ProcessOut;
