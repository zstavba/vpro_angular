import { User } from "./user";

export class WarehouseUnits {

    public id: number = 0;
    public fk_leader_id: User = new User();
    public text: string = '';
    public stm: string = '';
    public type: string = '';
    public active: boolean = false;
    public created_at: Date = new Date();


    constructor(){}

    static getKeys = () => {
        let WU = Object.keys(new WarehouseUnits())
        return WU;
    }

}
