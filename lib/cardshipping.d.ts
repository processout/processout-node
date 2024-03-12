import ProcessOut = require('./processout');
import * as p from '.';
declare class CardShipping {
    private client;
    /**
     * Address line of the card holder
     * @type {string}
     */
    private address1;
    /**
     * Secondary address line of the card holder
     * @type {string}
     */
    private address2;
    /**
     * City of the card holder
     * @type {string}
     */
    private city;
    /**
     * State of the card holder
     * @type {string}
     */
    private state;
    /**
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @type {string}
     */
    private countryCode;
    /**
     * ZIP code of the card holder
     * @type {string}
     */
    private zip;
    /**
     * Shipping phone number
     * @type {p.Phone}
     */
    private phone;
    /**
     * CardShipping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardShipping);
    getProcessOutObjectClass(): string;
    /**
     * Get Address1
     * Address line of the card holder
     * @return {string}
     */
    getAddress1(): string;
    /**
     * Set Address1
     * Address line of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    setAddress1(val: string): CardShipping;
    /**
     * Get Address2
     * Secondary address line of the card holder
     * @return {string}
     */
    getAddress2(): string;
    /**
     * Set Address2
     * Secondary address line of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    setAddress2(val: string): CardShipping;
    /**
     * Get City
     * City of the card holder
     * @return {string}
     */
    getCity(): string;
    /**
     * Set City
     * City of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    setCity(val: string): CardShipping;
    /**
     * Get State
     * State of the card holder
     * @return {string}
     */
    getState(): string;
    /**
     * Set State
     * State of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    setState(val: string): CardShipping;
    /**
     * Get CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @return {string}
     */
    getCountryCode(): string;
    /**
     * Set CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {CardShipping}
     */
    setCountryCode(val: string): CardShipping;
    /**
     * Get Zip
     * ZIP code of the card holder
     * @return {string}
     */
    getZip(): string;
    /**
     * Set Zip
     * ZIP code of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    setZip(val: string): CardShipping;
    /**
     * Get Phone
     * Shipping phone number
     * @return {p.Phone}
     */
    getPhone(): p.Phone;
    /**
     * Set Phone
     * Shipping phone number
     * @param {p.Phone} val
     * @return {CardShipping}
     */
    setPhone(val: p.Phone): CardShipping;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardShipping}
     */
    fillWithData(data: any): CardShipping;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = CardShipping;
//# sourceMappingURL=cardshipping.d.ts.map