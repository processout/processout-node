'use strict';

var restler = require('restler');

var defaultInstance = null;

module.exports.ProcessOut = ProcessOut;

/**
 * ProcessOut is the main component of the ProcessOut library. It contains
 * the API credentials of the project.
 *
 * @class ProcessOut
 * @param projectId
 * @param projectSecret
 */
function ProcessOut(projectId, projectSecret) {
    this._projectId     = projectId;
    this._projectSecret = projectSecret;
}

ProcessOut.HOST = 'https://api.processout.com/v1';


ProcessOut.prototype.getProjectId = function() {
    return this._projectId;
};

ProcessOut.prototype.getProjectSecret = function() {
    return this._projectSecret;
};

ProcessOut.getDefault = function() {
    if(defaultInstance === null)
        throw new Error('You need to define a default ProcessOut object (ProcessOut.setDefault()');

    return defaultInstance;
};

ProcessOut.setDefault = function(processout) {
    defaultInstance = processout;
}