class ProcessOutNotFoundError extends Error {
    public code: string;
    
    constructor(code: string, message: string) {
        super(message);
        this.code = code;

        this.name = "ProcessOutNotFoundError";
    }
}
export = ProcessOutNotFoundError;
