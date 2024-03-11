export type Currency = {
    alias: string[];
    code: string;
    color: string;
    decimal: number;
    decimal_amount: number;
    decimal_irt: number;
    for_loan: boolean;
    for_stake: boolean;
    for_test: boolean;
    high_risk: boolean;
    id: number;
    image: string;
    max_withdraw_commission: string;
    min_withdraw: string;
    networks: string[];
    price_info: any; // You can define a specific type for price_info if needed
    price_info_usdt: any; // You can define a specific type for price_info_usdt if needed
    recommend_for_deposit_weight: number;
    show_high_risk: boolean;
    title: string;
    title_fa: string;
    tradable: boolean;
    withdraw_commission: number;
    withdraw_commission_type: string;
}