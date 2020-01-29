import ProcessOut = require('./processout');
declare class InvoiceShipping {
    private client;
    /**
     * Amount of the shipping
     * @type {string}
     */
    private amount;
    /**
     * Delivery method
     * @type {string}
     */
    private method;
    /**
     * Delivery provider
     * @type {string}
     */
    private provider;
    /**
     * Shipping delay
     * @type {string}
     */
    private delay;
    /**
     * Address where the shipment will be delivered
     * @type {string}
     */
    private address1;
    /**
     * Secondary address where the shipment will be delivered
     * @type {string}
     */
    private address2;
    /**
     * City where the shipment will be delivered
     * @type {string}
     */
    private city;
    /**
     * State where the shipment will be delivered
     * @type {string}
     */
    private state;
    /**
     * Country code where the shipment will be delivered
     * @type {string}
     */
    private countryCode;
    /**
     * ZIP where the shipment will be delivered
     * @type {string}
     */
    private zip;
    /**
     * Phone number for the shipment
     * @type {string}
     */
    private phoneNumber;
    /**
     * Date at which the shipment is expected to be sent
     * @type {string}
     */
    private expectsShippingAt;
    /**
     * InvoiceShipping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceShipping);
    getProcessOutObjectClass(): string;
    /**
     * Get Amount
     * Amount of the shipping
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount of the shipping
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setAmount(val: string): InvoiceShipping;
    /**
     * Get Method
     * Delivery method
     * @return {string}
     */
    getMethod(): string;
    /**
     * Set Method
     * Delivery method
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setMethod(val: string): InvoiceShipping;
    /**
     * Get Provider
     * Delivery provider
     * @return {string}
     */
    getProvider(): string;
    /**
     * Set Provider
     * Delivery provider
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setProvider(val: string): InvoiceShipping;
    /**
     * Get Delay
     * Shipping delay
     * @return {string}
     */
    getDelay(): string;
    /**
     * Set Delay
     * Shipping delay
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setDelay(val: string): InvoiceShipping;
    /**
     * Get Address1
     * Address where the shipment will be delivered
     * @return {string}
     */
    getAddress1(): string;
    /**
     * Set Address1
     * Address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setAddress1(val: string): InvoiceShipping;
    /**
     * Get Address2
     * Secondary address where the shipment will be delivered
     * @return {string}
     */
    getAddress2(): string;
    /**
     * Set Address2
     * Secondary address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setAddress2(val: string): InvoiceShipping;
    /**
     * Get City
     * City where the shipment will be delivered
     * @return {string}
     */
    getCity(): string;
    /**
     * Set City
     * City where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setCity(val: string): InvoiceShipping;
    /**
     * Get State
     * State where the shipment will be delivered
     * @return {string}
     */
    getState(): string;
    /**
     * Set State
     * State where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setState(val: string): InvoiceShipping;
    /**
     * Get CountryCode
     * Country code where the shipment will be delivered
     * @return {string}
     */
    getCountryCode(): string;
    /**
     * Set CountryCode
     * Country code where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setCountryCode(val: string): InvoiceShipping;
    /**
     * Get Zip
     * ZIP where the shipment will be delivered
     * @return {string}
     */
    getZip(): string;
    /**
     * Set Zip
     * ZIP where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setZip(val: string): InvoiceShipping;
    /**
     * Get PhoneNumber
     * Phone number for the shipment
     * @return {string}
     */
    getPhoneNumber(): string;
    /**
     * Set PhoneNumber
     * Phone number for the shipment
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setPhoneNumber(val: string): InvoiceShipping;
    /**
     * Get ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @return {string}
     */
    getExpectsShippingAt(): string;
    /**
     * Set ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setExpectsShippingAt(val: string): InvoiceShipping;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceShipping}
     */
    fillWithData(data: any): InvoiceShipping;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoiceShipping;
//# sourceMappingURL=invoiceshipping.d.ts.map