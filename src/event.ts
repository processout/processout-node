// The content of this file was automatically generated

import Promise = require("promise");
import ProcessOut = require("./processout");
import Response = require("./networking/response");
import Request = require("./networking/request");

class Event {
    private client: ProcessOut = null;

    /**
     * ID of the event
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the event belongs
     * @type {any}
     */
    private project: any = null;

    /**
     * ID of the project to which the event belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Name of the event
     * @type {string}
     */
    private name: string = null;

    /**
     * Data object associated to the event
     * @type {any}
     */
    private data: any = null;

    /**
     * Define whether or not the event is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the event was fired
     * @type {string}
     */
    private firedAt: string = null;

    /**
     * Event constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Event) {
        if (typeof client === 'undefined')
            throw new Error("The Event object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newEvent()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Event";
    }

    /**
     * Get Id
     * ID of the event
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the event
     * @param {string} val
     * @return {Event}
     */
    public setId(val: string): Event {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the event belongs
     * @return {any}
     */
    public getProject(): any {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the event belongs
     * @param {any} val
     * @return {Event}
     */
    public setProject(val: any): Event {
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
     * ID of the project to which the event belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the event belongs
     * @param {string} val
     * @return {Event}
     */
    public setProjectId(val: string): Event {
        this.projectId = val;
        return this;
    }

    /**
     * Get Name
     * Name of the event
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the event
     * @param {string} val
     * @return {Event}
     */
    public setName(val: string): Event {
        this.name = val;
        return this;
    }

    /**
     * Get Data
     * Data object associated to the event
     * @return {any}
     */
    public getData(): any {
        return this.data;
    }

    /**
     * Set Data
     * Data object associated to the event
     * @param {any} val
     * @return {Event}
     */
    public setData(val: any): Event {
        this.data = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the event is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the event is in sandbox environment
     * @param {boolean} val
     * @return {Event}
     */
    public setSandbox(val: boolean): Event {
        this.sandbox = val;
        return this;
    }

    /**
     * Get FiredAt
     * Date at which the event was fired
     * @return {string}
     */
    public getFiredAt(): string {
        return this.firedAt;
    }

    /**
     * Set FiredAt
     * Date at which the event was fired
     * @param {string} val
     * @return {Event}
     */
    public setFiredAt(val: string): Event {
        this.firedAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Event}
     */
    public fillWithData(data: any): Event {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["data"])
            this.setData(data["data"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["fired_at"])
            this.setFiredAt(data["fired_at"]);
        return this;
    }

    /**
     * Get all the webhooks of the event.

     * @param {any} options
     * @return {array}
     */
    public fetchWebhooks(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
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
                    var tmp = cur.client.newWebhook();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            }).on('timeout', function(ms){
                reject("request timeout after " + ms + "ms")
            });
        });
    }
    /**
     * Get all the events.
     * 
     * @param {any} options
     * @return {array}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
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
                    var tmp = cur.client.newEvent();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            }).on('timeout', function(ms){
                reject("request timeout after " + ms + "ms")
            });
        });
    }
    /**
     * Find an event by its ID.
	 * @param string eventId
     * @param {any} options
     * @return {this}
     */
    public find(eventId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
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
            }).on('timeout', function(ms){
                reject("request timeout after " + ms + "ms")
            });
        });
    }
    /**
     * Find an event by the Resource ID that generated it.
	 * @param string resourceId
     * @param {any} options
     * @return {array}
     */
    public findByResourceId(resourceId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/events/by_resource_id/" + encodeURI(resourceId) + "";

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
                    var tmp = cur.client.newEvent();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            }).on('timeout', function(ms){
                reject("request timeout after " + ms + "ms")
            });
        });
    }
    
}
export = Event;
