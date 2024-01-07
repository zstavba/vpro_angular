import { User } from "./user";

export class Classification {
    
    public id: number = 0;
    public classification_id: string = '';
    public fk_user_id: User = new User();
    public title: string = '';
    public status: string = '';
    public network: string = '';
    public active: boolean = false;

    constructor(){}

    static getKeys = () => {
        let CS = Object.keys(new Classification());
        return CS; 
    }



}
