'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Customer = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the customer
     * @type {string}
     */
    _id: "",

    /**
     * Project to which the customer belongs
     * @type {object}
     */
    _project: null,

    /**
     * Email of the customer
     * @type {string}
     */
    _email: "",

    /**
     * First name of the customer
     * @type {string}
     */
    _firstName: "",

    /**
     * Last name of the customer
     * @type {string}
     */
    _lastName: "",

    /**
     * Address of the customer
     * @type {string}
     */
    _address1: "",

    /**
     * Secondary address of the customer
     * @type {string}
     */
    _address2: "",

    /**
     * City of the customer
     * @type {string}
     */
    _city: "",

    /**
     * State of the customer
     * @type {string}
     */
    _state: "",

    /**
     * ZIP code of the customer
     * @type {string}
     */
    _zip: "",

    /**
     * Country code of the customer
     * @type {string}
     */
    _countryCode: "",

    /**
     * Customer balance. Can be positive or negative
     * @type {string}
     */
    _balance: "0",

    /**
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @type {string}
     */
    _currency: "",

    /**
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: {},

    /**
     * Wether the customer has a PIN set or not
     * @type {boolean}
     */
    _hasPin: false,

    /**
     * Define whether or not the customer is in sandbox environment
     * @type {boolean}
     */
    _sandbox: false,

    /**
     * Date at which the customer was created
     * @type {string}
     */
    _createdAt: "",

    /**
     * Customer constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Customer object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCustomer()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the customer
     * @return {float}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the customer
     * @param {float} val
     * @return {Customer}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the customer belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the customer belongs
     * @param {object} val
     * @return {Customer}
     */
    setProject: function(val) {
        if (typeof val === 'object')
            this._project = val;
        else {
            var obj = new Project(this._client);
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get Email
     * Email of the customer
     * @return {float}
     */
    getEmail: function() {
        return this._email;
    },

    /**
     * Set Email
     * Email of the customer
     * @param {float} val
     * @return {Customer}
     */
    setEmail: function(val) {
        this._email = val;
        return this;
    },

    /**
     * Get FirstName
     * First name of the customer
     * @return {float}
     */
    getFirstName: function() {
        return this._firstName;
    },

    /**
     * Set FirstName
     * First name of the customer
     * @param {float} val
     * @return {Customer}
     */
    setFirstName: function(val) {
        this._firstName = val;
        return this;
    },

    /**
     * Get LastName
     * Last name of the customer
     * @return {float}
     */
    getLastName: function() {
        return this._lastName;
    },

    /**
     * Set LastName
     * Last name of the customer
     * @param {float} val
     * @return {Customer}
     */
    setLastName: function(val) {
        this._lastName = val;
        return this;
    },

    /**
     * Get Address1
     * Address of the customer
     * @return {float}
     */
    getAddress1: function() {
        return this._address1;
    },

    /**
     * Set Address1
     * Address of the customer
     * @param {float} val
     * @return {Customer}
     */
    setAddress1: function(val) {
        this._address1 = val;
        return this;
    },

    /**
     * Get Address2
     * Secondary address of the customer
     * @return {float}
     */
    getAddress2: function() {
        return this._address2;
    },

    /**
     * Set Address2
     * Secondary address of the customer
     * @param {float} val
     * @return {Customer}
     */
    setAddress2: function(val) {
        this._address2 = val;
        return this;
    },

    /**
     * Get City
     * City of the customer
     * @return {float}
     */
    getCity: function() {
        return this._city;
    },

    /**
     * Set City
     * City of the customer
     * @param {float} val
     * @return {Customer}
     */
    setCity: function(val) {
        this._city = val;
        return this;
    },

    /**
     * Get State
     * State of the customer
     * @return {float}
     */
    getState: function() {
        return this._state;
    },

    /**
     * Set State
     * State of the customer
     * @param {float} val
     * @return {Customer}
     */
    setState: function(val) {
        this._state = val;
        return this;
    },

    /**
     * Get Zip
     * ZIP code of the customer
     * @return {float}
     */
    getZip: function() {
        return this._zip;
    },

    /**
     * Set Zip
     * ZIP code of the customer
     * @param {float} val
     * @return {Customer}
     */
    setZip: function(val) {
        this._zip = val;
        return this;
    },

    /**
     * Get CountryCode
     * Country code of the customer
     * @return {float}
     */
    getCountryCode: function() {
        return this._countryCode;
    },

    /**
     * Set CountryCode
     * Country code of the customer
     * @param {float} val
     * @return {Customer}
     */
    setCountryCode: function(val) {
        this._countryCode = val;
        return this;
    },

    /**
     * Get Balance
     * Customer balance. Can be positive or negative
     * @return {float}
     */
    getBalance: function() {
        return this._balance;
    },

    /**
     * Set Balance
     * Customer balance. Can be positive or negative
     * @param {float} val
     * @return {Customer}
     */
    setBalance: function(val) {
        this._balance = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @return {float}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @param {float} val
     * @return {Customer}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Customer}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get HasPin
     * Wether the customer has a PIN set or not
     * @return {bool}
     */
    getHasPin: function() {
        return this._hasPin;
    },

    /**
     * Set HasPin
     * Wether the customer has a PIN set or not
     * @param {bool} val
     * @return {Customer}
     */
    setHasPin: function(val) {
        this._hasPin = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the customer is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the customer is in sandbox environment
     * @param {bool} val
     * @return {Customer}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the customer was created
     * @return {float}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the customer was created
     * @param {float} val
     * @return {Customer}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Customer}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["first_name"])
            this.setFirstName(data["first_name"]);
        if (data["last_name"])
            this.setLastName(data["last_name"]);
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["balance"])
            this.setBalance(data["balance"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["has_pin"])
            this.setHasPin(data["has_pin"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get the subscriptions belonging to the customer.

     * @param {object} options
     * @return {array}
     */
    fetchSubscriptions: function(options) {
        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/subscriptions";

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
                var body = response.body['subscriptions'];
                for (var i = body.length; i--;) {
                    var tmp = new Subscription(cur._client);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get the customer's tokens.

     * @param {object} options
     * @return {array}
     */
    fetchTokens: function(options) {
        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/tokens";

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
                var body = response.body['tokens'];
                for (var i = body.length; i--;) {
                    var tmp = new Token(cur._client);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a customer's token by its ID.
	 * @param string tokenId
     * @param {object} options
     * @return {Token}
     */
    findToken: function(tokenId, options) {
        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "";

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
                body = body['token'];
                var obj = new Token(cur._client);
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete a customer's token by its ID.
	 * @param string tokenId
     * @param {object} options
     * @return {bool}
     */
    deleteToken: function(tokenId, options) {
        var request = new Request(this._client);
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
                
                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get the transactions belonging to the customer.

     * @param {object} options
     * @return {array}
     */
    fetchTransactions: function(options) {
        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/transactions";

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
                var body = response.body['transactions'];
                for (var i = body.length; i--;) {
                    var tmp = new Transaction(cur._client);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get all the customers.
     * 
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        var request = new Request(this._client);
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
                
                var returnValues = [];

                
                var a    = [];
                var body = response.body['customers'];
                for (var i = body.length; i--;) {
                    var tmp = new Customer(cur._client);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new customer.
     * 
     * @param {object} options
     * @return {this}
     */
    create: function(options) {
        var request = new Request(this._client);
        var path    = "/customers";

        var data = {
			'balance': this.getBalance(), 
			'currency': this.getCurrency(), 
			'email': this.getEmail(), 
			'first_name': this.getFirstName(), 
			'last_name': this.getLastName(), 
			'address1': this.getAddress1(), 
			'address2': this.getAddress2(), 
			'city': this.getCity(), 
			'state': this.getState(), 
			'zip': this.getZip(), 
			'country_code': this.getCountryCode(), 
			'metadata': this.getMetadata()
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
                body = body['customer'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a customer by its ID.
	 * @param string customerId
     * @param {object} options
     * @return {this}
     */
    find: function(customerId, options) {
        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(customerId) + "";

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
                body = body['customer'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Save the updated customer attributes.

     * @param {object} options
     * @return {this}
     */
    save: function(options) {
        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getId()) + "";

        var data = {
			'balance': this.getBalance(), 
			'email': this.getEmail(), 
			'first_name': this.getFirstName(), 
			'last_name': this.getLastName(), 
			'address1': this.getAddress1(), 
			'address2': this.getAddress2(), 
			'city': this.getCity(), 
			'state': this.getState(), 
			'zip': this.getZip(), 
			'country_code': this.getCountryCode(), 
			'metadata': this.getMetadata()
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
                body = body['customer'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete the customer.

     * @param {object} options
     * @return {bool}
     */
    delete: function(options) {
        var request = new Request(this._client);
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
                
                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
