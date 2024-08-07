import ProcessOut = require('./processout');
import * as p from '.';
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
     * Shipment full phone number, consisting of a combined dialing code and phone number
     * @type {string}
     */
    private phoneNumber;
    /**
     * Phone number for the shipment
     * @type {p.InvoiceShippingPhone}
     */
    private phone;
    /**
     * Date at which the shipment is expected to be sent
     * @type {string}
     */
    private expectsShippingAt;
    /**
     * Relay store name
     * @type {string}
     */
    private relayStoreName;
    /**
     * First name for the shipment
     * @type {string}
     */
    private firstName;
    /**
     * Last name for the shipment
     * @type {string}
     */
    private lastName;
    /**
     * Email for the shipment
     * @type {string}
     */
    private email;
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
     * Shipment full phone number, consisting of a combined dialing code and phone number
     * @return {string}
     */
    getPhoneNumber(): string;
    /**
     * Set PhoneNumber
     * Shipment full phone number, consisting of a combined dialing code and phone number
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setPhoneNumber(val: string): InvoiceShipping;
    /**
     * Get Phone
     * Phone number for the shipment
     * @return {p.InvoiceShippingPhone}
     */
    getPhone(): p.InvoiceShippingPhone;
    /**
     * Set Phone
     * Phone number for the shipment
     * @param {p.InvoiceShippingPhone} val
     * @return {InvoiceShipping}
     */
    setPhone(val: p.InvoiceShippingPhone): InvoiceShipping;
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
     * Get RelayStoreName
     * Relay store name
     * @return {string}
     */
    getRelayStoreName(): string;
    /**
     * Set RelayStoreName
     * Relay store name
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setRelayStoreName(val: string): InvoiceShipping;
    /**
     * Get FirstName
     * First name for the shipment
     * @return {string}
     */
    getFirstName(): string;
    /**
     * Set FirstName
     * First name for the shipment
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setFirstName(val: string): InvoiceShipping;
    /**
     * Get LastName
     * Last name for the shipment
     * @return {string}
     */
    getLastName(): string;
    /**
     * Set LastName
     * Last name for the shipment
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setLastName(val: string): InvoiceShipping;
    /**
     * Get Email
     * Email for the shipment
     * @return {string}
     */
    getEmail(): string;
    /**
     * Set Email
     * Email for the shipment
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setEmail(val: string): InvoiceShipping;
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