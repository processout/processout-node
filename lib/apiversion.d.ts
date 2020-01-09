import ProcessOut = require('./processout');
declare class APIVersion {
    private client;
    /**
     * Name used to identify the API version
     * @type {string}
     */
    private name;
    /**
     * Description of the API version. Can contain a changelog
     * @type {string}
     */
    private description;
    /**
     * Date at which the API version was released
     * @type {string}
     */
    private createdAt;
    /**
     * APIVersion constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: APIVersion);
    getProcessOutObjectClass(): string;
    /**
     * Get Name
     * Name used to identify the API version
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name used to identify the API version
     * @param {string} val
     * @return {APIVersion}
     */
    setName(val: string): APIVersion;
    /**
     * Get Description
     * Description of the API version. Can contain a changelog
     * @return {string}
     */
    getDescription(): string;
    /**
     * Set Description
     * Description of the API version. Can contain a changelog
     * @param {string} val
     * @return {APIVersion}
     */
    setDescription(val: string): APIVersion;
    /**
     * Get CreatedAt
     * Date at which the API version was released
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the API version was released
     * @param {string} val
     * @return {APIVersion}
     */
    setCreatedAt(val: string): APIVersion;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APIVersion}
     */
    fillWithData(data: any): APIVersion;
}
export = APIVersion;
//# sourceMappingURL=apiversion.d.ts.map