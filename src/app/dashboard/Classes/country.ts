export class Country {
    
    public id: number = 0;
    public name: string = '';
    public type: string = '';
    public name_ang: string = '';
    public code: string = '';
    public costums: string = '';
    public eco_group: string = '';
    public contignent : string = ''; 
    public origin: string = ''; 
    public status: string = '';

    constructor() {}

    static getKeys = () => {
        let C = Object.keys(new Country());
        return C; 
    }

}
