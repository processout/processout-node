'use strict';

var Base = require('basejs');

var ProcessOut = module.exports = Base.extend({
    _projectId:  '',
    _projectKey: '',

    /**
     * ProcessOut is the main component of the ProcessOut library. It contains
     * the API credentials of the project.
     *
     * @class ProcessOut
     * @param projectId
     * @param projectSecret
     */
    constructor: function(projectId, projectKey) {
        this._projectId  = projectId;
        this._projectKey = projectKey;
    },

    /**
     * Return the project id of the current ProcessOut instance
     * @return {string} project id
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Return the project key of the current ProcessOut instance
     * @return {string} project key
     */
    getProjectKey: function() {
        return this._projectKey;
    }
}, {
    /**
     * ProcessOut api host
     * @type {string}
     */
    HOST:            'https://api.processout.com/v1',
    _defaultInstance: null,

    /**
     * (static) Get the default ProcessOut instance
     * @return {ProcessOut} ProcessOut instance
     */
    getDefault: function() {
        if(ProcessOut._defaultInstance === null)
            throw new Error('You need to define a default ProcessOut object (ProcessOut.setDefault()).');

        return ProcessOut._defaultInstance;
    },

    /**
     * (static) Set the default ProcessOut instance
     * @param {ProcessOut} processout
     */
    setDefault: function(processout) {
        ProcessOut._defaultInstance = processout;
    }
});