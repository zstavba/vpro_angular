export class ArticleType {

    public id : number = 0;
    public title : string = '';
    public type: string = '';
    public group_name: string = '';
    public konto: string = '';
    public active: boolean = false;

    constructor () {}

    static getKeys = () => {
        let AT = Object.keys(new ArticleType());
        return AT; 
    }



}
