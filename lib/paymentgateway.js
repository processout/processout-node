'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var PaymentGateway = module.exports = Base.extend({
    _instance: null,

    /**
     * Determine if the gateway's integration is still in beta
     * @type boolean
     */
    _beta: false,

    /**
     * Name of the payment gateway to be displayed
     * @type string
     */
    _displayName: "",

    /**
     * Internal name of the payment gateway
     * @type string
     */
    _name: "",

    /**
     * 
     * @type list
     */
    _publicKeys: [],

    /**
     * Settings of the payment gateway, in the form of a dictionary
     * @type dictionary
     */
    _settings: {},

    /**
     * PaymentGateway constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Beta
     * Determine if the gateway's integration is still in beta
     * @return bool
     */
    getBeta: function() {
        return this._beta;
    },

    /**
     * Set Beta
     * Determine if the gateway's integration is still in beta
     * @param bool val
     * @return this
     */
    setBeta: function(val) {
        this._beta = val;
        return this;
    },

    /**
     * Get DisplayName
     * Name of the payment gateway to be displayed
     * @return float
     */
    getDisplayName: function() {
        return this._displayName;
    },

    /**
     * Set DisplayName
     * Name of the payment gateway to be displayed
     * @param float val
     * @return this
     */
    setDisplayName: function(val) {
        this._displayName = val;
        return this;
    },

    /**
     * Get Name
     * Internal name of the payment gateway
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Internal name of the payment gateway
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get PublicKeys
     * 
     * @return array
     */
    getPublicKeys: function() {
        return this._publicKeys;
    },

    /**
     * Set PublicKeys
     * 
     * @param array val
     * @return this
     */
    setPublicKeys: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._publicKeys = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = new PaymentGatewayPublicKey(this._instance);
                obj.fillWithData(val);
                a.push(obj);
            }
            this._publicKeys = a;
        }
        return this;
    },

    /**
     * Get Settings
     * Settings of the payment gateway, in the form of a dictionary
     * @return object
     */
    getSettings: function() {
        return this._settings;
    },

    /**
     * Set Settings
     * Settings of the payment gateway, in the form of a dictionary
     * @param object val
     * @return this
     */
    setSettings: function(val) {
        this._settings = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return PaymentGateway
     */
    fillWithData: function(data) {
        if (data["beta"])
            this.setBeta(data["beta"]);
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["public_keys"])
            this.setPublicKeys(data["public_keys"]);
        if (data["settings"])
            this.setSettings(data["settings"]);
        return this;
    },

    /**
     * Update or set the payment gateway settings.
	 * @param string gatewayName
     * @param object options
     * @return PaymentGateway
     */
    save: function(gatewayName, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/gateways/" + encodeURI(gatewayName) + "";

        var data = {
			'settings': this.getSettings()
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

                var body = response.body;
                body = body['gateway'];
                var obj = new PaymentGateway(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Remove the payment gateway and its settings from the current project.
	 * @param string gatewayName
     * @param object options
     * @return bool
     */
    delete: function(gatewayName, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/gateways/" + encodeURI(gatewayName) + "";

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

                return resolve(response.isSuccess());
                
            });
        });
    },
    
}, {
    /**
     * Remove the payment gateway and its settings from the current project.
	 * @param string gatewayName
     * @param object options
     * @return bool
     */
    delete: function(gatewayName, options) {
        var obj = new PaymentGateway();
        return obj.delete(gatewayName, options);
    },

    
});
