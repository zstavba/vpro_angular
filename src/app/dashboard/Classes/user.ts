enum SEX {
    male = 'MOŠKI',
    female = 'ŽENSKA',
    default = ''
}

export class User {

    public id: number = 0;
    public username: string = '';
    public user_identification = '';
    public firstName: string = '';
    public lastName: string = '';
    public email: string = '';
    public password: string = '';
    public sex: string = SEX.default;
    public age: Date = new Date();


    constructor (){

    }

    static  getKeys(): string[] {
        let keys = Object.keys(new User());
        return keys; 
    }

}
