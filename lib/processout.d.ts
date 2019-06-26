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
declare class ProcessOut {
    /**
     * ProcessOut api host
     * @type {string}
     */
    protected host: string;
    /**
     * ProcessOut project ID
     * @type {string}
     */
    protected projectID: string;
    /**
     * ProcessOut project secret key
     * @type {string}
     */
    protected projectSecret: string;
    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     * @param {string} projectID
     * @param {string} projectSecret
     * @class {ProcessOut}
     */
    constructor(projectID: string, projectSecret: string);
    /**
     * Get the library host URL
     * @return {string}
     */
    getHost(): string;
    /**
     * Set the library host URL
     * @param {string} h
     * @return {ProcessOut}
     */
    setHost(h: string): void;
    /**
     * Get projectID
     * @return {string}
     */
    getProjectID(): string;
    /**
     * Get projectSecret
     * @return {string}
     */
    getProjectSecret(): string;
    /**
     * Create a new Activity instance
     * @param {array} prefill
     * @return {Activity}
     */
    newActivity(prefill?: Activity): Activity;
    /**
     * Create a new Addon instance
     * @param {array} prefill
     * @return {Addon}
     */
    newAddon(prefill?: Addon): Addon;
    /**
     * Create a new APIRequest instance
     * @param {array} prefill
     * @return {APIRequest}
     */
    newAPIRequest(prefill?: APIRequest): APIRequest;
    /**
     * Create a new APIVersion instance
     * @param {array} prefill
     * @return {APIVersion}
     */
    newAPIVersion(prefill?: APIVersion): APIVersion;
    /**
     * Create a new Card instance
     * @param {array} prefill
     * @return {Card}
     */
    newCard(prefill?: Card): Card;
    /**
     * Create a new CardInformation instance
     * @param {array} prefill
     * @return {CardInformation}
     */
    newCardInformation(prefill?: CardInformation): CardInformation;
    /**
     * Create a new Coupon instance
     * @param {array} prefill
     * @return {Coupon}
     */
    newCoupon(prefill?: Coupon): Coupon;
    /**
     * Create a new Customer instance
     * @param {array} prefill
     * @return {Customer}
     */
    newCustomer(prefill?: Customer): Customer;
    /**
     * Create a new Token instance
     * @param {array} prefill
     * @return {Token}
     */
    newToken(prefill?: Token): Token;
    /**
     * Create a new Discount instance
     * @param {array} prefill
     * @return {Discount}
     */
    newDiscount(prefill?: Discount): Discount;
    /**
     * Create a new Event instance
     * @param {array} prefill
     * @return {Event}
     */
    newEvent(prefill?: Event): Event;
    /**
     * Create a new Gateway instance
     * @param {array} prefill
     * @return {Gateway}
     */
    newGateway(prefill?: Gateway): Gateway;
    /**
     * Create a new GatewayConfiguration instance
     * @param {array} prefill
     * @return {GatewayConfiguration}
     */
    newGatewayConfiguration(prefill?: GatewayConfiguration): GatewayConfiguration;
    /**
     * Create a new Invoice instance
     * @param {array} prefill
     * @return {Invoice}
     */
    newInvoice(prefill?: Invoice): Invoice;
    /**
     * Create a new InvoiceRisk instance
     * @param {array} prefill
     * @return {InvoiceRisk}
     */
    newInvoiceRisk(prefill?: InvoiceRisk): InvoiceRisk;
    /**
     * Create a new InvoiceDevice instance
     * @param {array} prefill
     * @return {InvoiceDevice}
     */
    newInvoiceDevice(prefill?: InvoiceDevice): InvoiceDevice;
    /**
     * Create a new InvoiceShipping instance
     * @param {array} prefill
     * @return {InvoiceShipping}
     */
    newInvoiceShipping(prefill?: InvoiceShipping): InvoiceShipping;
    /**
     * Create a new InvoiceDetail instance
     * @param {array} prefill
     * @return {InvoiceDetail}
     */
    newInvoiceDetail(prefill?: InvoiceDetail): InvoiceDetail;
    /**
     * Create a new CustomerAction instance
     * @param {array} prefill
     * @return {CustomerAction}
     */
    newCustomerAction(prefill?: CustomerAction): CustomerAction;
    /**
     * Create a new DunningAction instance
     * @param {array} prefill
     * @return {DunningAction}
     */
    newDunningAction(prefill?: DunningAction): DunningAction;
    /**
     * Create a new Payout instance
     * @param {array} prefill
     * @return {Payout}
     */
    newPayout(prefill?: Payout): Payout;
    /**
     * Create a new PayoutItem instance
     * @param {array} prefill
     * @return {PayoutItem}
     */
    newPayoutItem(prefill?: PayoutItem): PayoutItem;
    /**
     * Create a new Plan instance
     * @param {array} prefill
     * @return {Plan}
     */
    newPlan(prefill?: Plan): Plan;
    /**
     * Create a new Product instance
     * @param {array} prefill
     * @return {Product}
     */
    newProduct(prefill?: Product): Product;
    /**
     * Create a new Project instance
     * @param {array} prefill
     * @return {Project}
     */
    newProject(prefill?: Project): Project;
    /**
     * Create a new Refund instance
     * @param {array} prefill
     * @return {Refund}
     */
    newRefund(prefill?: Refund): Refund;
    /**
     * Create a new Subscription instance
     * @param {array} prefill
     * @return {Subscription}
     */
    newSubscription(prefill?: Subscription): Subscription;
    /**
     * Create a new Transaction instance
     * @param {array} prefill
     * @return {Transaction}
     */
    newTransaction(prefill?: Transaction): Transaction;
    /**
     * Create a new PaymentDataThreeDSRequest instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSRequest}
     */
    newPaymentDataThreeDSRequest(prefill?: PaymentDataThreeDSRequest): PaymentDataThreeDSRequest;
    /**
     * Create a new PaymentDataNetworkAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataNetworkAuthentication}
     */
    newPaymentDataNetworkAuthentication(prefill?: PaymentDataNetworkAuthentication): PaymentDataNetworkAuthentication;
    /**
     * Create a new PaymentDataThreeDSAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSAuthentication}
     */
    newPaymentDataThreeDSAuthentication(prefill?: PaymentDataThreeDSAuthentication): PaymentDataThreeDSAuthentication;
    /**
     * Create a new TransactionOperation instance
     * @param {array} prefill
     * @return {TransactionOperation}
     */
    newTransactionOperation(prefill?: TransactionOperation): TransactionOperation;
    /**
     * Create a new Webhook instance
     * @param {array} prefill
     * @return {Webhook}
     */
    newWebhook(prefill?: Webhook): Webhook;
    /**
     * Create a new WebhookEndpoint instance
     * @param {array} prefill
     * @return {WebhookEndpoint}
     */
    newWebhookEndpoint(prefill?: WebhookEndpoint): WebhookEndpoint;
}
export = ProcessOut;
