import ProcessOut = require('./processout');
declare class CardUpdateRequest {
    private client;
    /**
     * Card update type. Possible values: "new-cvc2" or "other"
     * @type {string}
     */
    private updateType;
    /**
     * Card update reason.
     * @type {string}
     */
    private updateReason;
    /**
     * Customer preferred scheme, such as carte bancaire vs visa
     * @type {string}
     */
    private preferredScheme;
    /**
     * CardUpdateRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardUpdateRequest);
    getProcessOutObjectClass(): string;
    /**
     * Get UpdateType
     * Card update type. Possible values: "new-cvc2" or "other"
     * @return {string}
     */
    getUpdateType(): string;
    /**
     * Set UpdateType
     * Card update type. Possible values: "new-cvc2" or "other"
     * @param {string} val
     * @return {CardUpdateRequest}
     */
    setUpdateType(val: string): CardUpdateRequest;
    /**
     * Get UpdateReason
     * Card update reason.
     * @return {string}
     */
    getUpdateReason(): string;
    /**
     * Set UpdateReason
     * Card update reason.
     * @param {string} val
     * @return {CardUpdateRequest}
     */
    setUpdateReason(val: string): CardUpdateRequest;
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
     * @return {CardUpdateRequest}
     */
    setPreferredScheme(val: string): CardUpdateRequest;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardUpdateRequest}
     */
    fillWithData(data: any): CardUpdateRequest;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Update a card by its ID.
     * @param string cardId
     * @param {any} options
     * @return {Promise<any>}
     */
    update(cardId: string, options: any): Promise<any>;
}
export = CardUpdateRequest;
//# sourceMappingURL=cardupdaterequest.d.ts.map