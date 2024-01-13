import { User } from "./user";

export class Group {

    public id: string = '';
    public fk_user_id: User = new User();
    public type: string = '';
    public name: string = '';
    public active: string = '';
    public status: string = '';
    public idg: string = '';

    constructor() {}

    static getKeys = () => {
        let GT = Object.keys(new Group());

        return GT; 
    }


}
