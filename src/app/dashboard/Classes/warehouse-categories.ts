enum CategoryFormat  {
    Defaults = "defaults",
    Commercial = "commercial",
    Production = "production"
}

export class WarehouseCategories {

    public id: number = 0; 
    public title: string = '';
    public subtitle: string = '';
    public icon: string = '';
    public link: string = '';
    public type: CategoryFormat = CategoryFormat.Defaults;
    public active: boolean = false;
    public created_at: Date = new Date();

    constructor() {}

    static getKeys = () => {
        let WC = Object.keys(new WarehouseCategories());
        return WC;
    }

}
