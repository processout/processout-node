import ProcessOut = require('./processout');
import * as p from '.';
declare class WebhookEndpoint {
    private client;
    /**
     * ID of the webhook endpoint
     * @type {string}
     */
    private id;
    /**
     * Project to which the webhook endpoint belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the webhook belongs
     * @type {string}
     */
    private projectId;
    /**
     * URL to which the webhook endpoint points to
     * @type {string}
     */
    private url;
    /**
     * Slice of string representing the whitelisted events posted to the endpoint
     * @type {any}
     */
    private eventsWhitelist;
    /**
     * Define whether or not the webhook endpoint is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the webhook endpoint was created
     * @type {string}
     */
    private createdAt;
    /**
     * WebhookEndpoint constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: WebhookEndpoint);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the webhook endpoint
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the webhook endpoint
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    setId(val: string): WebhookEndpoint;
    /**
     * Get Project
     * Project to which the webhook endpoint belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the webhook endpoint belongs
     * @param {p.Project} val
     * @return {WebhookEndpoint}
     */
    setProject(val: p.Project): WebhookEndpoint;
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
     * @return {WebhookEndpoint}
     */
    setProjectId(val: string): WebhookEndpoint;
    /**
     * Get Url
     * URL to which the webhook endpoint points to
     * @return {string}
     */
    getUrl(): string;
    /**
     * Set Url
     * URL to which the webhook endpoint points to
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    setUrl(val: string): WebhookEndpoint;
    /**
     * Get EventsWhitelist
     * Slice of string representing the whitelisted events posted to the endpoint
     * @return {any}
     */
    getEventsWhitelist(): any;
    /**
     * Set EventsWhitelist
     * Slice of string representing the whitelisted events posted to the endpoint
     * @param {any} val
     * @return {WebhookEndpoint}
     */
    setEventsWhitelist(val: any): WebhookEndpoint;
    /**
     * Get Sandbox
     * Define whether or not the webhook endpoint is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the webhook endpoint is in sandbox environment
     * @param {boolean} val
     * @return {WebhookEndpoint}
     */
    setSandbox(val: boolean): WebhookEndpoint;
    /**
     * Get CreatedAt
     * Date at which the webhook endpoint was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the webhook endpoint was created
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    setCreatedAt(val: string): WebhookEndpoint;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {WebhookEndpoint}
     */
    fillWithData(data: any): WebhookEndpoint;
}
export = WebhookEndpoint;
//# sourceMappingURL=webhookendpoint.d.ts.map