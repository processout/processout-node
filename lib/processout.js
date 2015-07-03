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

    getProjectId: function() {
        return this._projectId;
    },

    getProjectKey: function() {
        return this._projectKey;
    }
}, {
    HOST:            'https://api.processout.com/v1',
    defaultInstance: null,

    getDefault: function() {
        if(ProcessOut.defaultInstance === null)
            throw new Error('You need to define a default ProcessOut object (ProcessOut.setDefault()).');

        return ProcessOut.defaultInstance;
    },

    setDefault: function(processout) {
        defaultInstance = processout;
    }
});