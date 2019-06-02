export interface Token {
    symbol: string,
    balance: number,
    rate: number,
    currentValue: number;
}
export interface Account {
    address: string,
    ETH: {
        balance: number,
        rate: number,
        currentValue: number
    },
    totalTokensBalance: number,
    tokens: Token[]
}