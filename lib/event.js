'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var Event = module.exports = Base.extend({
    _instance: null,

    /**
     * Data associated to the event, in the form of a dictionary
     * @type dictionary
     */
    _data: {},

    /**
     * The date at which the event was fired
     * @type string
     */
    _date: "",

    /**
     * Id of the event
     * @type string
     */
    _id: "",

    /**
     * Name of the event
     * @type string
     */
    _name: "",

    /**
     * Whether or not the event was fired in the sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Event constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Data
     * Data associated to the event, in the form of a dictionary
     * @return object
     */
    getData: function() {
        return this._data;
    },

    /**
     * Set Data
     * Data associated to the event, in the form of a dictionary
     * @param object val
     * @return this
     */
    setData: function(val) {
        this._data = val;
        return this;
    },

    /**
     * Get Date
     * The date at which the event was fired
     * @return float
     */
    getDate: function() {
        return this._date;
    },

    /**
     * Set Date
     * The date at which the event was fired
     * @param float val
     * @return this
     */
    setDate: function(val) {
        this._date = val;
        return this;
    },

    /**
     * Get Id
     * Id of the event
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the event
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Name
     * Name of the event
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the event
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Sandbox
     * Whether or not the event was fired in the sandbox environment
     * @return bool
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Whether or not the event was fired in the sandbox environment
     * @param bool val
     * @return this
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Event
     */
    fillWithData: function(data) {
        if (data["data"])
            this.setData(data["data"]);
        if (data["date"])
            this.setDate(data["date"]);
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        return this;
    },

    /**
     * Get the information related to the specific event.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events/" + encodeURI(id) + "";

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
                body = body['event'];
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    /**
     * Set the specific event as processed.

     * @param object options
     * @return bool
     */
    markProcessed: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events/" + encodeURI(this.getId()) + "";

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
     * Get the 15 oldest events pending processing.
     * 
     * @param object options
     * @return array
     */
    pull: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events";

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
                var body = response.body['events'];
                for (var i = body.length; i--;) {
                    var tmp = new Event(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                return resolve(a);
            });
        });
    },
    /**
     * Set all the events as processed.
     * 
     * @param object options
     * @return bool
     */
    setAllProcessed: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events";

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
     * Get the information related to the specific event.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var obj = new Event();
        return obj.find(id, options);
    },

    /**
     * Get the 15 oldest events pending processing.
     * 
     * @param object options
     * @return array
     */
    pull: function(options) {
        var obj = new Event();
        return obj.pull(options);
    },

    /**
     * Set all the events as processed.
     * 
     * @param object options
     * @return bool
     */
    setAllProcessed: function(options) {
        var obj = new Event();
        return obj.setAllProcessed(options);
    },

    
});
