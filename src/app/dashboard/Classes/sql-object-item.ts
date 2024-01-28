enum ObjectType {
    IZJAVE = 'izjave',
    SPLOŠNO = 'splošno',
    DEFAULT = 'osnovno'
}


export class SqlObjectItem {
    
    public id : number = 0;
    public title: string = ''
    public icon: string = '';
    public type: ObjectType = ObjectType.DEFAULT;

    constructor() {}

    static setKeys = () => {
        return Object.keys(new SqlObjectItem());
    }

}
