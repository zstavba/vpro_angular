export class ZipCode {

    public id: number = 0;
    public name: string = '';
    public attribute: string = '';

    constructor () {}


    static getKeys = () => {
        let ZC = Object.keys(new ZipCode());
        return ZC;
    }

}
