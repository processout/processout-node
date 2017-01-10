'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Event = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the event
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the event belongs
     * @type {object}
     */
    _project: null,

    /**
     * Name of the event
     * @type {string}
     */
    _name: null,

    /**
     * Data object associated to the event
     * @type {object}
     */
    _data: null,

    /**
     * Define whether or not the event is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the event was fired
     * @type {string}
     */
    _firedAt: null,

    /**
     * Event constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Event object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newEvent()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the event
     * @return {float}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the event
     * @param {float} val
     * @return {Event}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the event belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the event belongs
     * @param {object} val
     * @return {Event}
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
     * Get Name
     * Name of the event
     * @return {float}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the event
     * @param {float} val
     * @return {Event}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Data
     * Data object associated to the event
     * @return {object}
     */
    getData: function() {
        return this._data;
    },

    /**
     * Set Data
     * Data object associated to the event
     * @param {object} val
     * @return {Event}
     */
    setData: function(val) {
        this._data = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the event is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the event is in sandbox environment
     * @param {bool} val
     * @return {Event}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get FiredAt
     * Date at which the event was fired
     * @return {float}
     */
    getFiredAt: function() {
        return this._firedAt;
    },

    /**
     * Set FiredAt
     * Date at which the event was fired
     * @param {float} val
     * @return {Event}
     */
    setFiredAt: function(val) {
        this._firedAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Event}
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

     * @param {object} options
     * @return {array}
     */
    fetchWebhooks: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
                    var tmp = cur._client.newWebhook();
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
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
                    var tmp = cur._client.newEvent();
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
     * @param {object} options
     * @return {this}
     */
    find: function(eventId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
    
}, {});
