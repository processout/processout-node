// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class GatewayConfiguration {
    private client: ProcessOut = null;

    /**
     * ID of the gateway configuration
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the gateway configuration belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the gateway configuration belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Gateway that the configuration configures
     * @type {p.Gateway}
     */
    private gateway: p.Gateway = null;

    /**
     * ID of the gateway to which the gateway configuration belongs
     * @type {number}
     */
    private gatewayId: number = null;

    /**
     * Name of the gateway configuration
     * @type {string}
     */
    private name: string = null;

    /**
     * Default currency of the gateway configuration
     * @type {string}
     */
    private defaultCurrency: string = null;

    /**
     * Define whether or not the gateway configuration is enabled
     * @type {boolean}
     */
    private enabled: boolean = null;

    /**
     * Public keys of the payment gateway configuration (key-value pair)
     * @type {any}
     */
    private publicKeys: any = null;

    /**
     * Date at which the gateway configuration was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Date at which the gateway configuration was enabled
     * @type {string}
     */
    private enabledAt: string = null;

    /**
     * Gateway's processing region (EEA, EEA-UK, UK etc)
     * @type {string}
     */
    private processingRegion: string = null;

    /**
     * Metadata related to the gateway configuration, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * GatewayConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: GatewayConfiguration) {
        if (typeof client === 'undefined')
            throw new Error("The GatewayConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newGatewayConfiguration()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "GatewayConfiguration";
    }

    /**
     * Get Id
     * ID of the gateway configuration
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    public setId(val: string): GatewayConfiguration {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the gateway configuration belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the gateway configuration belongs
     * @param {p.Project} val
     * @return {GatewayConfiguration}
     */
    public setProject(val: p.Project): GatewayConfiguration {
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
     * ID of the project to which the gateway configuration belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the gateway configuration belongs
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    public setProjectId(val: string): GatewayConfiguration {
        this.projectId = val;
        return this;
    }

    /**
     * Get Gateway
     * Gateway that the configuration configures
     * @return {p.Gateway}
     */
    public getGateway(): p.Gateway {
        return this.gateway;
    }

    /**
     * Set Gateway
     * Gateway that the configuration configures
     * @param {p.Gateway} val
     * @return {GatewayConfiguration}
     */
    public setGateway(val: p.Gateway): GatewayConfiguration {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newGateway().getProcessOutObjectClass())
            this.gateway = val;
        else {
            var obj = this.client.newGateway();
            obj.fillWithData(val);
            this.gateway = obj;
        }
        return this;
    }

    /**
     * Get GatewayId
     * ID of the gateway to which the gateway configuration belongs
     * @return {number}
     */
    public getGatewayId(): number {
        return this.gatewayId;
    }

    /**
     * Set GatewayId
     * ID of the gateway to which the gateway configuration belongs
     * @param {number} val
     * @return {GatewayConfiguration}
     */
    public setGatewayId(val: number): GatewayConfiguration {
        this.gatewayId = val;
        return this;
    }

    /**
     * Get Name
     * Name of the gateway configuration
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    public setName(val: string): GatewayConfiguration {
        this.name = val;
        return this;
    }

    /**
     * Get DefaultCurrency
     * Default currency of the gateway configuration
     * @return {string}
     */
    public getDefaultCurrency(): string {
        return this.defaultCurrency;
    }

    /**
     * Set DefaultCurrency
     * Default currency of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    public setDefaultCurrency(val: string): GatewayConfiguration {
        this.defaultCurrency = val;
        return this;
    }

    /**
     * Get Enabled
     * Define whether or not the gateway configuration is enabled
     * @return {boolean}
     */
    public getEnabled(): boolean {
        return this.enabled;
    }

    /**
     * Set Enabled
     * Define whether or not the gateway configuration is enabled
     * @param {boolean} val
     * @return {GatewayConfiguration}
     */
    public setEnabled(val: boolean): GatewayConfiguration {
        this.enabled = val;
        return this;
    }

    /**
     * Get PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @return {any}
     */
    public getPublicKeys(): any {
        return this.publicKeys;
    }

    /**
     * Set PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @param {any} val
     * @return {GatewayConfiguration}
     */
    public setPublicKeys(val: any): GatewayConfiguration {
        this.publicKeys = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the gateway configuration was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the gateway configuration was created
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    public setCreatedAt(val: string): GatewayConfiguration {
        this.createdAt = val;
        return this;
    }

    /**
     * Get EnabledAt
     * Date at which the gateway configuration was enabled
     * @return {string}
     */
    public getEnabledAt(): string {
        return this.enabledAt;
    }

    /**
     * Set EnabledAt
     * Date at which the gateway configuration was enabled
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    public setEnabledAt(val: string): GatewayConfiguration {
        this.enabledAt = val;
        return this;
    }

    /**
     * Get ProcessingRegion
     * Gateway's processing region (EEA, EEA-UK, UK etc)
     * @return {string}
     */
    public getProcessingRegion(): string {
        return this.processingRegion;
    }

    /**
     * Set ProcessingRegion
     * Gateway's processing region (EEA, EEA-UK, UK etc)
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    public setProcessingRegion(val: string): GatewayConfiguration {
        this.processingRegion = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the gateway configuration, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the gateway configuration, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {GatewayConfiguration}
     */
    public setMetadata(val: any): GatewayConfiguration {
        this.metadata = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {GatewayConfiguration}
     */
    public fillWithData(data: any): GatewayConfiguration {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["gateway_id"])
            this.setGatewayId(data["gateway_id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["default_currency"])
            this.setDefaultCurrency(data["default_currency"]);
        if (data["enabled"])
            this.setEnabled(data["enabled"]);
        if (data["public_keys"])
            this.setPublicKeys(data["public_keys"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["enabled_at"])
            this.setEnabledAt(data["enabled_at"]);
        if (data["processing_region"])
            this.setProcessingRegion(data["processing_region"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
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
            "gateway": this.getGateway(),
            "gateway_id": this.getGatewayId(),
            "name": this.getName(),
            "default_currency": this.getDefaultCurrency(),
            "enabled": this.getEnabled(),
            "public_keys": this.getPublicKeys(),
            "created_at": this.getCreatedAt(),
            "enabled_at": this.getEnabledAt(),
            "processing_region": this.getProcessingRegion(),
            "metadata": this.getMetadata(),
        };
    }

    /**
     * Get all the gateway configurations.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/gateway-configurations";

        var data = {
			'expand_merchant_accounts': (options['expand_merchant_accounts']) ? options['expand_merchant_accounts'] : null
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
                var body = respBody['gateway_configurations'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newGatewayConfiguration();
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
     * Find a gateway configuration by its ID.
	 * @param string configurationId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(configurationId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/gateway-configurations/" + encodeURI(configurationId) + "";

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
                body = body['gateway_configuration'];
                        
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
     * Save the updated gateway configuration attributes and settings.

     * @param {any} options
     * @return {Promise<any>}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/gateway-configurations/" + encodeURI(this.getId()) + "";

        var data = {
			'id': this.getId(), 
			'name': this.getName(), 
			'enabled': this.getEnabled(), 
			'default_currency': this.getDefaultCurrency(), 
			'processing_region': this.getProcessingRegion(), 
			'metadata': this.getMetadata(), 
			'settings': (options['settings']) ? options['settings'] : null, 
			'sub_accounts_enabled': (options['sub_accounts_enabled']) ? options['sub_accounts_enabled'] : null
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
                body = body['gateway_configuration'];
                        
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
     * Delete the gateway configuration.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    public delete(options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/gateway-configurations/" + encodeURI(this.getId()) + "";

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
    /**
     * Create a new gateway configuration.
	 * @param string gatewayName
     * @param {any} options
     * @return {Promise<any>}
     */
    public create(gatewayName: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/gateways/" + encodeURI(gatewayName) + "/gateway-configurations";

        var data = {
			'id': this.getId(), 
			'name': this.getName(), 
			'enabled': this.getEnabled(), 
			'default_currency': this.getDefaultCurrency(), 
			'processing_region': this.getProcessingRegion(), 
			'metadata': this.getMetadata(), 
			'settings': (options['settings']) ? options['settings'] : null, 
			'sub_accounts_enabled': (options['sub_accounts_enabled']) ? options['sub_accounts_enabled'] : null
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
                body = body['gateway_configuration'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.post(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = GatewayConfiguration;
