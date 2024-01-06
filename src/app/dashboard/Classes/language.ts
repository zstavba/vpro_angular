export class Language {

    public id: number = 0;
    public name: string = '';
    public attribute: string = '';

    constructor () {}

    static getKeys = () => {
        let LA = Object.keys(new Language());
        return LA;
    }
}
