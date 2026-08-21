import ProcessOut = require('./processout');
declare class Submerchant {
    private client;
    /**
     * ID of the submerchant at ProcessOut
     * @type {string}
     */
    private id;
    /**
     * Legal name of the submerchant
     * @type {string}
     */
    private name;
    /**
     * Time at which the submerchant was created
     * @type {string}
     */
    private createdAt;
    /**
     * Submerchant constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Submerchant);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the submerchant at ProcessOut
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the submerchant at ProcessOut
     * @param {string} val
     * @return {Submerchant}
     */
    setId(val: string): Submerchant;
    /**
     * Get Name
     * Legal name of the submerchant
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Legal name of the submerchant
     * @param {string} val
     * @return {Submerchant}
     */
    setName(val: string): Submerchant;
    /**
     * Get CreatedAt
     * Time at which the submerchant was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Time at which the submerchant was created
     * @param {string} val
     * @return {Submerchant}
     */
    setCreatedAt(val: string): Submerchant;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Submerchant}
     */
    fillWithData(data: any): Submerchant;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = Submerchant;
//# sourceMappingURL=submerchant.d.ts.map