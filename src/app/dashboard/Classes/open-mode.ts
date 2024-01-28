export class OpenMode {

    public id: number =  0;
    public title: string = '';
    public status: string = '';
    public attribute: string = '';
    public active: boolean = false;

    constructor() {}

    static getKeys = () => {
        return Object.keys(new OpenMode());
    }


}
