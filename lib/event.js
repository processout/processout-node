'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Event = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the event
     * @type string
     */
    _id: "",

    /**
     * Name of the event
     * @type string
     */
    _name: "",

    /**
     * Data associated to the event, in the form of a dictionary
     * @type dictionary
     */
    _data: {},

    /**
     * Define whether or not event was processed
     * @type boolean
     */
    _processed: false,

    /**
     * Define whether or not the event is in sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Date at which the event was fired
     * @type string
     */
    _firedAt: "",

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
     * Get Id
     * ID of the event
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the event
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
     * Get Processed
     * Define whether or not event was processed
     * @return bool
     */
    getProcessed: function() {
        return this._processed;
    },

    /**
     * Set Processed
     * Define whether or not event was processed
     * @param bool val
     * @return this
     */
    setProcessed: function(val) {
        this._processed = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the event is in sandbox environment
     * @return bool
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the event is in sandbox environment
     * @param bool val
     * @return this
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get FiredAt
     * Date at which the event was fired
     * @return float
     */
    getFiredAt: function() {
        return this._firedAt;
    },

    /**
     * Set FiredAt
     * Date at which the event was fired
     * @param float val
     * @return this
     */
    setFiredAt: function(val) {
        this._firedAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Event
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["data"])
            this.setData(data["data"]);
        if (data["processed"])
            this.setProcessed(data["processed"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["fired_at"])
            this.setFiredAt(data["fired_at"]);
        return this;
    },

    /**
     * Get all the webhooks of the event.

     * @param object options
     * @return array
     */
    webhooks: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events/" + encodeURI(this.getEventId()) + "/webhooks";

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
                var body = response.body['webhooks'];
                for (var i = body.length; i--;) {
                    var tmp = new Webhook(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                return resolve(a);
            });
        });
    },
    /**
     * Get all the events.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
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
     * Find an event by its ID.
	 * @param string eventId
     * @param object options
     * @return Event
     */
    find: function(eventId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events/" + encodeURI(eventId) + "";

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
                var obj = new Event(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Mark the event as processed.

     * @param object options
     * @return bool
     */
    markProcessed: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events/" + encodeURI(this.getEventId()) + "";

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

                return resolve(response.isSuccess());
                
            });
        });
    },
    
}, {
    /**
     * Get all the events.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new Event();
        return obj.all(options);
    },

    /**
     * Find an event by its ID.
	 * @param string eventId
     * @param object options
     * @return Event
     */
    find: function(eventId, options) {
        var obj = new Event();
        return obj.find(eventId, options);
    },

    
});
