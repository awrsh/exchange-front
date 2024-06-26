
export type Currency = {
    active: boolean;
    alias: string[];
    bitasia_active: boolean;
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
    network_ids: { id: number; create_date: string }[];
    networks: { id: number; code: string; title: string; title_fa: string }[];
    price_info_amount: string;
    price_info_change: string;
    price_info_market_amount: string;
    price_info_market_value: string;
    price_info_max: string;
    price_info_mean: string;
    price_info_min: string;
    price: string;
    price_info_time: string;
    price_info_usdt_amount: string;
    price_info_usdt_change: string;
    price_info_usdt_market_amount: string;
    price_info_usdt_market_value: string;
    price_info_usdt_max: string;
    price_info_usdt_mean: string;
    price_info_usdt_min: string;
    price_info_usdt_price: string;
    price_info_usdt_time: string;
    price_info_usdt_value: string;
    price_info_value: string;
    recommend_for_deposit_weight: number;
    show_high_risk: boolean;
    title: string;
    title_fa: string;
    tradable: boolean;
    withdraw_commission: string;
    withdraw_commission_type: string;
  }