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
    _id: null,

    /**
     * Project to which the customer belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the customer belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Default token of the customer
     * @type {object}
     */
    _defaultToken: null,

    /**
     * ID of the default token of the customer
     * @type {string}
     */
    _defaultTokenId: null,

    /**
     * List of the customer tokens
     * @type {list}
     */
    _tokens: null,

    /**
     * List of the customer subscriptions
     * @type {list}
     */
    _subscriptions: null,

    /**
     * List of the customer transactions
     * @type {list}
     */
    _transactions: null,

    /**
     * Customer balance. Can be positive or negative
     * @type {decimal}
     */
    _balance: null,

    /**
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @type {string}
     */
    _currency: null,

    /**
     * Email of the customer
     * @type {string}
     */
    _email: null,

    /**
     * First name of the customer
     * @type {string}
     */
    _firstName: null,

    /**
     * Last name of the customer
     * @type {string}
     */
    _lastName: null,

    /**
     * Address of the customer
     * @type {string}
     */
    _address1: null,

    /**
     * Secondary address of the customer
     * @type {string}
     */
    _address2: null,

    /**
     * City of the customer
     * @type {string}
     */
    _city: null,

    /**
     * State of the customer
     * @type {string}
     */
    _state: null,

    /**
     * ZIP code of the customer
     * @type {string}
     */
    _zip: null,

    /**
     * Country code of the customer (ISO-3166, 2 characters format)
     * @type {string}
     */
    _countryCode: null,

    /**
     * IP address of the customer (IPv4 or IPv6)
     * @type {string}
     */
    _ipAddress: null,

    /**
     * Phone number of the customer
     * @type {string}
     */
    _phoneNumber: null,

    /**
     * Legal document number
     * @type {string}
     */
    _legalDocument: null,

    /**
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Define whether or not the customer is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the customer was created
     * @type {string}
     */
    _createdAt: null,

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
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the customer
     * @param {string} val
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
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newProject().getClass())
            this._project = val;
        else {
            var obj = this._client.newProject();
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get ProjectId
     * ID of the project to which the customer belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the customer belongs
     * @param {string} val
     * @return {Customer}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get DefaultToken
     * Default token of the customer
     * @return {object}
     */
    getDefaultToken: function() {
        return this._defaultToken;
    },

    /**
     * Set DefaultToken
     * Default token of the customer
     * @param {object} val
     * @return {Customer}
     */
    setDefaultToken: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newToken().getClass())
            this._defaultToken = val;
        else {
            var obj = this._client.newToken();
            obj.fillWithData(val);
            this._defaultToken = obj;
        }
        return this;
    },

    /**
     * Get DefaultTokenId
     * ID of the default token of the customer
     * @return {string}
     */
    getDefaultTokenId: function() {
        return this._defaultTokenId;
    },

    /**
     * Set DefaultTokenId
     * ID of the default token of the customer
     * @param {string} val
     * @return {Customer}
     */
    setDefaultTokenId: function(val) {
        this._defaultTokenId = val;
        return this;
    },

    /**
     * Get Tokens
     * List of the customer tokens
     * @return {array}
     */
    getTokens: function() {
        return this._tokens;
    },

    /**
     * Set Tokens
     * List of the customer tokens
     * @param {array} val
     * @return {Customer}
     */
    setTokens: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._tokens = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newToken();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._tokens = a;
        }
        return this;
    },

    /**
     * Get Subscriptions
     * List of the customer subscriptions
     * @return {array}
     */
    getSubscriptions: function() {
        return this._subscriptions;
    },

    /**
     * Set Subscriptions
     * List of the customer subscriptions
     * @param {array} val
     * @return {Customer}
     */
    setSubscriptions: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._subscriptions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newSubscription();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._subscriptions = a;
        }
        return this;
    },

    /**
     * Get Transactions
     * List of the customer transactions
     * @return {array}
     */
    getTransactions: function() {
        return this._transactions;
    },

    /**
     * Set Transactions
     * List of the customer transactions
     * @param {array} val
     * @return {Customer}
     */
    setTransactions: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._transactions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newTransaction();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._transactions = a;
        }
        return this;
    },

    /**
     * Get Balance
     * Customer balance. Can be positive or negative
     * @return {string}
     */
    getBalance: function() {
        return this._balance;
    },

    /**
     * Set Balance
     * Customer balance. Can be positive or negative
     * @param {string} val
     * @return {Customer}
     */
    setBalance: function(val) {
        this._balance = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @return {string}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @param {string} val
     * @return {Customer}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Email
     * Email of the customer
     * @return {string}
     */
    getEmail: function() {
        return this._email;
    },

    /**
     * Set Email
     * Email of the customer
     * @param {string} val
     * @return {Customer}
     */
    setEmail: function(val) {
        this._email = val;
        return this;
    },

    /**
     * Get FirstName
     * First name of the customer
     * @return {string}
     */
    getFirstName: function() {
        return this._firstName;
    },

    /**
     * Set FirstName
     * First name of the customer
     * @param {string} val
     * @return {Customer}
     */
    setFirstName: function(val) {
        this._firstName = val;
        return this;
    },

    /**
     * Get LastName
     * Last name of the customer
     * @return {string}
     */
    getLastName: function() {
        return this._lastName;
    },

    /**
     * Set LastName
     * Last name of the customer
     * @param {string} val
     * @return {Customer}
     */
    setLastName: function(val) {
        this._lastName = val;
        return this;
    },

    /**
     * Get Address1
     * Address of the customer
     * @return {string}
     */
    getAddress1: function() {
        return this._address1;
    },

    /**
     * Set Address1
     * Address of the customer
     * @param {string} val
     * @return {Customer}
     */
    setAddress1: function(val) {
        this._address1 = val;
        return this;
    },

    /**
     * Get Address2
     * Secondary address of the customer
     * @return {string}
     */
    getAddress2: function() {
        return this._address2;
    },

    /**
     * Set Address2
     * Secondary address of the customer
     * @param {string} val
     * @return {Customer}
     */
    setAddress2: function(val) {
        this._address2 = val;
        return this;
    },

    /**
     * Get City
     * City of the customer
     * @return {string}
     */
    getCity: function() {
        return this._city;
    },

    /**
     * Set City
     * City of the customer
     * @param {string} val
     * @return {Customer}
     */
    setCity: function(val) {
        this._city = val;
        return this;
    },

    /**
     * Get State
     * State of the customer
     * @return {string}
     */
    getState: function() {
        return this._state;
    },

    /**
     * Set State
     * State of the customer
     * @param {string} val
     * @return {Customer}
     */
    setState: function(val) {
        this._state = val;
        return this;
    },

    /**
     * Get Zip
     * ZIP code of the customer
     * @return {string}
     */
    getZip: function() {
        return this._zip;
    },

    /**
     * Set Zip
     * ZIP code of the customer
     * @param {string} val
     * @return {Customer}
     */
    setZip: function(val) {
        this._zip = val;
        return this;
    },

    /**
     * Get CountryCode
     * Country code of the customer (ISO-3166, 2 characters format)
     * @return {string}
     */
    getCountryCode: function() {
        return this._countryCode;
    },

    /**
     * Set CountryCode
     * Country code of the customer (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {Customer}
     */
    setCountryCode: function(val) {
        this._countryCode = val;
        return this;
    },

    /**
     * Get IpAddress
     * IP address of the customer (IPv4 or IPv6)
     * @return {string}
     */
    getIpAddress: function() {
        return this._ipAddress;
    },

    /**
     * Set IpAddress
     * IP address of the customer (IPv4 or IPv6)
     * @param {string} val
     * @return {Customer}
     */
    setIpAddress: function(val) {
        this._ipAddress = val;
        return this;
    },

    /**
     * Get PhoneNumber
     * Phone number of the customer
     * @return {string}
     */
    getPhoneNumber: function() {
        return this._phoneNumber;
    },

    /**
     * Set PhoneNumber
     * Phone number of the customer
     * @param {string} val
     * @return {Customer}
     */
    setPhoneNumber: function(val) {
        this._phoneNumber = val;
        return this;
    },

    /**
     * Get LegalDocument
     * Legal document number
     * @return {string}
     */
    getLegalDocument: function() {
        return this._legalDocument;
    },

    /**
     * Set LegalDocument
     * Legal document number
     * @param {string} val
     * @return {Customer}
     */
    setLegalDocument: function(val) {
        this._legalDocument = val;
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
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the customer was created
     * @param {string} val
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
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["default_token"])
            this.setDefaultToken(data["default_token"]);
        if (data["default_token_id"])
            this.setDefaultTokenId(data["default_token_id"]);
        if (data["tokens"])
            this.setTokens(data["tokens"]);
        if (data["subscriptions"])
            this.setSubscriptions(data["subscriptions"]);
        if (data["transactions"])
            this.setTransactions(data["transactions"]);
        if (data["balance"])
            this.setBalance(data["balance"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
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
        if (data["ip_address"])
            this.setIpAddress(data["ip_address"]);
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["legal_document"])
            this.setLegalDocument(data["legal_document"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
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
        if (!options) options = {};
        this.fillWithData(options);

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
                    var tmp = cur._client.newSubscription();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Verify a customer token's card is valid.
	 * @param string tokenId
     * @param {object} options
     * @return {bool}
     */
    verifyToken: function(tokenId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "/verify";

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

                
                returnValues.push(response.isSuccess());

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
        if (!options) options = {};
        this.fillWithData(options);

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
                    var tmp = cur._client.newToken();
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
        if (!options) options = {};
        this.fillWithData(options);

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
                var obj = cur._client.newToken();
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
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "";

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
        if (!options) options = {};
        this.fillWithData(options);

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
                    var tmp = cur._client.newTransaction();
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
        if (!options) options = {};
        this.fillWithData(options);

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
                    var tmp = cur._client.newCustomer();
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
        if (!options) options = {};
        this.fillWithData(options);

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
			'ip_address': this.getIpAddress(), 
			'phone_number': this.getPhoneNumber(), 
			'legal_document': this.getLegalDocument(), 
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
        if (!options) options = {};
        this.fillWithData(options);

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
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getId()) + "";

        var data = {
			'balance': this.getBalance(), 
			'default_token_id': this.getDefaultTokenId(), 
			'email': this.getEmail(), 
			'first_name': this.getFirstName(), 
			'last_name': this.getLastName(), 
			'address1': this.getAddress1(), 
			'address2': this.getAddress2(), 
			'city': this.getCity(), 
			'state': this.getState(), 
			'zip': this.getZip(), 
			'country_code': this.getCountryCode(), 
			'ip_address': this.getIpAddress(), 
			'phone_number': this.getPhoneNumber(), 
			'legal_document': this.getLegalDocument(), 
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
        if (!options) options = {};
        this.fillWithData(options);

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
