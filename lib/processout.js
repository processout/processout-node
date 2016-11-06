'use strict';

var Base = require('basejs');

var ProcessOut = module.exports = Base.extend({
    /**
     * ProcessOut api host
     * @type string
     */
    _host: 'https://api.processout.com',

    /**
     * ProcessOut project ID
     * @type string
     */
    _projectId: '',

    /**
     * ProcessOut project secret key
     * @type string
     */
    _projectSecret: '',

    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     *
     * @class ProcessOut
     */
    constructor: function(projectId, projectSecret) {
        this._projectId = projectId;
        this._projectSecret = projectSecret;

        if (!ProcessOut._defaultInstance)
            ProcessOut.setDefault(this);
    },

    /**
     * Get the library host URL
     * @return string
     */
    getHost: function() {
        return this._host;
    },

    /**
     * Set the library host URL
     * @return ProcessOut
     */
    setHost: function(host) {
        this._host = host;
        return this;
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