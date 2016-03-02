'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var Customer = module.exports = Base.extend({
    _instance: null,

    /**
     * Main address of the customer
     * @type string
     */
    _address1: "",

    /**
     * Secondary address of the customer
     * @type string
     */
    _address2: "",

    /**
     * URL used to redirect the customer when the authorization was canceled. Defaults to ProcessOut's cancel landing page
     * @type string
     */
    _authorizationCancelUrl: "",

    /**
     * URL used to redirect the customer once the authorized future payments. Defaults to ProcessOut's landing page
     * @type string
     */
    _authorizationSuccessUrl: "",

    /**
     * URL to which you can redirect your customer in order to authorize future payments
     * @type string
     */
    _authorizationUrl: "",

    /**
     * Shipping city of the customer
     * @type string
     */
    _city: "",

    /**
     * Shipping country code of the customer
     * @type string
     */
    _countryCode: "",

    /**
     * First name of the customer
     * @type string
     */
    _firstName: "",

    /**
     * Id of the customer
     * @type string
     */
    _id: "",

    /**
     * Last name of the customer
     * @type string
     */
    _lastName: "",

    /**
     * Shipping state of the customer
     * @type string
     */
    _state: "",

    /**
     * Shipping ZIP code of the customer
     * @type string
     */
    _zip: "",

    /**
     * Customer constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Address1
     * Main address of the customer
     * @return float
     */
    getAddress1: function() {
        return this._address1;
    },

    /**
     * Set Address1
     * Main address of the customer
     * @param float val
     * @return this
     */
    setAddress1: function(val) {
        this._address1 = val;
        return this;
    },

    /**
     * Get Address2
     * Secondary address of the customer
     * @return float
     */
    getAddress2: function() {
        return this._address2;
    },

    /**
     * Set Address2
     * Secondary address of the customer
     * @param float val
     * @return this
     */
    setAddress2: function(val) {
        this._address2 = val;
        return this;
    },

    /**
     * Get AuthorizationCancelUrl
     * URL used to redirect the customer when the authorization was canceled. Defaults to ProcessOut's cancel landing page
     * @return float
     */
    getAuthorizationCancelUrl: function() {
        return this._authorizationCancelUrl;
    },

    /**
     * Set AuthorizationCancelUrl
     * URL used to redirect the customer when the authorization was canceled. Defaults to ProcessOut's cancel landing page
     * @param float val
     * @return this
     */
    setAuthorizationCancelUrl: function(val) {
        this._authorizationCancelUrl = val;
        return this;
    },

    /**
     * Get AuthorizationSuccessUrl
     * URL used to redirect the customer once the authorized future payments. Defaults to ProcessOut's landing page
     * @return float
     */
    getAuthorizationSuccessUrl: function() {
        return this._authorizationSuccessUrl;
    },

    /**
     * Set AuthorizationSuccessUrl
     * URL used to redirect the customer once the authorized future payments. Defaults to ProcessOut's landing page
     * @param float val
     * @return this
     */
    setAuthorizationSuccessUrl: function(val) {
        this._authorizationSuccessUrl = val;
        return this;
    },

    /**
     * Get AuthorizationUrl
     * URL to which you can redirect your customer in order to authorize future payments
     * @return float
     */
    getAuthorizationUrl: function() {
        return this._authorizationUrl;
    },

    /**
     * Set AuthorizationUrl
     * URL to which you can redirect your customer in order to authorize future payments
     * @param float val
     * @return this
     */
    setAuthorizationUrl: function(val) {
        this._authorizationUrl = val;
        return this;
    },

    /**
     * Get City
     * Shipping city of the customer
     * @return float
     */
    getCity: function() {
        return this._city;
    },

    /**
     * Set City
     * Shipping city of the customer
     * @param float val
     * @return this
     */
    setCity: function(val) {
        this._city = val;
        return this;
    },

    /**
     * Get CountryCode
     * Shipping country code of the customer
     * @return float
     */
    getCountryCode: function() {
        return this._countryCode;
    },

    /**
     * Set CountryCode
     * Shipping country code of the customer
     * @param float val
     * @return this
     */
    setCountryCode: function(val) {
        this._countryCode = val;
        return this;
    },

    /**
     * Get FirstName
     * First name of the customer
     * @return float
     */
    getFirstName: function() {
        return this._firstName;
    },

    /**
     * Set FirstName
     * First name of the customer
     * @param float val
     * @return this
     */
    setFirstName: function(val) {
        this._firstName = val;
        return this;
    },

    /**
     * Get Id
     * Id of the customer
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the customer
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get LastName
     * Last name of the customer
     * @return float
     */
    getLastName: function() {
        return this._lastName;
    },

    /**
     * Set LastName
     * Last name of the customer
     * @param float val
     * @return this
     */
    setLastName: function(val) {
        this._lastName = val;
        return this;
    },

    /**
     * Get State
     * Shipping state of the customer
     * @return float
     */
    getState: function() {
        return this._state;
    },

    /**
     * Set State
     * Shipping state of the customer
     * @param float val
     * @return this
     */
    setState: function(val) {
        this._state = val;
        return this;
    },

    /**
     * Get Zip
     * Shipping ZIP code of the customer
     * @return float
     */
    getZip: function() {
        return this._zip;
    },

    /**
     * Set Zip
     * Shipping ZIP code of the customer
     * @param float val
     * @return this
     */
    setZip: function(val) {
        this._zip = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Customer
     */
    fillWithData: function(data) {
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["authorization_cancel_url"])
            this.setAuthorizationCancelUrl(data["authorization_cancel_url"]);
        if (data["authorization_success_url"])
            this.setAuthorizationSuccessUrl(data["authorization_success_url"]);
        if (data["authorization_url"])
            this.setAuthorizationUrl(data["authorization_url"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["first_name"])
            this.setFirstName(data["first_name"]);
        if (data["id"])
            this.setId(data["id"]);
        if (data["last_name"])
            this.setLastName(data["last_name"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        return this;
    },

    /**
     * Get the customer data.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(id) + "";

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

                var body = response.body;
                body = body['customer'];
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    /**
     * Update the customer data.

     * @param object options
     * @return Customer
     */
    save: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(this.getId()) + "";

        var data = {
			'email': this.getEmail(), 
			'first_name': this.getFirstName(), 
			'last_name': this.getLastName(), 
			'address1': this.getAddress1(), 
			'address2': this.getAddress2(), 
			'city': this.getCity(), 
			'zip': this.getZip(), 
			'country_code': this.getCountryCode()
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
                body = body['customer'];
                var obj = new Customer(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Delete the customer.

     * @param object options
     * @return bool
     */
    delete: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(this.getId()) + "";

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
    /**
     * Get all the authorization tokens of the customer.

     * @param object options
     * @return array
     */
    tokens: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "customers/" + encodeURI(this.getId()) + "/tokens";

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

                var a    = [];
                var body = response.body['tokens'];
                for (var i = body.length; i--;) {
                    var tmp = new CustomerToken(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                return resolve(a);
            });
        });
    },
    /**
     * Get the customers list belonging to the project.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers";

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

                var a    = [];
                var body = response.body['customers'];
                for (var i = body.length; i--;) {
                    var tmp = new Customer(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                return resolve(a);
            });
        });
    },
    /**
     * Create a new customer.
     * 
     * @param object options
     * @return Customer
     */
    create: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers";

        var data = {
			'email': this.getEmail(), 
			'first_name': this.getFirstName(), 
			'last_name': this.getLastName(), 
			'address1': this.getAddress1(), 
			'address2': this.getAddress2(), 
			'city': this.getCity(), 
			'zip': this.getZip(), 
			'country_code': this.getCountryCode()
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
                body = body['customer'];
                var obj = new Customer(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Find a specific customer token.
	 * @param string tokenId
     * @param object options
     * @return CustomerToken
     */
    findToken: function(tokenId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "";

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

                var body = response.body;
                body = body['token'];
                var obj = new CustomerToken(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Revoke (delete) a specific customer token.
	 * @param string tokenId
     * @param object options
     * @return bool
     */
    revoke: function(tokenId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "";

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
    /**
     * Authorize (create) a new customer token.
	 * @param string gatewayName
	 * @param string name
	 * @param string token
     * @param object options
     * @return CustomerToken
     */
    authorize: function(gatewayName, name, token, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(this.getId()) + "/gateways/" + encodeURI(gatewayName) + "/tokens";

        var data = {
			'name': name, 
			'token': token
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
                body = body['token'];
                var obj = new CustomerToken(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    
}, {
    /**
     * Get the customer data.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var obj = new Customer();
        return obj.find(id, );
    }
    /**
     * Get the customers list belonging to the project.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new Customer();
        return obj.all();
    }
    
});
