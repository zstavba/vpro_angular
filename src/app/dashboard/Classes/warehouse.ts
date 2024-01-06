import { User } from "./user";
import { WarehouseUnits } from "./warehouse-units";

export class Warehouse {

    public id: number = 0;
    public fk_user_id: User = new User();
    public title: string = '';
    public status: string = '';
    public movements: string  = '';
    public transfer: string = '';
    public fk_unit_id: WarehouseUnits = new WarehouseUnits();
    public active: boolean = false;
    public updated_at: Date = new Date();
    public created_at: Date = new Date();


    constructor() {}

    static getKeys = () => {
        let W = Object.keys(new Warehouse());
        return W; 
    }

}
