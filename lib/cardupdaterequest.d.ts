import ProcessOut = require('./processout');
declare class CardUpdateRequest {
    private client;
    /**
     * Customer preferred scheme, such as carte bancaire vs visa. Can be set to none to clear the previous value
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
     * Get PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa. Can be set to none to clear the previous value
     * @return {string}
     */
    getPreferredScheme(): string;
    /**
     * Set PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa. Can be set to none to clear the previous value
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