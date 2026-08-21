import ProcessOut = require('./processout');
import * as p from '.';
declare class PaymentProcessingConfiguration {
    private client;
    /**
     * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
     * @type {boolean}
     */
    private bypassUnsupportedSplitPayments;
    /**
     * Alternative Payment Method (APM) specific payment processing cofiguration.
     * @type {p.APMPaymentProcessingConfiguration}
     */
    private apmPaymentConfig;
    /**
     * PaymentProcessingConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PaymentProcessingConfiguration);
    getProcessOutObjectClass(): string;
    /**
     * Get BypassUnsupportedSplitPayments
     * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
     * @return {boolean}
     */
    getBypassUnsupportedSplitPayments(): boolean;
    /**
     * Set BypassUnsupportedSplitPayments
     * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
     * @param {boolean} val
     * @return {PaymentProcessingConfiguration}
     */
    setBypassUnsupportedSplitPayments(val: boolean): PaymentProcessingConfiguration;
    /**
     * Get ApmPaymentConfig
     * Alternative Payment Method (APM) specific payment processing cofiguration.
     * @return {p.APMPaymentProcessingConfiguration}
     */
    getApmPaymentConfig(): p.APMPaymentProcessingConfiguration;
    /**
     * Set ApmPaymentConfig
     * Alternative Payment Method (APM) specific payment processing cofiguration.
     * @param {p.APMPaymentProcessingConfiguration} val
     * @return {PaymentProcessingConfiguration}
     */
    setApmPaymentConfig(val: p.APMPaymentProcessingConfiguration): PaymentProcessingConfiguration;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentProcessingConfiguration}
     */
    fillWithData(data: any): PaymentProcessingConfiguration;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = PaymentProcessingConfiguration;
//# sourceMappingURL=paymentprocessingconfiguration.d.ts.map