'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');

var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');

var RequestProcessoutPublic = require('./networking/requestprocessoutpublic');


var PaymentGateway = module.exports = Base.extend({
    _instance: null,

    
    /**
     * Settings of the payment gateway, in the form of a dictionary
     * @type dictionary
     */
    _settings: {},
    

    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    
    /**
     * Get Settings
     * Settings of the payment gateway, in the form of a dictionary
     * @return array
     */
    getSettings: function() {
        return this._settings;
    },

    /**
     * Set Settings
     * Settings of the payment gateway, in the form of a dictionary
     * @param array val
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
        
        if (data["settings"])
        {
            this.setSettings(data["settings"]);
        }
        

        return this;
    },

    
    /**
     * Update or set the payment gateway settings.
	 * @param string name
     * @return bool
     */
    save: function(name) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/payment-gateway/" + encodeURI(name) + "";

        var data = {
			'settings': this.getSettings()
        };

        
        var req = request.put(path, data);
        

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
    
    /**
     * Remove the payment gateway and its settings from the current project.
	 * @param string name
     * @return bool
     */
    delete: function(name) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/payment-gateway/" + encodeURI(name) + "";

        var data = {

        };

        
        var req = request.delete(path, data);
        

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
	 * @param string name
     * @return bool
     */
    delete: function(name) {
        var obj = new PaymentGateway();
        return obj.delete(name);
    }
    
    
});
