import ProcessOut = require('./processout');
declare class SubmerchantAddress {
    private client;
    /**
     * Address line 1
     * @type {string}
     */
    private line1;
    /**
     * Address line 2
     * @type {string}
     */
    private line2;
    /**
     * City
     * @type {string}
     */
    private city;
    /**
     * State
     * @type {string}
     */
    private state;
    /**
     * Country code
     * @type {string}
     */
    private countryCode;
    /**
     * ZIP code
     * @type {string}
     */
    private zip;
    /**
     * County (US specific)
     * @type {string}
     */
    private county;
    /**
     * SubmerchantAddress constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: SubmerchantAddress);
    getProcessOutObjectClass(): string;
    /**
     * Get Line1
     * Address line 1
     * @return {string}
     */
    getLine1(): string;
    /**
     * Set Line1
     * Address line 1
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    setLine1(val: string): SubmerchantAddress;
    /**
     * Get Line2
     * Address line 2
     * @return {string}
     */
    getLine2(): string;
    /**
     * Set Line2
     * Address line 2
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    setLine2(val: string): SubmerchantAddress;
    /**
     * Get City
     * City
     * @return {string}
     */
    getCity(): string;
    /**
     * Set City
     * City
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    setCity(val: string): SubmerchantAddress;
    /**
     * Get State
     * State
     * @return {string}
     */
    getState(): string;
    /**
     * Set State
     * State
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    setState(val: string): SubmerchantAddress;
    /**
     * Get CountryCode
     * Country code
     * @return {string}
     */
    getCountryCode(): string;
    /**
     * Set CountryCode
     * Country code
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    setCountryCode(val: string): SubmerchantAddress;
    /**
     * Get Zip
     * ZIP code
     * @return {string}
     */
    getZip(): string;
    /**
     * Set Zip
     * ZIP code
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    setZip(val: string): SubmerchantAddress;
    /**
     * Get County
     * County (US specific)
     * @return {string}
     */
    getCounty(): string;
    /**
     * Set County
     * County (US specific)
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    setCounty(val: string): SubmerchantAddress;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantAddress}
     */
    fillWithData(data: any): SubmerchantAddress;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = SubmerchantAddress;
//# sourceMappingURL=submerchantaddress.d.ts.map