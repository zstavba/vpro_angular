import { Currencies } from "./currencies";

enum ExchangeRateType  {
    ONE = '001',
    TWO = '002',
    THREE = '003',
    FOUR = '004',
    DEFAULT = 0
}

export class ExchangeRates {

    public id: number = 0;
    public fk_currency_id: Currencies = new Currencies();
    public status: string = '';
    public type: ExchangeRateType = ExchangeRateType.DEFAULT;
    public course: string = '';
    public unit: string = '';
    public active: boolean = false;
    public updated_at: Date = new Date();
    public created_at: Date = new Date();

    constructor() {}

    static getKeys = () => {
        return Object.keys(new ExchangeRates());
    }

}
