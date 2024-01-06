import { User } from "./user";
import { Warehouse } from "./warehouse";

export class WarehouseLocation {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_warehhouse_id: Warehouse = new Warehouse();
    public title: string = '';
    public width: string = '';
    public height: string = '';
    public length: string = '';
    public status: string = '';
    public priority: string = '';
    public stock: string = '';
    public active: boolean = false;
    public updated_at: Date = new Date();
    public update_at: Date = new Date();

    constructor() {}

    static getKeys = () => {
        let WL = Object.keys(new WarehouseLocation());
        return WL; 
    }

}



