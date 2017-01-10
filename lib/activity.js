'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Activity = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the activity
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the activity belongs
     * @type {object}
     */
    _project: null,

    /**
     * Title of the activity
     * @type {string}
     */
    _title: null,

    /**
     * Content of the activity
     * @type {string}
     */
    _content: null,

    /**
     * Level of the activity
     * @type {integer}
     */
    _level: null,

    /**
     * Date at which the transaction was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Activity constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Activity object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newActivity()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the activity
     * @return {float}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the activity
     * @param {float} val
     * @return {Activity}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the activity belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the activity belongs
     * @param {object} val
     * @return {Activity}
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
     * Get Title
     * Title of the activity
     * @return {float}
     */
    getTitle: function() {
        return this._title;
    },

    /**
     * Set Title
     * Title of the activity
     * @param {float} val
     * @return {Activity}
     */
    setTitle: function(val) {
        this._title = val;
        return this;
    },

    /**
     * Get Content
     * Content of the activity
     * @return {float}
     */
    getContent: function() {
        return this._content;
    },

    /**
     * Set Content
     * Content of the activity
     * @param {float} val
     * @return {Activity}
     */
    setContent: function(val) {
        this._content = val;
        return this;
    },

    /**
     * Get Level
     * Level of the activity
     * @return {int}
     */
    getLevel: function() {
        return this._level;
    },

    /**
     * Set Level
     * Level of the activity
     * @param {int} val
     * @return {Activity}
     */
    setLevel: function(val) {
        this._level = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return {float}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {float} val
     * @return {Activity}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Activity}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["title"])
            this.setTitle(data["title"]);
        if (data["content"])
            this.setContent(data["content"]);
        if (data["level"])
            this.setLevel(data["level"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get all the project activities.
     * 
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/activities";

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
                var body = response.body['activities'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newActivity();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a specific activity and fetch its data.
	 * @param string activityId
     * @param {object} options
     * @return {this}
     */
    find: function(activityId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/activities/" + encodeURI(activityId) + "";

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
                body = body['activity'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
