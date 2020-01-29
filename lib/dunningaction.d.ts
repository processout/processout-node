import ProcessOut = require('./processout');
declare class DunningAction {
    private client;
    /**
     * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
     * @type {string}
     */
    private action;
    /**
     * Delay in days that should be waited before executing the next dunning action
     * @type {number}
     */
    private delayInDays;
    /**
     * DunningAction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: DunningAction);
    getProcessOutObjectClass(): string;
    /**
     * Get Action
     * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
     * @return {string}
     */
    getAction(): string;
    /**
     * Set Action
     * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
     * @param {string} val
     * @return {DunningAction}
     */
    setAction(val: string): DunningAction;
    /**
     * Get DelayInDays
     * Delay in days that should be waited before executing the next dunning action
     * @return {number}
     */
    getDelayInDays(): number;
    /**
     * Set DelayInDays
     * Delay in days that should be waited before executing the next dunning action
     * @param {number} val
     * @return {DunningAction}
     */
    setDelayInDays(val: number): DunningAction;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {DunningAction}
     */
    fillWithData(data: any): DunningAction;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = DunningAction;
//# sourceMappingURL=dunningaction.d.ts.map