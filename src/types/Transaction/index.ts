export type TransactionCrypto = {
    amount: string;
    create_date: string;
    currency_current_value: number;
    currency_id: Transaction
    factor_number: string;
    id: number;
    network_id: {
      id: number;
      create_date: string;
      // other network_id properties
    };
    status: string;
    submit_date: string | null;
    tx_id: string;
    type: string;
    wallet_address: string;
  }
  


  export type Transaction = {
        active: boolean;
        alias: string;
        bitasia_active: boolean;
        code: string;
        color: string;
        create_date: string;
        decimal: number;
        decimal_amount: number;
        decimal_irt: number;
        for_loan: boolean;
        for_stake: boolean;
        for_test: boolean;
        high_risk: boolean;
        id: number;
        image: string;
        max_withdraw_commission: number;
        min_withdraw: number;
        network_ids: number[];
        price_info_amount: number;
        price_info_change: number;
        price_info_market_amount: number;
        price_info_market_value: number;
        price_info_max: number;
        price_info_mean: number;
        price_info_min: number;
        price_info_price: number;
        price_info_time: string;
        price_info_usdt_amount: number;
        price_info_usdt_change: number;
        price_info_usdt_market_amount: number;
        price_info_usdt_market_value: number;
        price_info_usdt_max: number;
        price_info_usdt_mean: number;
        price_info_usdt_min: number;
        price_info_usdt_price: number;
        price_info_usdt_time: string;
        price_info_usdt_value: number;
        price_info_value: number;
        recommend_for_deposit_weight: number;
        show_high_risk: boolean;
        show_in_dashboard: boolean;
        title: string;
        title_fa: string;
        tradable: boolean;
        withdraw_commission: number;
        withdraw_commission_type: string;
        write_date: string;
      }
  