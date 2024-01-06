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
    public fk_user_id: User = new User();
    public fk_country_id: Country = new Country();
    public fk_zip_cod: ZipCode =  new ZipCode();
    public emsho: string = '';
    public tax_number: string = '';
    public phone_number: string = '';
    public adress: string = '';
    public profile_image: UserType = UserType.guest;

    constructor(){}

    static getKeys = () => {
        let UI = Object.keys(new UserInformation());
        return UI;
    }



}

