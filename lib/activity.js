'use strict';

// The content of this file was automatically generated

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Activity = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the activity
     * @type string
     */
    _id: "",

    /**
     * Project to which the activity belongs
     * @type object
     */
    _project: null,

    /**
     * Title of the activity
     * @type string
     */
    _title: "",

    /**
     * Content of the activity
     * @type string
     */
    _content: "",

    /**
     * Level of the activity
     * @type integer
     */
    _level: 0,

    /**
     * Date at which the transaction was created
     * @type string
     */
    _createdAt: "",

    /**
     * Activity constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the activity
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the activity
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the activity belongs
     * @return object
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the activity belongs
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
     * Get Title
     * Title of the activity
     * @return float
     */
    getTitle: function() {
        return this._title;
    },

    /**
     * Set Title
     * Title of the activity
     * @param float val
     * @return this
     */
    setTitle: function(val) {
        this._title = val;
        return this;
    },

    /**
     * Get Content
     * Content of the activity
     * @return float
     */
    getContent: function() {
        return this._content;
    },

    /**
     * Set Content
     * Content of the activity
     * @param float val
     * @return this
     */
    setContent: function(val) {
        this._content = val;
        return this;
    },

    /**
     * Get Level
     * Level of the activity
     * @return int
     */
    getLevel: function() {
        return this._level;
    },

    /**
     * Set Level
     * Level of the activity
     * @param int val
     * @return this
     */
    setLevel: function(val) {
        this._level = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the transaction was created
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
     * @return Activity
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
     * @param object options
     * @return array
     */
    all: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
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
                    var tmp = new Activity(cur._instance);
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
     * @param object options
     * @return this
     */
    find: function(activityId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
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
    
}, {
    /**
     * Get all the project activities.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new Activity();
        return obj.all(options);
    },

    /**
     * Find a specific activity and fetch its data.
	 * @param string activityId
     * @param object options
     * @return this
     */
    find: function(activityId, options) {
        var obj = new Activity();
        return obj.find(activityId, options);
    },

    
});
