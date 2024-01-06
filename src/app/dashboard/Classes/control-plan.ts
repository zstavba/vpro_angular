import { Sectors } from "./sectors";
import { User } from "./user";

export class ControlPlan {

    public id: number = 0;
    public fk_sector_id: Sectors = new Sectors();
    public fk_user_id: User = new User();
    public title: string = '';
    public description: string = '';
    public type: string = '';
    public active: boolean = false;


    constructor() {}
    

    static geeKeys = () => {
        let CP = Object.keys(new ControlPlan())
        return CP;
    }


}
