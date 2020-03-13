export class Trade {
    unitPrice: number;
    amount: number;
    isLong: boolean;

    constructor(unitPrice: number, amount: number, isLong: boolean){
        this.unitPrice = unitPrice;
        this.amount = amount;
        this.isLong = isLong;
    }

    simulateProfit(soldPrice:number): number{
        return soldPrice * this.amount - this.amount * this.unitPrice;
    }
}