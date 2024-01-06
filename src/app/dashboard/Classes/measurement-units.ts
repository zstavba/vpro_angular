import { User } from "./user";

export class MeasurementUnits {

    public id: number = 0;
    public fk_user_id: User = new User();
    public name:string = '';
    public em_ul: string = '';
    public active: string = '';
    public idg: string =  '';

    constructor() {}

    static getKeys = () => {
        let MU = Object.keys(new MeasurementUnits())
        return MU; 
    }

}
