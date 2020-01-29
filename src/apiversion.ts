// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class APIVersion {
    private client: ProcessOut = null;

    /**
     * Name used to identify the API version
     * @type {string}
     */
    private name: string = null;

    /**
     * Description of the API version. Can contain a changelog
     * @type {string}
     */
    private description: string = null;

    /**
     * Date at which the API version was released
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * APIVersion constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: APIVersion) {
        if (typeof client === 'undefined')
            throw new Error("The APIVersion object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAPIVersion()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "APIVersion";
    }

    /**
     * Get Name
     * Name used to identify the API version
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name used to identify the API version
     * @param {string} val
     * @return {APIVersion}
     */
    public setName(val: string): APIVersion {
        this.name = val;
        return this;
    }

    /**
     * Get Description
     * Description of the API version. Can contain a changelog
     * @return {string}
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * Set Description
     * Description of the API version. Can contain a changelog
     * @param {string} val
     * @return {APIVersion}
     */
    public setDescription(val: string): APIVersion {
        this.description = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the API version was released
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the API version was released
     * @param {string} val
     * @return {APIVersion}
     */
    public setCreatedAt(val: string): APIVersion {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APIVersion}
     */
    public fillWithData(data: any): APIVersion {
        if (data["name"])
            this.setName(data["name"]);
        if (data["description"])
            this.setDescription(data["description"]);
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
            "name": this.getName(),
            "description": this.getDescription(),
            "created_at": this.getCreatedAt(),
        };
    }

    
}
export = APIVersion;
