import ProcessOut = require('./processout');
import * as p from '.';
declare class Event {
    private client;
    /**
     * ID of the event
     * @type {string}
     */
    private id;
    /**
     * Project to which the event belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the event belongs
     * @type {string}
     */
    private projectId;
    /**
     * Name of the event
     * @type {string}
     */
    private name;
    /**
     * Data object associated to the event
     * @type {any}
     */
    private data;
    /**
     * Define whether or not the event is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the event was fired
     * @type {string}
     */
    private firedAt;
    /**
     * Event constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Event);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the event
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the event
     * @param {string} val
     * @return {Event}
     */
    setId(val: string): Event;
    /**
     * Get Project
     * Project to which the event belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the event belongs
     * @param {p.Project} val
     * @return {Event}
     */
    setProject(val: p.Project): Event;
    /**
     * Get ProjectId
     * ID of the project to which the event belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the event belongs
     * @param {string} val
     * @return {Event}
     */
    setProjectId(val: string): Event;
    /**
     * Get Name
     * Name of the event
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the event
     * @param {string} val
     * @return {Event}
     */
    setName(val: string): Event;
    /**
     * Get Data
     * Data object associated to the event
     * @return {any}
     */
    getData(): any;
    /**
     * Set Data
     * Data object associated to the event
     * @param {any} val
     * @return {Event}
     */
    setData(val: any): Event;
    /**
     * Get Sandbox
     * Define whether or not the event is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the event is in sandbox environment
     * @param {boolean} val
     * @return {Event}
     */
    setSandbox(val: boolean): Event;
    /**
     * Get FiredAt
     * Date at which the event was fired
     * @return {string}
     */
    getFiredAt(): string;
    /**
     * Set FiredAt
     * Date at which the event was fired
     * @param {string} val
     * @return {Event}
     */
    setFiredAt(val: string): Event;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Event}
     */
    fillWithData(data: any): Event;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get all the webhooks of the event.

     * @param {any} options
     * @return {Promise<any>}
     */
    fetchWebhooks(options: any): Promise<any>;
    /**
     * Get all the events.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    all(options: any): Promise<any>;
    /**
     * Find an event by its ID.
     * @param string eventId
     * @param {any} options
     * @return {Promise<any>}
     */
    find(eventId: string, options: any): Promise<any>;
}
export = Event;
//# sourceMappingURL=event.d.ts.map