import ProcessOut = require('./processout');
import * as p from '.';
declare class Activity {
    private client;
    /**
     * ID of the activity
     * @type {string}
     */
    private id;
    /**
     * Project to which the activity belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the activity belongs
     * @type {string}
     */
    private projectId;
    /**
     * Title of the activity
     * @type {string}
     */
    private title;
    /**
     * Content of the activity
     * @type {string}
     */
    private content;
    /**
     * Level of the activity
     * @type {number}
     */
    private level;
    /**
     * Date at which the transaction was created
     * @type {string}
     */
    private createdAt;
    /**
     * Activity constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Activity);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the activity
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the activity
     * @param {string} val
     * @return {Activity}
     */
    setId(val: string): Activity;
    /**
     * Get Project
     * Project to which the activity belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the activity belongs
     * @param {p.Project} val
     * @return {Activity}
     */
    setProject(val: p.Project): Activity;
    /**
     * Get ProjectId
     * ID of the project to which the activity belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the activity belongs
     * @param {string} val
     * @return {Activity}
     */
    setProjectId(val: string): Activity;
    /**
     * Get Title
     * Title of the activity
     * @return {string}
     */
    getTitle(): string;
    /**
     * Set Title
     * Title of the activity
     * @param {string} val
     * @return {Activity}
     */
    setTitle(val: string): Activity;
    /**
     * Get Content
     * Content of the activity
     * @return {string}
     */
    getContent(): string;
    /**
     * Set Content
     * Content of the activity
     * @param {string} val
     * @return {Activity}
     */
    setContent(val: string): Activity;
    /**
     * Get Level
     * Level of the activity
     * @return {number}
     */
    getLevel(): number;
    /**
     * Set Level
     * Level of the activity
     * @param {number} val
     * @return {Activity}
     */
    setLevel(val: number): Activity;
    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {string} val
     * @return {Activity}
     */
    setCreatedAt(val: string): Activity;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Activity}
     */
    fillWithData(data: any): Activity;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get all the project activities.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    all(options: any): Promise<any>;
    /**
     * Find a specific activity and fetch its data.
     * @param string activityId
     * @param {any} options
     * @return {Promise<any>}
     */
    find(activityId: string, options: any): Promise<any>;
}
export = Activity;
//# sourceMappingURL=activity.d.ts.map