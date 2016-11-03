'use strict';

// The content of this file was automatically generated

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
     * Project to which the event belongs
     * @type object
     */
    _project: null,

    /**
     * Name of the event
     * @type string
     */
    _name: "",

    /**
     * Data object associated to the event
     * @type object
     */
    _data: null,

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
     * Get Project
     * Project to which the event belongs
     * @return object
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the event belongs
     * @param object val
     * @return this
     */
    setProject: function(val) {
        if (typeof val === 'object')
            this._project = val;
        else {
            var obj = new Project(this._instance);
            obj.fillWithData(val);
            this._project = obj;
        }
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
     * Data object associated to the event
     * @return object
     */
    getData: function() {
        return this._data;
    },

    /**
     * Set Data
     * Data object associated to the event
     * @param object val
     * @return this
     */
    setData: function(val) {
        this._data = val;
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
        if (data["project"])
            this.setProject(data["project"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["data"])
            this.setData(data["data"]);
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
        var path    = "/events/" + encodeURI(this.getId()) + "/webhooks";

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
                var body = response.body['webhooks'];
                for (var i = body.length; i--;) {
                    var tmp = new Webhook(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
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
                
                var returnValues = [];

                
                var a    = [];
                var body = response.body['events'];
                for (var i = body.length; i--;) {
                    var tmp = new Event(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find an event by its ID.
	 * @param string eventId
     * @param object options
     * @return this
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
                
                var returnValues = [];

                
                var body = response.body;
                body = body['event'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
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
     * @return this
     */
    find: function(eventId, options) {
        var obj = new Event();
        return obj.find(eventId, options);
    },

    
});
