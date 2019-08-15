// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Activity {
    private client: ProcessOut = null;

    /**
     * ID of the activity
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the activity belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the activity belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Title of the activity
     * @type {string}
     */
    private title: string = null;

    /**
     * Content of the activity
     * @type {string}
     */
    private content: string = null;

    /**
     * Level of the activity
     * @type {number}
     */
    private level: number = null;

    /**
     * Date at which the transaction was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Activity constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Activity) {
        if (typeof client === 'undefined')
            throw new Error("The Activity object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newActivity()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Activity";
    }

    /**
     * Get Id
     * ID of the activity
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the activity
     * @param {string} val
     * @return {Activity}
     */
    public setId(val: string): Activity {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the activity belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the activity belongs
     * @param {p.Project} val
     * @return {Activity}
     */
    public setProject(val: p.Project): Activity {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    }

    /**
     * Get ProjectId
     * ID of the project to which the activity belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the activity belongs
     * @param {string} val
     * @return {Activity}
     */
    public setProjectId(val: string): Activity {
        this.projectId = val;
        return this;
    }

    /**
     * Get Title
     * Title of the activity
     * @return {string}
     */
    public getTitle(): string {
        return this.title;
    }

    /**
     * Set Title
     * Title of the activity
     * @param {string} val
     * @return {Activity}
     */
    public setTitle(val: string): Activity {
        this.title = val;
        return this;
    }

    /**
     * Get Content
     * Content of the activity
     * @return {string}
     */
    public getContent(): string {
        return this.content;
    }

    /**
     * Set Content
     * Content of the activity
     * @param {string} val
     * @return {Activity}
     */
    public setContent(val: string): Activity {
        this.content = val;
        return this;
    }

    /**
     * Get Level
     * Level of the activity
     * @return {number}
     */
    public getLevel(): number {
        return this.level;
    }

    /**
     * Set Level
     * Level of the activity
     * @param {number} val
     * @return {Activity}
     */
    public setLevel(val: number): Activity {
        this.level = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {string} val
     * @return {Activity}
     */
    public setCreatedAt(val: string): Activity {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Activity}
     */
    public fillWithData(data: any): Activity {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["title"])
            this.setTitle(data["title"]);
        if (data["content"])
            this.setContent(data["content"]);
        if (data["level"])
            this.setLevel(data["level"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Get all the project activities.
     * 
     * @param {any} options
     * @return {array}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/activities";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = response.body['activities'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newActivity();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };

            var req = request.get(path, data, options, callback);
            });
    }
    /**
     * Find a specific activity and fetch its data.
	 * @param string activityId
     * @param {any} options
     * @return {this}
     */
    public find(activityId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/activities/" + encodeURI(activityId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['activity'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            var req = request.get(path, data, options, callback);
            });
    }
    
}
export = Activity;
