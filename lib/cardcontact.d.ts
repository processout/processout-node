import ProcessOut = require('./processout');
declare class CardContact {
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
     * CardContact constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardContact);
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
     * @return {CardContact}
     */
    setAddress1(val: string): CardContact;
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
     * @return {CardContact}
     */
    setAddress2(val: string): CardContact;
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
     * @return {CardContact}
     */
    setCity(val: string): CardContact;
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
     * @return {CardContact}
     */
    setState(val: string): CardContact;
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
     * @return {CardContact}
     */
    setCountryCode(val: string): CardContact;
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
     * @return {CardContact}
     */
    setZip(val: string): CardContact;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardContact}
     */
    fillWithData(data: any): CardContact;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = CardContact;
//# sourceMappingURL=cardcontact.d.ts.map