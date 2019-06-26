import Promise = require("promise");
import ProcessOut = require("./processout");
declare class Card {
    private client;
    /**
     * ID of the card
     * @type {string}
     */
    private id;
    /**
     * Project to which the card belongs
     * @type {any}
     */
    private project;
    /**
     * ID of the project to which the card belongs
     * @type {string}
     */
    private projectId;
    /**
     * Token linked to the card, which can be used to process payments
     * @type {any}
     */
    private token;
    /**
     * Scheme of the card, such as visa or mastercard
     * @type {string}
     */
    private scheme;
    /**
     * Co-scheme of the card, such as carte bancaire
     * @type {string}
     */
    private coScheme;
    /**
     * Customer preferred scheme, such as carte bancaire vs visa
     * @type {string}
     */
    private preferredScheme;
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
     * First 6 digits of the card
     * @type {string}
     */
    private iin;
    /**
     * Last 4 digits of the card
     * @type {string}
     */
    private last4Digits;
    /**
     * Expiry month
     * @type {number}
     */
    private expMonth;
    /**
     * Expiry year, in a 4 digits format
     * @type {number}
     */
    private expYear;
    /**
     * Status of the CVC check initially made on the card when the CVC was provided
     * @type {string}
     */
    private cvcCheck;
    /**
     * Status of the AVS check initially made on the card when the AVS was provided
     * @type {string}
     */
    private avsCheck;
    /**
     * Name of the card holder
     * @type {string}
     */
    private name;
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
     * ZIP code of the card holder
     * @type {string}
     */
    private zip;
    /**
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @type {string}
     */
    private countryCode;
    /**
     * IP address of the card (IPv4 or IPv6)
     * @type {string}
     */
    private ipAddress;
    /**
     * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
     * @type {string}
     */
    private fingerprint;
    /**
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Contains true if the card will expire soon, false otherwise
     * @type {boolean}
     */
    private expiresSoon;
    /**
     * Define whether or not the card is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the card was created
     * @type {string}
     */
    private createdAt;
    /**
     * Card constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Card);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the card
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the card
     * @param {string} val
     * @return {Card}
     */
    setId(val: string): Card;
    /**
     * Get Project
     * Project to which the card belongs
     * @return {any}
     */
    getProject(): any;
    /**
     * Set Project
     * Project to which the card belongs
     * @param {any} val
     * @return {Card}
     */
    setProject(val: any): Card;
    /**
     * Get ProjectId
     * ID of the project to which the card belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the card belongs
     * @param {string} val
     * @return {Card}
     */
    setProjectId(val: string): Card;
    /**
     * Get Token
     * Token linked to the card, which can be used to process payments
     * @return {any}
     */
    getToken(): any;
    /**
     * Set Token
     * Token linked to the card, which can be used to process payments
     * @param {any} val
     * @return {Card}
     */
    setToken(val: any): Card;
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
     * @return {Card}
     */
    setScheme(val: string): Card;
    /**
     * Get CoScheme
     * Co-scheme of the card, such as carte bancaire
     * @return {string}
     */
    getCoScheme(): string;
    /**
     * Set CoScheme
     * Co-scheme of the card, such as carte bancaire
     * @param {string} val
     * @return {Card}
     */
    setCoScheme(val: string): Card;
    /**
     * Get PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa
     * @return {string}
     */
    getPreferredScheme(): string;
    /**
     * Set PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa
     * @param {string} val
     * @return {Card}
     */
    setPreferredScheme(val: string): Card;
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
     * @return {Card}
     */
    setType(val: string): Card;
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
     * @return {Card}
     */
    setBankName(val: string): Card;
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
     * @return {Card}
     */
    setBrand(val: string): Card;
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
     * @return {Card}
     */
    setIin(val: string): Card;
    /**
     * Get Last4Digits
     * Last 4 digits of the card
     * @return {string}
     */
    getLast4Digits(): string;
    /**
     * Set Last4Digits
     * Last 4 digits of the card
     * @param {string} val
     * @return {Card}
     */
    setLast4Digits(val: string): Card;
    /**
     * Get ExpMonth
     * Expiry month
     * @return {number}
     */
    getExpMonth(): number;
    /**
     * Set ExpMonth
     * Expiry month
     * @param {number} val
     * @return {Card}
     */
    setExpMonth(val: number): Card;
    /**
     * Get ExpYear
     * Expiry year, in a 4 digits format
     * @return {number}
     */
    getExpYear(): number;
    /**
     * Set ExpYear
     * Expiry year, in a 4 digits format
     * @param {number} val
     * @return {Card}
     */
    setExpYear(val: number): Card;
    /**
     * Get CvcCheck
     * Status of the CVC check initially made on the card when the CVC was provided
     * @return {string}
     */
    getCvcCheck(): string;
    /**
     * Set CvcCheck
     * Status of the CVC check initially made on the card when the CVC was provided
     * @param {string} val
     * @return {Card}
     */
    setCvcCheck(val: string): Card;
    /**
     * Get AvsCheck
     * Status of the AVS check initially made on the card when the AVS was provided
     * @return {string}
     */
    getAvsCheck(): string;
    /**
     * Set AvsCheck
     * Status of the AVS check initially made on the card when the AVS was provided
     * @param {string} val
     * @return {Card}
     */
    setAvsCheck(val: string): Card;
    /**
     * Get Name
     * Name of the card holder
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the card holder
     * @param {string} val
     * @return {Card}
     */
    setName(val: string): Card;
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
     * @return {Card}
     */
    setAddress1(val: string): Card;
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
     * @return {Card}
     */
    setAddress2(val: string): Card;
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
     * @return {Card}
     */
    setCity(val: string): Card;
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
     * @return {Card}
     */
    setState(val: string): Card;
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
     * @return {Card}
     */
    setZip(val: string): Card;
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
     * @return {Card}
     */
    setCountryCode(val: string): Card;
    /**
     * Get IpAddress
     * IP address of the card (IPv4 or IPv6)
     * @return {string}
     */
    getIpAddress(): string;
    /**
     * Set IpAddress
     * IP address of the card (IPv4 or IPv6)
     * @param {string} val
     * @return {Card}
     */
    setIpAddress(val: string): Card;
    /**
     * Get Fingerprint
     * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
     * @return {string}
     */
    getFingerprint(): string;
    /**
     * Set Fingerprint
     * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
     * @param {string} val
     * @return {Card}
     */
    setFingerprint(val: string): Card;
    /**
     * Get Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Card}
     */
    setMetadata(val: any): Card;
    /**
     * Get ExpiresSoon
     * Contains true if the card will expire soon, false otherwise
     * @return {boolean}
     */
    getExpiresSoon(): boolean;
    /**
     * Set ExpiresSoon
     * Contains true if the card will expire soon, false otherwise
     * @param {boolean} val
     * @return {Card}
     */
    setExpiresSoon(val: boolean): Card;
    /**
     * Get Sandbox
     * Define whether or not the card is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the card is in sandbox environment
     * @param {boolean} val
     * @return {Card}
     */
    setSandbox(val: boolean): Card;
    /**
     * Get CreatedAt
     * Date at which the card was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the card was created
     * @param {string} val
     * @return {Card}
     */
    setCreatedAt(val: string): Card;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Card}
     */
    fillWithData(data: any): Card;
    /**
     * Get all the cards.
     *
     * @param {any} options
     * @return {array}
     */
    all(options: any): Promise<any>;
    /**
     * Find a card by its ID.
     * @param string cardId
     * @param {any} options
     * @return {this}
     */
    find(cardId: any, options: any): Promise<any>;
}
export = Card;
//# sourceMappingURL=card.d.ts.map