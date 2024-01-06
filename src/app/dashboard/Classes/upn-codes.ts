export class UpnCodes {

    public id: number = 0;
    public type: string = '';
    public status: string = '';
    public active: boolean = false;
    public description: string = '';
    public attribute: string = '';

    constructor() {}


    static getKeys = () => {
        let UPN = Object.keys(new UpnCodes());
        return UPN; 
    }


}
