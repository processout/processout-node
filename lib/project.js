'use strict';

// The content of this file was automatically generated

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Project = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the project
     * @type string
     */
    _id: "",

    /**
     * Name of the project
     * @type string
     */
    _name: "",

    /**
     * Name of the project
     * @type string
     */
    _logoUrl: "",

    /**
     * Email of the project
     * @type string
     */
    _email: "",

    /**
     * Date at which the project was created
     * @type string
     */
    _createdAt: "",

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
     * Get Id
     * ID of the project
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the project
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
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
     * Get LogoUrl
     * Name of the project
     * @return float
     */
    getLogoUrl: function() {
        return this._logoUrl;
    },

    /**
     * Set LogoUrl
     * Name of the project
     * @param float val
     * @return this
     */
    setLogoUrl: function(val) {
        this._logoUrl = val;
        return this;
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
     * Get CreatedAt
     * Date at which the project was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the project was created
     * @param float val
     * @return this
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Project
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get all the gateway configurations of the project

     * @param object options
     * @return array
     */
    gatewayConfigurations: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/projects/" + encodeURI(this.getId()) + "/gateway-configurations";

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
                var body = response.body['gateway_configurations'];
                for (var i = body.length; i--;) {
                    var tmp = new GatewayConfiguration(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {
    
});
