import { Country } from "./country";
import { User } from "./user";
import { ZipCode } from "./zip-code";

enum UserType {
    admin =  "admin",
    partner = "partner",
    worker = "worker",
    guest =  "guest",
    spenders = "spenders"
};

export class UserInformation {

    public id: number = 0;
    public user: User = new User();
    public fk_country_id: Country = new Country();
    public fk_zip_cod: ZipCode =  new ZipCode();
    public emsho: string = '';
    public tax_number: string = '';
    public phone_number: string = '';
    public adress: string = '';
    public user_type: UserType = UserType.guest;
    public profile_image: string = '';
    
    constructor(){}

    static getKeys = () => {
        let UI = Object.keys(new UserInformation());
        return UI;
    }



}

