export class AlternativeCiphers {
    
    public id ?: number = 0;
    public code ?: string = '';
    public title ?: string = ''; 
    public quantity ?: string = ''; 
    public alt_status ?: string = ''; 

    constructor() {}

    static getKeys(): string[] {
        // Use Object.keys to get the keys of an instance of the class
        let keys = Object.keys(new AlternativeCiphers());
        //console.log(keys)
        return keys;
    }
}
