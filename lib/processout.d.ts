import type fetch from 'node-fetch';
import * as p from '.';
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
     * Custom fetch client used for requests
     * @type {fetch}
     */
    fetch: fetch;
    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     * @param {string} projectID
     * @param {string} projectSecret
     * @param {object} options
     * @param {fetch} options.fetch
     * @class {ProcessOut}
     */
    constructor(projectID: string, projectSecret: string, options?: {
        fetch?: fetch;
    });
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
    newActivity(prefill?: p.Activity): p.Activity;
    /**
     * Create a new Addon instance
     * @param {array} prefill
     * @return {Addon}
     */
    newAddon(prefill?: p.Addon): p.Addon;
    /**
     * Create a new APIVersion instance
     * @param {array} prefill
     * @return {APIVersion}
     */
    newAPIVersion(prefill?: p.APIVersion): p.APIVersion;
    /**
     * Create a new ApplePayAlternativeMerchantCertificates instance
     * @param {array} prefill
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    newApplePayAlternativeMerchantCertificates(prefill?: p.ApplePayAlternativeMerchantCertificates): p.ApplePayAlternativeMerchantCertificates;
    /**
     * Create a new AlternativeMerchantCertificate instance
     * @param {array} prefill
     * @return {AlternativeMerchantCertificate}
     */
    newAlternativeMerchantCertificate(prefill?: p.AlternativeMerchantCertificate): p.AlternativeMerchantCertificate;
    /**
     * Create a new Balances instance
     * @param {array} prefill
     * @return {Balances}
     */
    newBalances(prefill?: p.Balances): p.Balances;
    /**
     * Create a new Balance instance
     * @param {array} prefill
     * @return {Balance}
     */
    newBalance(prefill?: p.Balance): p.Balance;
    /**
     * Create a new Card instance
     * @param {array} prefill
     * @return {Card}
     */
    newCard(prefill?: p.Card): p.Card;
    /**
     * Create a new CardInformation instance
     * @param {array} prefill
     * @return {CardInformation}
     */
    newCardInformation(prefill?: p.CardInformation): p.CardInformation;
    /**
     * Create a new Phone instance
     * @param {array} prefill
     * @return {Phone}
     */
    newPhone(prefill?: p.Phone): p.Phone;
    /**
     * Create a new Coupon instance
     * @param {array} prefill
     * @return {Coupon}
     */
    newCoupon(prefill?: p.Coupon): p.Coupon;
    /**
     * Create a new Customer instance
     * @param {array} prefill
     * @return {Customer}
     */
    newCustomer(prefill?: p.Customer): p.Customer;
    /**
     * Create a new CustomerPhone instance
     * @param {array} prefill
     * @return {CustomerPhone}
     */
    newCustomerPhone(prefill?: p.CustomerPhone): p.CustomerPhone;
    /**
     * Create a new Token instance
     * @param {array} prefill
     * @return {Token}
     */
    newToken(prefill?: p.Token): p.Token;
    /**
     * Create a new Discount instance
     * @param {array} prefill
     * @return {Discount}
     */
    newDiscount(prefill?: p.Discount): p.Discount;
    /**
     * Create a new Event instance
     * @param {array} prefill
     * @return {Event}
     */
    newEvent(prefill?: p.Event): p.Event;
    /**
     * Create a new Gateway instance
     * @param {array} prefill
     * @return {Gateway}
     */
    newGateway(prefill?: p.Gateway): p.Gateway;
    /**
     * Create a new GatewayConfiguration instance
     * @param {array} prefill
     * @return {GatewayConfiguration}
     */
    newGatewayConfiguration(prefill?: p.GatewayConfiguration): p.GatewayConfiguration;
    /**
     * Create a new Invoice instance
     * @param {array} prefill
     * @return {Invoice}
     */
    newInvoice(prefill?: p.Invoice): p.Invoice;
    /**
     * Create a new NativeAPMRequest instance
     * @param {array} prefill
     * @return {NativeAPMRequest}
     */
    newNativeAPMRequest(prefill?: p.NativeAPMRequest): p.NativeAPMRequest;
    /**
     * Create a new NativeAPMParameterValue instance
     * @param {array} prefill
     * @return {NativeAPMParameterValue}
     */
    newNativeAPMParameterValue(prefill?: p.NativeAPMParameterValue): p.NativeAPMParameterValue;
    /**
     * Create a new InvoiceTax instance
     * @param {array} prefill
     * @return {InvoiceTax}
     */
    newInvoiceTax(prefill?: p.InvoiceTax): p.InvoiceTax;
    /**
     * Create a new InvoiceExternalFraudTools instance
     * @param {array} prefill
     * @return {InvoiceExternalFraudTools}
     */
    newInvoiceExternalFraudTools(prefill?: p.InvoiceExternalFraudTools): p.InvoiceExternalFraudTools;
    /**
     * Create a new InvoiceRisk instance
     * @param {array} prefill
     * @return {InvoiceRisk}
     */
    newInvoiceRisk(prefill?: p.InvoiceRisk): p.InvoiceRisk;
    /**
     * Create a new InvoiceDevice instance
     * @param {array} prefill
     * @return {InvoiceDevice}
     */
    newInvoiceDevice(prefill?: p.InvoiceDevice): p.InvoiceDevice;
    /**
     * Create a new InvoiceShipping instance
     * @param {array} prefill
     * @return {InvoiceShipping}
     */
    newInvoiceShipping(prefill?: p.InvoiceShipping): p.InvoiceShipping;
    /**
     * Create a new InvoiceShippingPhone instance
     * @param {array} prefill
     * @return {InvoiceShippingPhone}
     */
    newInvoiceShippingPhone(prefill?: p.InvoiceShippingPhone): p.InvoiceShippingPhone;
    /**
     * Create a new InvoiceBilling instance
     * @param {array} prefill
     * @return {InvoiceBilling}
     */
    newInvoiceBilling(prefill?: p.InvoiceBilling): p.InvoiceBilling;
    /**
     * Create a new UnsupportedFeatureBypass instance
     * @param {array} prefill
     * @return {UnsupportedFeatureBypass}
     */
    newUnsupportedFeatureBypass(prefill?: p.UnsupportedFeatureBypass): p.UnsupportedFeatureBypass;
    /**
     * Create a new InvoiceDetail instance
     * @param {array} prefill
     * @return {InvoiceDetail}
     */
    newInvoiceDetail(prefill?: p.InvoiceDetail): p.InvoiceDetail;
    /**
     * Create a new CustomerAction instance
     * @param {array} prefill
     * @return {CustomerAction}
     */
    newCustomerAction(prefill?: p.CustomerAction): p.CustomerAction;
    /**
     * Create a new DunningAction instance
     * @param {array} prefill
     * @return {DunningAction}
     */
    newDunningAction(prefill?: p.DunningAction): p.DunningAction;
    /**
     * Create a new Payout instance
     * @param {array} prefill
     * @return {Payout}
     */
    newPayout(prefill?: p.Payout): p.Payout;
    /**
     * Create a new PayoutItem instance
     * @param {array} prefill
     * @return {PayoutItem}
     */
    newPayoutItem(prefill?: p.PayoutItem): p.PayoutItem;
    /**
     * Create a new PayoutItemAmountBreakdowns instance
     * @param {array} prefill
     * @return {PayoutItemAmountBreakdowns}
     */
    newPayoutItemAmountBreakdowns(prefill?: p.PayoutItemAmountBreakdowns): p.PayoutItemAmountBreakdowns;
    /**
     * Create a new Plan instance
     * @param {array} prefill
     * @return {Plan}
     */
    newPlan(prefill?: p.Plan): p.Plan;
    /**
     * Create a new Product instance
     * @param {array} prefill
     * @return {Product}
     */
    newProduct(prefill?: p.Product): p.Product;
    /**
     * Create a new Project instance
     * @param {array} prefill
     * @return {Project}
     */
    newProject(prefill?: p.Project): p.Project;
    /**
     * Create a new ProjectSFTPSettings instance
     * @param {array} prefill
     * @return {ProjectSFTPSettings}
     */
    newProjectSFTPSettings(prefill?: p.ProjectSFTPSettings): p.ProjectSFTPSettings;
    /**
     * Create a new ProjectSFTPSettingsPublic instance
     * @param {array} prefill
     * @return {ProjectSFTPSettingsPublic}
     */
    newProjectSFTPSettingsPublic(prefill?: p.ProjectSFTPSettingsPublic): p.ProjectSFTPSettingsPublic;
    /**
     * Create a new Refund instance
     * @param {array} prefill
     * @return {Refund}
     */
    newRefund(prefill?: p.Refund): p.Refund;
    /**
     * Create a new Subscription instance
     * @param {array} prefill
     * @return {Subscription}
     */
    newSubscription(prefill?: p.Subscription): p.Subscription;
    /**
     * Create a new Transaction instance
     * @param {array} prefill
     * @return {Transaction}
     */
    newTransaction(prefill?: p.Transaction): p.Transaction;
    /**
     * Create a new NativeAPMResponse instance
     * @param {array} prefill
     * @return {NativeAPMResponse}
     */
    newNativeAPMResponse(prefill?: p.NativeAPMResponse): p.NativeAPMResponse;
    /**
     * Create a new NativeAPMParameterDefinition instance
     * @param {array} prefill
     * @return {NativeAPMParameterDefinition}
     */
    newNativeAPMParameterDefinition(prefill?: p.NativeAPMParameterDefinition): p.NativeAPMParameterDefinition;
    /**
     * Create a new NativeAPMParameterValueDefinition instance
     * @param {array} prefill
     * @return {NativeAPMParameterValueDefinition}
     */
    newNativeAPMParameterValueDefinition(prefill?: p.NativeAPMParameterValueDefinition): p.NativeAPMParameterValueDefinition;
    /**
     * Create a new ThreeDS instance
     * @param {array} prefill
     * @return {ThreeDS}
     */
    newThreeDS(prefill?: p.ThreeDS): p.ThreeDS;
    /**
     * Create a new PaymentDataThreeDSRequest instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSRequest}
     */
    newPaymentDataThreeDSRequest(prefill?: p.PaymentDataThreeDSRequest): p.PaymentDataThreeDSRequest;
    /**
     * Create a new PaymentDataNetworkAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataNetworkAuthentication}
     */
    newPaymentDataNetworkAuthentication(prefill?: p.PaymentDataNetworkAuthentication): p.PaymentDataNetworkAuthentication;
    /**
     * Create a new PaymentDataThreeDSAuthentication instance
     * @param {array} prefill
     * @return {PaymentDataThreeDSAuthentication}
     */
    newPaymentDataThreeDSAuthentication(prefill?: p.PaymentDataThreeDSAuthentication): p.PaymentDataThreeDSAuthentication;
    /**
     * Create a new TransactionOperation instance
     * @param {array} prefill
     * @return {TransactionOperation}
     */
    newTransactionOperation(prefill?: p.TransactionOperation): p.TransactionOperation;
    /**
     * Create a new Webhook instance
     * @param {array} prefill
     * @return {Webhook}
     */
    newWebhook(prefill?: p.Webhook): p.Webhook;
    /**
     * Create a new WebhookEndpoint instance
     * @param {array} prefill
     * @return {WebhookEndpoint}
     */
    newWebhookEndpoint(prefill?: p.WebhookEndpoint): p.WebhookEndpoint;
    /**
     * Create a new CardCreateRequest instance
     * @param {array} prefill
     * @return {CardCreateRequest}
     */
    newCardCreateRequest(prefill?: p.CardCreateRequest): p.CardCreateRequest;
    /**
     * Create a new Device instance
     * @param {array} prefill
     * @return {Device}
     */
    newDevice(prefill?: p.Device): p.Device;
    /**
     * Create a new CardContact instance
     * @param {array} prefill
     * @return {CardContact}
     */
    newCardContact(prefill?: p.CardContact): p.CardContact;
    /**
     * Create a new CardShipping instance
     * @param {array} prefill
     * @return {CardShipping}
     */
    newCardShipping(prefill?: p.CardShipping): p.CardShipping;
    /**
     * Create a new CardUpdateRequest instance
     * @param {array} prefill
     * @return {CardUpdateRequest}
     */
    newCardUpdateRequest(prefill?: p.CardUpdateRequest): p.CardUpdateRequest;
    /**
     * Create a new ErrorCodes instance
     * @param {array} prefill
     * @return {ErrorCodes}
     */
    newErrorCodes(prefill?: p.ErrorCodes): p.ErrorCodes;
    /**
     * Create a new CategoryErrorCodes instance
     * @param {array} prefill
     * @return {CategoryErrorCodes}
     */
    newCategoryErrorCodes(prefill?: p.CategoryErrorCodes): p.CategoryErrorCodes;
    /**
     * Create a new NativeAPMTransactionDetailsGateway instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetailsGateway}
     */
    newNativeAPMTransactionDetailsGateway(prefill?: p.NativeAPMTransactionDetailsGateway): p.NativeAPMTransactionDetailsGateway;
    /**
     * Create a new NativeAPMTransactionDetailsInvoice instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    newNativeAPMTransactionDetailsInvoice(prefill?: p.NativeAPMTransactionDetailsInvoice): p.NativeAPMTransactionDetailsInvoice;
    /**
     * Create a new NativeAPMTransactionDetails instance
     * @param {array} prefill
     * @return {NativeAPMTransactionDetails}
     */
    newNativeAPMTransactionDetails(prefill?: p.NativeAPMTransactionDetails): p.NativeAPMTransactionDetails;
}
export = ProcessOut;
//# sourceMappingURL=processout.d.ts.map