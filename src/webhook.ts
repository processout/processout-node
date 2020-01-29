// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Webhook {
    private client: ProcessOut = null;

    /**
     * ID of the webhook
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the webhook belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the webhook belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Event the webhook is linked to
     * @type {p.Event}
     */
    private event: p.Event = null;

    /**
     * ID of the event the webhook is linked to
     * @type {string}
     */
    private eventId: string = null;

    /**
     * URL to which the webhook will be posted
     * @type {string}
     */
    private requestUrl: string = null;

    /**
     * Method used to send the webhook (GET or POST)
     * @type {string}
     */
    private requestMethod: string = null;

    /**
     * The response body the webhook received when sending its payload
     * @type {string}
     */
    private responseBody: string = null;

    /**
     * The response code the webhook received when sending its payload
     * @type {string}
     */
    private responseCode: string = null;

    /**
     * The response headers the webhook received when sending its payload
     * @type {string}
     */
    private responseHeaders: string = null;

    /**
     * The time it took for the webhook to send its payload
     * @type {number}
     */
    private responseTimeMs: number = null;

    /**
     * The status of the webhook. Either delivered or failed
     * @type {string}
     */
    private status: string = null;

    /**
     * Date at which the webhook was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Date at webhook will be/is released
     * @type {string}
     */
    private releaseAt: string = null;

    /**
     * Webhook constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Webhook) {
        if (typeof client === 'undefined')
            throw new Error("The Webhook object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newWebhook()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Webhook";
    }

    /**
     * Get Id
     * ID of the webhook
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the webhook
     * @param {string} val
     * @return {Webhook}
     */
    public setId(val: string): Webhook {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the webhook belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the webhook belongs
     * @param {p.Project} val
     * @return {Webhook}
     */
    public setProject(val: p.Project): Webhook {
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
     * @return {Webhook}
     */
    public setProjectId(val: string): Webhook {
        this.projectId = val;
        return this;
    }

    /**
     * Get Event
     * Event the webhook is linked to
     * @return {p.Event}
     */
    public getEvent(): p.Event {
        return this.event;
    }

    /**
     * Set Event
     * Event the webhook is linked to
     * @param {p.Event} val
     * @return {Webhook}
     */
    public setEvent(val: p.Event): Webhook {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newEvent().getProcessOutObjectClass())
            this.event = val;
        else {
            var obj = this.client.newEvent();
            obj.fillWithData(val);
            this.event = obj;
        }
        return this;
    }

    /**
     * Get EventId
     * ID of the event the webhook is linked to
     * @return {string}
     */
    public getEventId(): string {
        return this.eventId;
    }

    /**
     * Set EventId
     * ID of the event the webhook is linked to
     * @param {string} val
     * @return {Webhook}
     */
    public setEventId(val: string): Webhook {
        this.eventId = val;
        return this;
    }

    /**
     * Get RequestUrl
     * URL to which the webhook will be posted
     * @return {string}
     */
    public getRequestUrl(): string {
        return this.requestUrl;
    }

    /**
     * Set RequestUrl
     * URL to which the webhook will be posted
     * @param {string} val
     * @return {Webhook}
     */
    public setRequestUrl(val: string): Webhook {
        this.requestUrl = val;
        return this;
    }

    /**
     * Get RequestMethod
     * Method used to send the webhook (GET or POST)
     * @return {string}
     */
    public getRequestMethod(): string {
        return this.requestMethod;
    }

    /**
     * Set RequestMethod
     * Method used to send the webhook (GET or POST)
     * @param {string} val
     * @return {Webhook}
     */
    public setRequestMethod(val: string): Webhook {
        this.requestMethod = val;
        return this;
    }

    /**
     * Get ResponseBody
     * The response body the webhook received when sending its payload
     * @return {string}
     */
    public getResponseBody(): string {
        return this.responseBody;
    }

    /**
     * Set ResponseBody
     * The response body the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    public setResponseBody(val: string): Webhook {
        this.responseBody = val;
        return this;
    }

    /**
     * Get ResponseCode
     * The response code the webhook received when sending its payload
     * @return {string}
     */
    public getResponseCode(): string {
        return this.responseCode;
    }

    /**
     * Set ResponseCode
     * The response code the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    public setResponseCode(val: string): Webhook {
        this.responseCode = val;
        return this;
    }

    /**
     * Get ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @return {string}
     */
    public getResponseHeaders(): string {
        return this.responseHeaders;
    }

    /**
     * Set ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    public setResponseHeaders(val: string): Webhook {
        this.responseHeaders = val;
        return this;
    }

    /**
     * Get ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @return {number}
     */
    public getResponseTimeMs(): number {
        return this.responseTimeMs;
    }

    /**
     * Set ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @param {number} val
     * @return {Webhook}
     */
    public setResponseTimeMs(val: number): Webhook {
        this.responseTimeMs = val;
        return this;
    }

    /**
     * Get Status
     * The status of the webhook. Either delivered or failed
     * @return {string}
     */
    public getStatus(): string {
        return this.status;
    }

    /**
     * Set Status
     * The status of the webhook. Either delivered or failed
     * @param {string} val
     * @return {Webhook}
     */
    public setStatus(val: string): Webhook {
        this.status = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the webhook was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the webhook was created
     * @param {string} val
     * @return {Webhook}
     */
    public setCreatedAt(val: string): Webhook {
        this.createdAt = val;
        return this;
    }

    /**
     * Get ReleaseAt
     * Date at webhook will be/is released
     * @return {string}
     */
    public getReleaseAt(): string {
        return this.releaseAt;
    }

    /**
     * Set ReleaseAt
     * Date at webhook will be/is released
     * @param {string} val
     * @return {Webhook}
     */
    public setReleaseAt(val: string): Webhook {
        this.releaseAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Webhook}
     */
    public fillWithData(data: any): Webhook {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["event"])
            this.setEvent(data["event"]);
        if (data["event_id"])
            this.setEventId(data["event_id"]);
        if (data["request_url"])
            this.setRequestUrl(data["request_url"]);
        if (data["request_method"])
            this.setRequestMethod(data["request_method"]);
        if (data["response_body"])
            this.setResponseBody(data["response_body"]);
        if (data["response_code"])
            this.setResponseCode(data["response_code"]);
        if (data["response_headers"])
            this.setResponseHeaders(data["response_headers"]);
        if (data["response_time_ms"])
            this.setResponseTimeMs(data["response_time_ms"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["release_at"])
            this.setReleaseAt(data["release_at"]);
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
            "event": this.getEvent(),
            "event_id": this.getEventId(),
            "request_url": this.getRequestUrl(),
            "request_method": this.getRequestMethod(),
            "response_body": this.getResponseBody(),
            "response_code": this.getResponseCode(),
            "response_headers": this.getResponseHeaders(),
            "response_time_ms": this.getResponseTimeMs(),
            "status": this.getStatus(),
            "created_at": this.getCreatedAt(),
            "release_at": this.getReleaseAt(),
        };
    }

    
}
export = Webhook;
