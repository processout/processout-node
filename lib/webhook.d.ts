import ProcessOut = require("./processout");
declare class Webhook {
    private client;
    /**
     * ID of the webhook
     * @type {string}
     */
    private id;
    /**
     * Project to which the webhook belongs
     * @type {any}
     */
    private project;
    /**
     * ID of the project to which the webhook belongs
     * @type {string}
     */
    private projectId;
    /**
     * Event the webhook is linked to
     * @type {any}
     */
    private event;
    /**
     * ID of the event the webhook is linked to
     * @type {string}
     */
    private eventId;
    /**
     * URL to which the webhook will be posted
     * @type {string}
     */
    private requestUrl;
    /**
     * Method used to send the webhook (GET or POST)
     * @type {string}
     */
    private requestMethod;
    /**
     * The response body the webhook received when sending its payload
     * @type {string}
     */
    private responseBody;
    /**
     * The response code the webhook received when sending its payload
     * @type {string}
     */
    private responseCode;
    /**
     * The response headers the webhook received when sending its payload
     * @type {string}
     */
    private responseHeaders;
    /**
     * The time it took for the webhook to send its payload
     * @type {number}
     */
    private responseTimeMs;
    /**
     * The status of the webhook. Either delivered or failed
     * @type {string}
     */
    private status;
    /**
     * Date at which the webhook was created
     * @type {string}
     */
    private createdAt;
    /**
     * Date at webhook will be/is released
     * @type {string}
     */
    private releaseAt;
    /**
     * Webhook constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Webhook);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the webhook
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the webhook
     * @param {string} val
     * @return {Webhook}
     */
    setId(val: string): Webhook;
    /**
     * Get Project
     * Project to which the webhook belongs
     * @return {any}
     */
    getProject(): any;
    /**
     * Set Project
     * Project to which the webhook belongs
     * @param {any} val
     * @return {Webhook}
     */
    setProject(val: any): Webhook;
    /**
     * Get ProjectId
     * ID of the project to which the webhook belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the webhook belongs
     * @param {string} val
     * @return {Webhook}
     */
    setProjectId(val: string): Webhook;
    /**
     * Get Event
     * Event the webhook is linked to
     * @return {any}
     */
    getEvent(): any;
    /**
     * Set Event
     * Event the webhook is linked to
     * @param {any} val
     * @return {Webhook}
     */
    setEvent(val: any): Webhook;
    /**
     * Get EventId
     * ID of the event the webhook is linked to
     * @return {string}
     */
    getEventId(): string;
    /**
     * Set EventId
     * ID of the event the webhook is linked to
     * @param {string} val
     * @return {Webhook}
     */
    setEventId(val: string): Webhook;
    /**
     * Get RequestUrl
     * URL to which the webhook will be posted
     * @return {string}
     */
    getRequestUrl(): string;
    /**
     * Set RequestUrl
     * URL to which the webhook will be posted
     * @param {string} val
     * @return {Webhook}
     */
    setRequestUrl(val: string): Webhook;
    /**
     * Get RequestMethod
     * Method used to send the webhook (GET or POST)
     * @return {string}
     */
    getRequestMethod(): string;
    /**
     * Set RequestMethod
     * Method used to send the webhook (GET or POST)
     * @param {string} val
     * @return {Webhook}
     */
    setRequestMethod(val: string): Webhook;
    /**
     * Get ResponseBody
     * The response body the webhook received when sending its payload
     * @return {string}
     */
    getResponseBody(): string;
    /**
     * Set ResponseBody
     * The response body the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    setResponseBody(val: string): Webhook;
    /**
     * Get ResponseCode
     * The response code the webhook received when sending its payload
     * @return {string}
     */
    getResponseCode(): string;
    /**
     * Set ResponseCode
     * The response code the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    setResponseCode(val: string): Webhook;
    /**
     * Get ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @return {string}
     */
    getResponseHeaders(): string;
    /**
     * Set ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    setResponseHeaders(val: string): Webhook;
    /**
     * Get ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @return {number}
     */
    getResponseTimeMs(): number;
    /**
     * Set ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @param {number} val
     * @return {Webhook}
     */
    setResponseTimeMs(val: number): Webhook;
    /**
     * Get Status
     * The status of the webhook. Either delivered or failed
     * @return {string}
     */
    getStatus(): string;
    /**
     * Set Status
     * The status of the webhook. Either delivered or failed
     * @param {string} val
     * @return {Webhook}
     */
    setStatus(val: string): Webhook;
    /**
     * Get CreatedAt
     * Date at which the webhook was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the webhook was created
     * @param {string} val
     * @return {Webhook}
     */
    setCreatedAt(val: string): Webhook;
    /**
     * Get ReleaseAt
     * Date at webhook will be/is released
     * @return {string}
     */
    getReleaseAt(): string;
    /**
     * Set ReleaseAt
     * Date at webhook will be/is released
     * @param {string} val
     * @return {Webhook}
     */
    setReleaseAt(val: string): Webhook;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Webhook}
     */
    fillWithData(data: any): Webhook;
}
export = Webhook;
//# sourceMappingURL=webhook.d.ts.map