export class Currencies {

    public id: number = 0;
    public id_type: string = '';
    public name: string = '';
    public country: string = '';
    public code: string = '';
    public status: string = '';
    public active: boolean = false;


    constructor(){}

    static getKeys = () => {
        let C = Object.keys(new Currencies());
        return C; 
    }



}
