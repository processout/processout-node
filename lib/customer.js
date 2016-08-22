'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Customer = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the customer
     * @type string
     */
    _id: "",

    /**
     * Email of the customer
     * @type string
     */
    _email: "",

    /**
     * First name of the customer
     * @type string
     */
    _firstName: "",

    /**
     * Last name of the customer
     * @type string
     */
    _lastName: "",

    /**
     * Address of the customer
     * @type string
     */
    _address1: "",

    /**
     * Secondary address of the customer
     * @type string
     */
    _address2: "",

    /**
     * City of the customer
     * @type string
     */
    _city: "",

    /**
     * State of the customer
     * @type string
     */
    _state: "",

    /**
     * ZIP code of the customer
     * @type string
     */
    _zip: "",

    /**
     * Country code of the customer
     * @type string
     */
    _countryCode: "",

    /**
     * Wether the customer has a PIN set or not
     * @type boolean
     */
    _hasPin: false,

    /**
     * Define whether or not the customer is in sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Date at which the customer was created
     * @type string
     */
    _createdAt: "",

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
     * Get Id
     * ID of the customer
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the customer
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Email
     * Email of the customer
     * @return float
     */
    getEmail: function() {
        return this._email;
    },

    /**
     * Set Email
     * Email of the customer
     * @param float val
     * @return this
     */
    setEmail: function(val) {
        this._email = val;
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
     * Get Address1
     * Address of the customer
     * @return float
     */
    getAddress1: function() {
        return this._address1;
    },

    /**
     * Set Address1
     * Address of the customer
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
     * Get City
     * City of the customer
     * @return float
     */
    getCity: function() {
        return this._city;
    },

    /**
     * Set City
     * City of the customer
     * @param float val
     * @return this
     */
    setCity: function(val) {
        this._city = val;
        return this;
    },

    /**
     * Get State
     * State of the customer
     * @return float
     */
    getState: function() {
        return this._state;
    },

    /**
     * Set State
     * State of the customer
     * @param float val
     * @return this
     */
    setState: function(val) {
        this._state = val;
        return this;
    },

    /**
     * Get Zip
     * ZIP code of the customer
     * @return float
     */
    getZip: function() {
        return this._zip;
    },

    /**
     * Set Zip
     * ZIP code of the customer
     * @param float val
     * @return this
     */
    setZip: function(val) {
        this._zip = val;
        return this;
    },

    /**
     * Get CountryCode
     * Country code of the customer
     * @return float
     */
    getCountryCode: function() {
        return this._countryCode;
    },

    /**
     * Set CountryCode
     * Country code of the customer
     * @param float val
     * @return this
     */
    setCountryCode: function(val) {
        this._countryCode = val;
        return this;
    },

    /**
     * Get HasPin
     * Wether the customer has a PIN set or not
     * @return bool
     */
    getHasPin: function() {
        return this._hasPin;
    },

    /**
     * Set HasPin
     * Wether the customer has a PIN set or not
     * @param bool val
     * @return this
     */
    setHasPin: function(val) {
        this._hasPin = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the customer is in sandbox environment
     * @return bool
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the customer is in sandbox environment
     * @param bool val
     * @return this
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the customer was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the customer was created
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
     * @return Customer
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
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
        if (data["has_pin"])
            this.setHasPin(data["has_pin"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get the recurring invoices linked to the customer.

     * @param object options
     * @return array
     */
    recurringInvoices: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(this.getId()) + "/recurring-invoices";

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
                var body = response.body['recurring_invoices'];
                for (var i = body.length; i--;) {
                    var tmp = new RecurringInvoice(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                return resolve(a);
            });
        });
    },
    /**
     * Get the customer's tokens.

     * @param object options
     * @return array
     */
    tokens: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
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

                var a    = [];
                var body = response.body['tokens'];
                for (var i = body.length; i--;) {
                    var tmp = new Token(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                return resolve(a);
            });
        });
    },
    /**
     * Get a specific customer's token by its ID.
	 * @param string tokenId
     * @param object options
     * @return Token
     */
    token: function(tokenId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
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

                var body = response.body;
                body = body['token'];
                var obj = new Token(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Get all the customers.
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
			'state': this.getState(), 
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
     * Find a customer by its ID.
	 * @param string customerId
     * @param object options
     * @return Customer
     */
    find: function(customerId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
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

                var body = response.body;
                body = body['customer'];
                var obj = new Customer(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Save the updated customer attributes.

     * @param object options
     * @return this
     */
    save: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(this.getId()) + "";

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

                var body = response.body;
                body = body['customer'];
                return resolve(cur.fillWithData(body));
                
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
    
}, {
    /**
     * Get all the customers.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new Customer();
        return obj.all(options);
    },

    /**
     * Find a customer by its ID.
	 * @param string customerId
     * @param object options
     * @return Customer
     */
    find: function(customerId, options) {
        var obj = new Customer();
        return obj.find(customerId, options);
    },

    
});
