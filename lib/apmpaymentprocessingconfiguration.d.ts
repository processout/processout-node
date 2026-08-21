import ProcessOut = require('./processout');
declare class APMPaymentProcessingConfiguration {
    private client;
    /**
     * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
     * @type {string}
     */
    private returnRedirectType;
    /**
     * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
     * @type {string}
     */
    private preferredFinalizationMode;
    /**
     * APMPaymentProcessingConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: APMPaymentProcessingConfiguration);
    getProcessOutObjectClass(): string;
    /**
     * Get ReturnRedirectType
     * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
     * @return {string}
     */
    getReturnRedirectType(): string;
    /**
     * Set ReturnRedirectType
     * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
     * @param {string} val
     * @return {APMPaymentProcessingConfiguration}
     */
    setReturnRedirectType(val: string): APMPaymentProcessingConfiguration;
    /**
     * Get PreferredFinalizationMode
     * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
     * @return {string}
     */
    getPreferredFinalizationMode(): string;
    /**
     * Set PreferredFinalizationMode
     * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
     * @param {string} val
     * @return {APMPaymentProcessingConfiguration}
     */
    setPreferredFinalizationMode(val: string): APMPaymentProcessingConfiguration;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APMPaymentProcessingConfiguration}
     */
    fillWithData(data: any): APMPaymentProcessingConfiguration;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = APMPaymentProcessingConfiguration;
//# sourceMappingURL=apmpaymentprocessingconfiguration.d.ts.map