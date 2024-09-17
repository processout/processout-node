// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExportLayout {
    private client: ProcessOut = null;

    /**
     * ID of the export layout
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the export layout belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the export layout belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Date at which the export layout was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Name of the export layout.
     * @type {string}
     */
    private name: string = null;

    /**
     * Type of the export layout.
     * @type {string}
     */
    private type: string = null;

    /**
     * Whether the export layout is the default one for the project. It will be used for automatic exports.
     * @type {boolean}
     */
    private isDefault: boolean = null;

    /**
     * Configuration of the export layout.
     * @type {p.ExportLayoutConfiguration}
     */
    private configuration: p.ExportLayoutConfiguration = null;

    /**
     * ExportLayout constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayout) {
        if (typeof client === 'undefined')
            throw new Error("The ExportLayout object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayout()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExportLayout";
    }

    /**
     * Get Id
     * ID of the export layout
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the export layout
     * @param {string} val
     * @return {ExportLayout}
     */
    public setId(val: string): ExportLayout {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the export layout belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the export layout belongs
     * @param {p.Project} val
     * @return {ExportLayout}
     */
    public setProject(val: p.Project): ExportLayout {
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
     * ID of the project to which the export layout belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the export layout belongs
     * @param {string} val
     * @return {ExportLayout}
     */
    public setProjectId(val: string): ExportLayout {
        this.projectId = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the export layout was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the export layout was created
     * @param {string} val
     * @return {ExportLayout}
     */
    public setCreatedAt(val: string): ExportLayout {
        this.createdAt = val;
        return this;
    }

    /**
     * Get Name
     * Name of the export layout.
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the export layout.
     * @param {string} val
     * @return {ExportLayout}
     */
    public setName(val: string): ExportLayout {
        this.name = val;
        return this;
    }

    /**
     * Get Type
     * Type of the export layout.
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * Type of the export layout.
     * @param {string} val
     * @return {ExportLayout}
     */
    public setType(val: string): ExportLayout {
        this.type = val;
        return this;
    }

    /**
     * Get IsDefault
     * Whether the export layout is the default one for the project. It will be used for automatic exports.
     * @return {boolean}
     */
    public getIsDefault(): boolean {
        return this.isDefault;
    }

    /**
     * Set IsDefault
     * Whether the export layout is the default one for the project. It will be used for automatic exports.
     * @param {boolean} val
     * @return {ExportLayout}
     */
    public setIsDefault(val: boolean): ExportLayout {
        this.isDefault = val;
        return this;
    }

    /**
     * Get Configuration
     * Configuration of the export layout.
     * @return {p.ExportLayoutConfiguration}
     */
    public getConfiguration(): p.ExportLayoutConfiguration {
        return this.configuration;
    }

    /**
     * Set Configuration
     * Configuration of the export layout.
     * @param {p.ExportLayoutConfiguration} val
     * @return {ExportLayout}
     */
    public setConfiguration(val: p.ExportLayoutConfiguration): ExportLayout {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfiguration().getProcessOutObjectClass())
            this.configuration = val;
        else {
            var obj = this.client.newExportLayoutConfiguration();
            obj.fillWithData(val);
            this.configuration = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayout}
     */
    public fillWithData(data: any): ExportLayout {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["is_default"])
            this.setIsDefault(data["is_default"]);
        if (data["configuration"])
            this.setConfiguration(data["configuration"]);
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
            "created_at": this.getCreatedAt(),
            "name": this.getName(),
            "type": this.getType(),
            "is_default": this.getIsDefault(),
            "configuration": this.getConfiguration(),
        };
    }

    /**
     * Get all the export layouts.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/exports/layouts";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['export_layouts'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newExportLayout();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find an export layout by its ID.
	 * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(exportLayoutId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/exports/layouts/" + encodeURI(exportLayoutId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['export_layout'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find the default export layout for given export type.
	 * @param string exportType
     * @param {any} options
     * @return {Promise<any>}
     */
    public findDefault(exportType: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/exports/layouts/default/" + encodeURI(exportType) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['export_layout'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Create a new export layout.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/exports/layouts";

        var data = {
			'name': this.getName(), 
			'type': this.getType(), 
			'is_default': this.getIsDefault(), 
			'configuration': this.getConfiguration()
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['export_layout'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.post(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Update the export layout.
	 * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<any>}
     */
    public update(exportLayoutId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/exports/layouts/" + encodeURI(exportLayoutId) + "";

        var data = {
			'name': this.getName(), 
			'is_default': this.getIsDefault(), 
			'configuration': this.getConfiguration()
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['export_layout'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.put(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Delete the export layout.
	 * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    public delete(exportLayoutId: string, options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/exports/layouts/" + encodeURI(exportLayoutId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.delete(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = ExportLayout;
