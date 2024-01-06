import { User } from "./user";
import { WarehouseUnits } from "./warehouse-units";

export class OrganizationalUnits {


    public id: number = 0;
    public title: string = '';
    public status: string = '';
    public type: string  = '';
    public active: boolean = false;
    public point: boolean = false;
    public fk_unit_id: WarehouseUnits = new WarehouseUnits();
    public fk_user_id: User = new User();
    public created_at: Date = new Date();


    constructor() {}

    static getKeys = () => {
        let OU = Object.keys(new OrganizationalUnits());

        return OU; 
    }

}
