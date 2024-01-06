import { User } from "./user";

export class CostCities {

    public id: number = 0;
    public fk_user_id: User = new User();
    public title: string = '';
    public stm: string = '';
    public status: string = '';
    public type: string  =  '';
    public point: string = '';
    public active: boolean = false; 
    public above_stm: string = '';
    public created_at: Date = new Date();

    constructor() {}

    static getKeys = () => {
        let CC = Object.keys(new CostCities());
        return CC; 
    }

}
