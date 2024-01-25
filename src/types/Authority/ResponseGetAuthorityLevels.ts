interface Rule {
    id: number;
    title: string;
    sequence: number;
  }
  
  
  export type AuthorityLevels = {
    id: number;
    level: string;
    rules: Rule[];
    deposit_crypto_limit: number;
    deposit_crypto_limit_text: string;
    deposit_ir_limit: number;
    deposit_ir_limit_text: string;
    withdraw_crypto_limit: number;
    withdraw_crypto_limit_text: string;
    withdraw_ir_limit: number;
    withdraw_ir_limit_text: string;
  }
  
  
  
  