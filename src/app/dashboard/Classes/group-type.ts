import { UserSidebarComponent } from "../components/user-sidebar/user-sidebar.component";
import { User } from "./user";

export class GroupType {

    public id :number = 0;
    public fk_user_id: User  = new User();
    public ddv_type: string = '';
    public name: string = '';
    public degree: string = '';



    static  getKeys(): string[] {
        let keys = Object.keys(new GroupType());
        return keys;
    }
}
