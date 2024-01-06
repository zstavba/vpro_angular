export class Sectors {

    public id: number = 0;
    public id_type: string = '';
    public name: string = '';
    public status: string = '';
    public active: boolean = false;
    // Check if you can hide it ? 
    public description: string = '';
    public attribute: string = '';


    
    constructor() {}

    static getKeys(): string[] {
        // Use Object.keys to get the keys of an instance of the class
        let keys = Object.keys(new Sectors());
        //console.log(keys)
        return keys;
    }
}
