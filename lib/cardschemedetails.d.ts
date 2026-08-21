import ProcessOut = require('./processout');
declare class CardSchemeDetails {
    private client;
    /**
     * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
     * @type {string}
     */
    private transactionId;
    /**
     * Transaction Link Identifier for Mastercard transaction chaining
     * @type {string}
     */
    private transactionLinkId;
    /**
     * CardSchemeDetails constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardSchemeDetails);
    getProcessOutObjectClass(): string;
    /**
     * Get TransactionId
     * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
     * @return {string}
     */
    getTransactionId(): string;
    /**
     * Set TransactionId
     * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
     * @param {string} val
     * @return {CardSchemeDetails}
     */
    setTransactionId(val: string): CardSchemeDetails;
    /**
     * Get TransactionLinkId
     * Transaction Link Identifier for Mastercard transaction chaining
     * @return {string}
     */
    getTransactionLinkId(): string;
    /**
     * Set TransactionLinkId
     * Transaction Link Identifier for Mastercard transaction chaining
     * @param {string} val
     * @return {CardSchemeDetails}
     */
    setTransactionLinkId(val: string): CardSchemeDetails;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardSchemeDetails}
     */
    fillWithData(data: any): CardSchemeDetails;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = CardSchemeDetails;
//# sourceMappingURL=cardschemedetails.d.ts.map