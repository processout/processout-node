// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Project {
    private client: ProcessOut = null;

    /**
     * ID of the project
     * @type {string}
     */
    private id: string = null;

    /**
     * Project used to create this project
     * @type {p.Project}
     */
    private supervisorProject: p.Project = null;

    /**
     * ID of the project used to create this project
     * @type {string}
     */
    private supervisorProjectId: string = null;

    /**
     * Current API version of the project
     * @type {p.APIVersion}
     */
    private apiVersion: p.APIVersion = null;

    /**
     * Name of the project
     * @type {string}
     */
    private name: string = null;

    /**
     * Name of the project
     * @type {string}
     */
    private logoUrl: string = null;

    /**
     * Email of the project
     * @type {string}
     */
    private email: string = null;

    /**
     * Default currency of the project, used to compute analytics amounts
     * @type {string}
     */
    private defaultCurrency: string = null;

    /**
     * Private key of the project. Only returned when creating a project
     * @type {string}
     */
    private privateKey: string = null;

    /**
     * Dunning configuration of the project
     * @type {any}
     */
    private dunningConfiguration: any = null;

    /**
     * Date at which the project was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Project constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Project) {
        if (typeof client === 'undefined')
            throw new Error("The Project object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProject()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Project";
    }

    /**
     * Get Id
     * ID of the project
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the project
     * @param {string} val
     * @return {Project}
     */
    public setId(val: string): Project {
        this.id = val;
        return this;
    }

    /**
     * Get SupervisorProject
     * Project used to create this project
     * @return {p.Project}
     */
    public getSupervisorProject(): p.Project {
        return this.supervisorProject;
    }

    /**
     * Set SupervisorProject
     * Project used to create this project
     * @param {p.Project} val
     * @return {Project}
     */
    public setSupervisorProject(val: p.Project): Project {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.supervisorProject = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.supervisorProject = obj;
        }
        return this;
    }

    /**
     * Get SupervisorProjectId
     * ID of the project used to create this project
     * @return {string}
     */
    public getSupervisorProjectId(): string {
        return this.supervisorProjectId;
    }

    /**
     * Set SupervisorProjectId
     * ID of the project used to create this project
     * @param {string} val
     * @return {Project}
     */
    public setSupervisorProjectId(val: string): Project {
        this.supervisorProjectId = val;
        return this;
    }

    /**
     * Get ApiVersion
     * Current API version of the project
     * @return {p.APIVersion}
     */
    public getApiVersion(): p.APIVersion {
        return this.apiVersion;
    }

    /**
     * Set ApiVersion
     * Current API version of the project
     * @param {p.APIVersion} val
     * @return {Project}
     */
    public setApiVersion(val: p.APIVersion): Project {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newAPIVersion().getProcessOutObjectClass())
            this.apiVersion = val;
        else {
            var obj = this.client.newAPIVersion();
            obj.fillWithData(val);
            this.apiVersion = obj;
        }
        return this;
    }

    /**
     * Get Name
     * Name of the project
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the project
     * @param {string} val
     * @return {Project}
     */
    public setName(val: string): Project {
        this.name = val;
        return this;
    }

    /**
     * Get LogoUrl
     * Name of the project
     * @return {string}
     */
    public getLogoUrl(): string {
        return this.logoUrl;
    }

    /**
     * Set LogoUrl
     * Name of the project
     * @param {string} val
     * @return {Project}
     */
    public setLogoUrl(val: string): Project {
        this.logoUrl = val;
        return this;
    }

    /**
     * Get Email
     * Email of the project
     * @return {string}
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Set Email
     * Email of the project
     * @param {string} val
     * @return {Project}
     */
    public setEmail(val: string): Project {
        this.email = val;
        return this;
    }

    /**
     * Get DefaultCurrency
     * Default currency of the project, used to compute analytics amounts
     * @return {string}
     */
    public getDefaultCurrency(): string {
        return this.defaultCurrency;
    }

    /**
     * Set DefaultCurrency
     * Default currency of the project, used to compute analytics amounts
     * @param {string} val
     * @return {Project}
     */
    public setDefaultCurrency(val: string): Project {
        this.defaultCurrency = val;
        return this;
    }

    /**
     * Get PrivateKey
     * Private key of the project. Only returned when creating a project
     * @return {string}
     */
    public getPrivateKey(): string {
        return this.privateKey;
    }

    /**
     * Set PrivateKey
     * Private key of the project. Only returned when creating a project
     * @param {string} val
     * @return {Project}
     */
    public setPrivateKey(val: string): Project {
        this.privateKey = val;
        return this;
    }

    /**
     * Get DunningConfiguration
     * Dunning configuration of the project
     * @return {any}
     */
    public getDunningConfiguration(): any {
        return this.dunningConfiguration;
    }

    /**
     * Set DunningConfiguration
     * Dunning configuration of the project
     * @param {any} val
     * @return {Project}
     */
    public setDunningConfiguration(val: any): Project {
        if (val.length > 0 && typeof val[0] === 'object')
            this.dunningConfiguration = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newDunningAction();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.dunningConfiguration = a;
        }
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the project was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the project was created
     * @param {string} val
     * @return {Project}
     */
    public setCreatedAt(val: string): Project {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Project}
     */
    public fillWithData(data: any): Project {
        if (data["id"])
            this.setId(data["id"]);
        if (data["supervisor_project"])
            this.setSupervisorProject(data["supervisor_project"]);
        if (data["supervisor_project_id"])
            this.setSupervisorProjectId(data["supervisor_project_id"]);
        if (data["api_version"])
            this.setApiVersion(data["api_version"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["default_currency"])
            this.setDefaultCurrency(data["default_currency"]);
        if (data["private_key"])
            this.setPrivateKey(data["private_key"]);
        if (data["dunning_configuration"])
            this.setDunningConfiguration(data["dunning_configuration"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Regenerate the project private key. Make sure to store the new private key and use it in any future request.
     * 
     * @param {any} options
     * @return {this}
     */
    public regeneratePrivateKey(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/private-keys";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['project'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.post(path, data, options, callback);
            });
    }
    /**
     * Fetch the current project information.

     * @param {any} options
     * @return {this}
     */
    public fetch(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/projects/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['project'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Save the updated project's attributes.

     * @param {any} options
     * @return {this}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/projects/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['project'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.put(path, data, options, callback);
            });
    }
    /**
     * Delete the project. Be careful! Executing this request will prevent any further interaction with the API that uses this project.
     * 
     * @param {any} options
     * @return {bool}
     */
    public delete(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/projects/{project_id}";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };

            request.delete(path, data, options, callback);
            });
    }
    /**
     * Get all the supervised projects.
     * 
     * @param {any} options
     * @return {array}
     */
    public fetchSupervised(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/supervised-projects";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = response.body['projects'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newProject();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Create a new supervised project.
     * 
     * @param {any} options
     * @return {this}
     */
    public createSupervised(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/supervised-projects";

        var data = {
			'id': this.getId(), 
			'name': this.getName(), 
			'default_currency': this.getDefaultCurrency(), 
			'dunning_configuration': this.getDunningConfiguration(), 
			'applepay_settings': (options['applepay_settings']) ? options['applepay_settings'] : null
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['project'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.post(path, data, options, callback);
            });
    }
    
}
export = Project;
