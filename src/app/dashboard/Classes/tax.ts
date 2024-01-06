import { User } from "./user";

export class Tax {

    public id: number = 0;
    public fk_user_id: User = new User();
    public ddv_type: string = '';
    public name: string = '';
    public degree: string = '';

    constructor() {}

    static getKeys = () =>  {
        let keys= Object.keys(new Tax());
        return keys;
    }

}
