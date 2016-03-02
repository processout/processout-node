'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var Project = module.exports = Base.extend({
    _instance: null,

    /**
     * Email of the project
     * @type string
     */
    _email: "",

    /**
     * Unique ID of the project
     * @type string
     */
    _id: "",

    /**
     * URL of the project's logo
     * @type string
     */
    _logoUrl: "",

    /**
     * Name of the project
     * @type string
     */
    _name: "",

    /**
     * Secret key of the project
     * @type string
     */
    _secretKey: "",

    /**
     * Project constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Email
     * Email of the project
     * @return float
     */
    getEmail: function() {
        return this._email;
    },

    /**
     * Set Email
     * Email of the project
     * @param float val
     * @return this
     */
    setEmail: function(val) {
        this._email = val;
        return this;
    },

    /**
     * Get Id
     * Unique ID of the project
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Unique ID of the project
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get LogoUrl
     * URL of the project's logo
     * @return float
     */
    getLogoUrl: function() {
        return this._logoUrl;
    },

    /**
     * Set LogoUrl
     * URL of the project's logo
     * @param float val
     * @return this
     */
    setLogoUrl: function(val) {
        this._logoUrl = val;
        return this;
    },

    /**
     * Get Name
     * Name of the project
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the project
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get SecretKey
     * Secret key of the project
     * @return float
     */
    getSecretKey: function() {
        return this._secretKey;
    },

    /**
     * Set SecretKey
     * Secret key of the project
     * @param float val
     * @return this
     */
    setSecretKey: function(val) {
        this._secretKey = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Project
     */
    fillWithData: function(data) {
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["id"])
            this.setId(data["id"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["secret_key"])
            this.setSecretKey(data["secret_key"]);
        return this;
    },

    /**
     * Create a new supervised project which will belong to current project.
     * 
     * @param object options
     * @return this
     */
    createSupervised: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/projects/supervised";

        var data = {
			'name': this.getName(), 
			'email': this.getEmail(), 
			'logo_url': this.getLogoUrl()
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

                var body = response.body;
                body = body['project'];
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    
}, {
    
});
