import ProcessOut = require('./processout');
import * as p from '.';
declare class CardCreateRequest {
    private client;
    /**
     * Device used to create the card
     * @type {p.Device}
     */
    private device;
    /**
     * Cardholder name
     * @type {string}
     */
    private name;
    /**
     * Card PAN (raw)
     * @type {string}
     */
    private number;
    /**
     * Card expiration day. Used for Apple Pay
     * @type {string}
     */
    private expDay;
    /**
     * Card expiration month
     * @type {string}
     */
    private expMonth;
    /**
     * Card expiration year
     * @type {string}
     */
    private expYear;
    /**
     * CVC2
     * @type {string}
     */
    private cvc2;
    /**
     * Preferred card scheme
     * @type {string}
     */
    private preferredScheme;
    /**
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
     * @type {string}
     */
    private tokenType;
    /**
     * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private eci;
    /**
     * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private cryptogram;
    /**
     * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private applepayResponse;
    /**
     * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private applepayMid;
    /**
     * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private paymentToken;
    /**
     * Cardholder contact information
     * @type {p.CardContact}
     */
    private contact;
    /**
     * Cardholder shipping information
     * @type {p.CardShipping}
     */
    private shipping;
    /**
     * CardCreateRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardCreateRequest);
    getProcessOutObjectClass(): string;
    /**
     * Get Device
     * Device used to create the card
     * @return {p.Device}
     */
    getDevice(): p.Device;
    /**
     * Set Device
     * Device used to create the card
     * @param {p.Device} val
     * @return {CardCreateRequest}
     */
    setDevice(val: p.Device): CardCreateRequest;
    /**
     * Get Name
     * Cardholder name
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Cardholder name
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setName(val: string): CardCreateRequest;
    /**
     * Get Number
     * Card PAN (raw)
     * @return {string}
     */
    getNumber(): string;
    /**
     * Set Number
     * Card PAN (raw)
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setNumber(val: string): CardCreateRequest;
    /**
     * Get ExpDay
     * Card expiration day. Used for Apple Pay
     * @return {string}
     */
    getExpDay(): string;
    /**
     * Set ExpDay
     * Card expiration day. Used for Apple Pay
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setExpDay(val: string): CardCreateRequest;
    /**
     * Get ExpMonth
     * Card expiration month
     * @return {string}
     */
    getExpMonth(): string;
    /**
     * Set ExpMonth
     * Card expiration month
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setExpMonth(val: string): CardCreateRequest;
    /**
     * Get ExpYear
     * Card expiration year
     * @return {string}
     */
    getExpYear(): string;
    /**
     * Set ExpYear
     * Card expiration year
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setExpYear(val: string): CardCreateRequest;
    /**
     * Get Cvc2
     * CVC2
     * @return {string}
     */
    getCvc2(): string;
    /**
     * Set Cvc2
     * CVC2
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setCvc2(val: string): CardCreateRequest;
    /**
     * Get PreferredScheme
     * Preferred card scheme
     * @return {string}
     */
    getPreferredScheme(): string;
    /**
     * Set PreferredScheme
     * Preferred card scheme
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setPreferredScheme(val: string): CardCreateRequest;
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
     * @return {CardCreateRequest}
     */
    setMetadata(val: any): CardCreateRequest;
    /**
     * Get TokenType
     * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
     * @return {string}
     */
    getTokenType(): string;
    /**
     * Set TokenType
     * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setTokenType(val: string): CardCreateRequest;
    /**
     * Get Eci
     * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    getEci(): string;
    /**
     * Set Eci
     * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setEci(val: string): CardCreateRequest;
    /**
     * Get Cryptogram
     * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    getCryptogram(): string;
    /**
     * Set Cryptogram
     * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setCryptogram(val: string): CardCreateRequest;
    /**
     * Get ApplepayResponse
     * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    getApplepayResponse(): string;
    /**
     * Set ApplepayResponse
     * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setApplepayResponse(val: string): CardCreateRequest;
    /**
     * Get ApplepayMid
     * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    getApplepayMid(): string;
    /**
     * Set ApplepayMid
     * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setApplepayMid(val: string): CardCreateRequest;
    /**
     * Get PaymentToken
     * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    getPaymentToken(): string;
    /**
     * Set PaymentToken
     * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    setPaymentToken(val: string): CardCreateRequest;
    /**
     * Get Contact
     * Cardholder contact information
     * @return {p.CardContact}
     */
    getContact(): p.CardContact;
    /**
     * Set Contact
     * Cardholder contact information
     * @param {p.CardContact} val
     * @return {CardCreateRequest}
     */
    setContact(val: p.CardContact): CardCreateRequest;
    /**
     * Get Shipping
     * Cardholder shipping information
     * @return {p.CardShipping}
     */
    getShipping(): p.CardShipping;
    /**
     * Set Shipping
     * Cardholder shipping information
     * @param {p.CardShipping} val
     * @return {CardCreateRequest}
     */
    setShipping(val: p.CardShipping): CardCreateRequest;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardCreateRequest}
     */
    fillWithData(data: any): CardCreateRequest;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Create a new card.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    create(options: any): Promise<any>;
}
export = CardCreateRequest;
//# sourceMappingURL=cardcreaterequest.d.ts.map