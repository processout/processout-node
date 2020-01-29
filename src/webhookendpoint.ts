// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class WebhookEndpoint {
    private client: ProcessOut = null;

    /**
     * ID of the webhook endpoint
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the webhook endpoint belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the webhook belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * URL to which the webhook endpoint points to
     * @type {string}
     */
    private url: string = null;

    /**
     * Slice of string representing the whitelisted events posted to the endpoint
     * @type {any}
     */
    private eventsWhitelist: any = null;

    /**
     * Define whether or not the webhook endpoint is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the webhook endpoint was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * WebhookEndpoint constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: WebhookEndpoint) {
        if (typeof client === 'undefined')
            throw new Error("The WebhookEndpoint object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newWebhookEndpoint()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "WebhookEndpoint";
    }

    /**
     * Get Id
     * ID of the webhook endpoint
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the webhook endpoint
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    public setId(val: string): WebhookEndpoint {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the webhook endpoint belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the webhook endpoint belongs
     * @param {p.Project} val
     * @return {WebhookEndpoint}
     */
    public setProject(val: p.Project): WebhookEndpoint {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    }

    /**
     * Get ProjectId
     * ID of the project to which the webhook belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the webhook belongs
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    public setProjectId(val: string): WebhookEndpoint {
        this.projectId = val;
        return this;
    }

    /**
     * Get Url
     * URL to which the webhook endpoint points to
     * @return {string}
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     * Set Url
     * URL to which the webhook endpoint points to
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    public setUrl(val: string): WebhookEndpoint {
        this.url = val;
        return this;
    }

    /**
     * Get EventsWhitelist
     * Slice of string representing the whitelisted events posted to the endpoint
     * @return {any}
     */
    public getEventsWhitelist(): any {
        return this.eventsWhitelist;
    }

    /**
     * Set EventsWhitelist
     * Slice of string representing the whitelisted events posted to the endpoint
     * @param {any} val
     * @return {WebhookEndpoint}
     */
    public setEventsWhitelist(val: any): WebhookEndpoint {
        this.eventsWhitelist = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the webhook endpoint is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the webhook endpoint is in sandbox environment
     * @param {boolean} val
     * @return {WebhookEndpoint}
     */
    public setSandbox(val: boolean): WebhookEndpoint {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the webhook endpoint was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the webhook endpoint was created
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    public setCreatedAt(val: string): WebhookEndpoint {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {WebhookEndpoint}
     */
    public fillWithData(data: any): WebhookEndpoint {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["events_whitelist"])
            this.setEventsWhitelist(data["events_whitelist"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "url": this.getUrl(),
            "events_whitelist": this.getEventsWhitelist(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    }

    
}
export = WebhookEndpoint;
