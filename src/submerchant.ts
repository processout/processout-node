// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Submerchant {
    private client: ProcessOut = null;

    /**
     * ID of the submerchant at ProcessOut
     * @type {string}
     */
    private id: string = null;

    /**
     * Legal name of the submerchant
     * @type {string}
     */
    private name: string = null;

    /**
     * Time at which the submerchant was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Submerchant constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Submerchant) {
        if (typeof client === 'undefined')
            throw new Error("The Submerchant object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubmerchant()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Submerchant";
    }

    /**
     * Get Id
     * ID of the submerchant at ProcessOut
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the submerchant at ProcessOut
     * @param {string} val
     * @return {Submerchant}
     */
    public setId(val: string): Submerchant {
        this.id = val;
        return this;
    }

    /**
     * Get Name
     * Legal name of the submerchant
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Legal name of the submerchant
     * @param {string} val
     * @return {Submerchant}
     */
    public setName(val: string): Submerchant {
        this.name = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Time at which the submerchant was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Time at which the submerchant was created
     * @param {string} val
     * @return {Submerchant}
     */
    public setCreatedAt(val: string): Submerchant {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Submerchant}
     */
    public fillWithData(data: any): Submerchant {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
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
            "name": this.getName(),
            "created_at": this.getCreatedAt(),
        };
    }

    
}
export = Submerchant;
