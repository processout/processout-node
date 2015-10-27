'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');

var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');

var RequestProcessoutPublic = require('./networking/requestprocessoutpublic');


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
    

    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    
    /**
     * Get Data
     * Data associated to the event, in the form of a dictionary
     * @return array
     */
    getData: function() {
        return this._data;
    },

    /**
     * Set Data
     * Data associated to the event, in the form of a dictionary
     * @param array val
     * @return this
     */
    setData: function(val) {
        this._data = val;

        return this;
    },
    
    /**
     * Get Date
     * The date at which the event was fired
     * @return string
     */
    getDate: function() {
        return this._date;
    },

    /**
     * Set Date
     * The date at which the event was fired
     * @param string val
     * @return this
     */
    setDate: function(val) {
        this._date = val;

        return this;
    },
    
    /**
     * Get Id
     * Id of the event
     * @return string
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the event
     * @param string val
     * @return this
     */
    setId: function(val) {
        this._id = val;

        return this;
    },
    
    /**
     * Get Name
     * Name of the event
     * @return string
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the event
     * @param string val
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
        {
            this.setData(data["data"]);
        }
        
        if (data["date"])
        {
            this.setDate(data["date"]);
        }
        
        if (data["id"])
        {
            this.setId(data["id"]);
        }
        
        if (data["name"])
        {
            this.setName(data["name"]);
        }
        
        if (data["sandbox"])
        {
            this.setSandbox(data["sandbox"]);
        }
        

        return this;
    },

    
    /**
     * Get the information related to the specific event.
	 * @param string id
     * @return this
     */
    find: function(id) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events/" + encodeURI(id) + "";

        var data = {

        };

        
        var req = request.get(path, data);
        

        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                
                return resolve(cur.fillWithData(response.body));
                
            });
        });
    },
    
    /**
     * Set the specific event as processed.

     * @return bool
     */
    markProcessed: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events/" + encodeURI(this.getId()) + "";

        var data = {

        };

        
        var req = request.delete(path, data);
        

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
     * @return array
     */
    pull: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events";

        var data = {

        };

        
        var req = request.get(path, data);
        

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
                var body = response.body;
                for(var index in body)
                {
                    var tmp = new Event(cur._instance);
                    tmp.fillWithData(body[index]);
                    a.push(tmp);
                }

                return resolve(a);
                
            });
        });
    },
    
    /**
     * Set all the events as processed.
     * 
     * @return bool
     */
    setAllProcessed: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/events";

        var data = {

        };

        
        var req = request.delete(path, data);
        

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
     * @return this
     */
    find: function(id) {
        var obj = new Event();
        return obj.find(id);
    }
    
    
    
    
    
    /**
     * Get the 15 oldest events pending processing.
     * 
     * @return array
     */
    pull: function() {
        var obj = new Event();
        return obj.pull();
    }
    
    
    
    /**
     * Set all the events as processed.
     * 
     * @return bool
     */
    setAllProcessed: function() {
        var obj = new Event();
        return obj.setAllProcessed();
    }
    
    
});
