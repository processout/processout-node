import ProcessOut = require('./processout');
declare class CardInformation {
    private client;
    /**
     * First 6 digits of the card
     * @type {string}
     */
    private iin;
    /**
     * Scheme of the card, such as visa or mastercard
     * @type {string}
     */
    private scheme;
    /**
     * Type of the card (Credit, Debit, ...)
     * @type {string}
     */
    private type;
    /**
     * Name of the bank of the card
     * @type {string}
     */
    private bankName;
    /**
     * Level of the card (Electron, Classic, Gold, ...)
     * @type {string}
     */
    private brand;
    /**
     * Category of the card (consumer, commercial, ...)
     * @type {string}
     */
    private category;
    /**
     * Country that issued the card
     * @type {string}
     */
    private country;
    /**
     * CardInformation constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardInformation);
    getProcessOutObjectClass(): string;
    /**
     * Get Iin
     * First 6 digits of the card
     * @return {string}
     */
    getIin(): string;
    /**
     * Set Iin
     * First 6 digits of the card
     * @param {string} val
     * @return {CardInformation}
     */
    setIin(val: string): CardInformation;
    /**
     * Get Scheme
     * Scheme of the card, such as visa or mastercard
     * @return {string}
     */
    getScheme(): string;
    /**
     * Set Scheme
     * Scheme of the card, such as visa or mastercard
     * @param {string} val
     * @return {CardInformation}
     */
    setScheme(val: string): CardInformation;
    /**
     * Get Type
     * Type of the card (Credit, Debit, ...)
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Type of the card (Credit, Debit, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    setType(val: string): CardInformation;
    /**
     * Get BankName
     * Name of the bank of the card
     * @return {string}
     */
    getBankName(): string;
    /**
     * Set BankName
     * Name of the bank of the card
     * @param {string} val
     * @return {CardInformation}
     */
    setBankName(val: string): CardInformation;
    /**
     * Get Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @return {string}
     */
    getBrand(): string;
    /**
     * Set Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    setBrand(val: string): CardInformation;
    /**
     * Get Category
     * Category of the card (consumer, commercial, ...)
     * @return {string}
     */
    getCategory(): string;
    /**
     * Set Category
     * Category of the card (consumer, commercial, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    setCategory(val: string): CardInformation;
    /**
     * Get Country
     * Country that issued the card
     * @return {string}
     */
    getCountry(): string;
    /**
     * Set Country
     * Country that issued the card
     * @param {string} val
     * @return {CardInformation}
     */
    setCountry(val: string): CardInformation;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardInformation}
     */
    fillWithData(data: any): CardInformation;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Fetch card information from the IIN.
     * @param string iin
     * @param {any} options
     * @return {Promise<any>}
     */
    fetch(iin: string, options: any): Promise<any>;
}
export = CardInformation;
//# sourceMappingURL=cardinformation.d.ts.map