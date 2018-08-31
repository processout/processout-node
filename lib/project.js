'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Project = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the project
     * @type {string}
     */
    _id: null,

    /**
     * Project used to create this project
     * @type {object}
     */
    _supervisorProject: null,

    /**
     * ID of the project used to create this project
     * @type {string}
     */
    _supervisorProjectId: null,

    /**
     * Current API version of the project
     * @type {object}
     */
    _apiVersion: null,

    /**
     * Name of the project
     * @type {string}
     */
    _name: null,

    /**
     * Name of the project
     * @type {string}
     */
    _logoUrl: null,

    /**
     * Email of the project
     * @type {string}
     */
    _email: null,

    /**
     * Default currency of the project, used to compute analytics amounts
     * @type {string}
     */
    _defaultCurrency: null,

    /**
     * Private key of the project. Only returned when creating a project
     * @type {string}
     */
    _privateKey: null,

    /**
     * Dunning configuration of the project
     * @type {list}
     */
    _dunningConfiguration: null,

    /**
     * Date at which the project was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Project constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Project object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProject()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the project
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the project
     * @param {string} val
     * @return {Project}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get SupervisorProject
     * Project used to create this project
     * @return {object}
     */
    getSupervisorProject: function() {
        return this._supervisorProject;
    },

    /**
     * Set SupervisorProject
     * Project used to create this project
     * @param {object} val
     * @return {Project}
     */
    setSupervisorProject: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newProject().getClass())
            this._supervisorProject = val;
        else {
            var obj = this._client.newProject();
            obj.fillWithData(val);
            this._supervisorProject = obj;
        }
        return this;
    },

    /**
     * Get SupervisorProjectId
     * ID of the project used to create this project
     * @return {string}
     */
    getSupervisorProjectId: function() {
        return this._supervisorProjectId;
    },

    /**
     * Set SupervisorProjectId
     * ID of the project used to create this project
     * @param {string} val
     * @return {Project}
     */
    setSupervisorProjectId: function(val) {
        this._supervisorProjectId = val;
        return this;
    },

    /**
     * Get ApiVersion
     * Current API version of the project
     * @return {object}
     */
    getApiVersion: function() {
        return this._apiVersion;
    },

    /**
     * Set ApiVersion
     * Current API version of the project
     * @param {object} val
     * @return {Project}
     */
    setApiVersion: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newAPIVersion().getClass())
            this._apiVersion = val;
        else {
            var obj = this._client.newAPIVersion();
            obj.fillWithData(val);
            this._apiVersion = obj;
        }
        return this;
    },

    /**
     * Get Name
     * Name of the project
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the project
     * @param {string} val
     * @return {Project}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get LogoUrl
     * Name of the project
     * @return {string}
     */
    getLogoUrl: function() {
        return this._logoUrl;
    },

    /**
     * Set LogoUrl
     * Name of the project
     * @param {string} val
     * @return {Project}
     */
    setLogoUrl: function(val) {
        this._logoUrl = val;
        return this;
    },

    /**
     * Get Email
     * Email of the project
     * @return {string}
     */
    getEmail: function() {
        return this._email;
    },

    /**
     * Set Email
     * Email of the project
     * @param {string} val
     * @return {Project}
     */
    setEmail: function(val) {
        this._email = val;
        return this;
    },

    /**
     * Get DefaultCurrency
     * Default currency of the project, used to compute analytics amounts
     * @return {string}
     */
    getDefaultCurrency: function() {
        return this._defaultCurrency;
    },

    /**
     * Set DefaultCurrency
     * Default currency of the project, used to compute analytics amounts
     * @param {string} val
     * @return {Project}
     */
    setDefaultCurrency: function(val) {
        this._defaultCurrency = val;
        return this;
    },

    /**
     * Get PrivateKey
     * Private key of the project. Only returned when creating a project
     * @return {string}
     */
    getPrivateKey: function() {
        return this._privateKey;
    },

    /**
     * Set PrivateKey
     * Private key of the project. Only returned when creating a project
     * @param {string} val
     * @return {Project}
     */
    setPrivateKey: function(val) {
        this._privateKey = val;
        return this;
    },

    /**
     * Get DunningConfiguration
     * Dunning configuration of the project
     * @return {array}
     */
    getDunningConfiguration: function() {
        return this._dunningConfiguration;
    },

    /**
     * Set DunningConfiguration
     * Dunning configuration of the project
     * @param {array} val
     * @return {Project}
     */
    setDunningConfiguration: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._dunningConfiguration = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newDunningAction();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._dunningConfiguration = a;
        }
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the project was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the project was created
     * @param {string} val
     * @return {Project}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Project}
     */
    fillWithData: function(data) {
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
    },

    /**
     * Regenerate the project private key. Make sure to store the new private key and use it in any future request.
     * 
     * @param {object} options
     * @return {this}
     */
    regeneratePrivateKey: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/private-keys";

        var data = {

        };

        var req = request.post(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var body = response.body;
                body = body['project'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Fetch the current project information.

     * @param {object} options
     * @return {this}
     */
    fetch: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/projects/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var body = response.body;
                body = body['project'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Save the updated project's attributes.

     * @param {object} options
     * @return {this}
     */
    save: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/projects/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var req = request.put(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var body = response.body;
                body = body['project'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete the project. Be careful! Executing this request will prevent any further interaction with the API that uses this project.
     * 
     * @param {object} options
     * @return {bool}
     */
    delete: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/projects/{project_id}";

        var data = {

        };

        var req = request.delete(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get all the supervised projects.
     * 
     * @param {object} options
     * @return {array}
     */
    fetchSupervised: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/supervised-projects";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var a    = [];
                var body = response.body['projects'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newProject();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new supervised project.
     * 
     * @param {object} options
     * @return {this}
     */
    createSupervised: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/supervised-projects";

        var data = {
			'id': this.getId(), 
			'name': this.getName(), 
			'default_currency': this.getDefaultCurrency(), 
			'dunning_configuration': this.getDunningConfiguration(), 
			'applepay_settings': (options['applepay_settings']) ? options['applepay_settings'] : null
        };

        var req = request.post(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var body = response.body;
                body = body['project'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
