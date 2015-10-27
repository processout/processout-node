'use strict';

var Base = require('basejs');

var ProcessOut = module.exports = Base.extend({
    
    /**
     * ProcessOut's project id
     * @type string
     */
    _projectId: '',
    
    /**
     * ProcessOut's project secret key
     * @type string
     */
    _projectSecret: '',
    

    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     *
     * @class ProcessOut
     */
    constructor: function() {
        
        this._projectId = ""
        
        this._projectSecret = ""
        
    },

    
    /**
     * Get projectId
     * @return string
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set projectId
     * @return ProcessOut
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },
    
    /**
     * Get projectSecret
     * @return string
     */
    getProjectSecret: function() {
        return this._projectSecret;
    },

    /**
     * Set projectSecret
     * @return ProcessOut
     */
    setProjectSecret: function(val) {
        this._projectSecret = val;
        return this;
    },
    
}, {
    /**
     * ProcessOut api host
     * @type string
     */
    HOST:            'https://api.processout.com/v1',
    _defaultInstance: null,

    /**
     * (static) Get the default ProcessOut instance
     * @return ProcessOut ProcessOut instance
     */
    getDefault: function() {
        if (ProcessOut._defaultInstance === null)
            throw new Error('You need to define a default ProcessOut object (ProcessOut.setDefault()).');

        return ProcessOut._defaultInstance;
    },

    /**
     * (static) Set the default ProcessOut instance
     * @param ProcessOut processOut
     */
    setDefault: function(processOut) {
        ProcessOut._defaultInstance = processOut;
    }
});
