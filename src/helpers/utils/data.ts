import { RxDashboard } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { TbMessageSearch } from "react-icons/tb";
import { RiBankCard2Fill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import { TbExchange } from "react-icons/tb";
import { GrCurrency } from "react-icons/gr";


export const header_menu = [
  {
    name: "داشبورد",
    url: "/",
    icon: RxDashboard
  },
  {
    name: "کیف پول من",
    url: "/my-wallet",
    icon: FaWallet
  },
  {
    name: "قیمت لحظه‌ای",
    url: "/current-price",
    icon: GrCurrency
  },
  {
    name: "بازار حرفه‌ای",
    url: "/exchange",
    icon: MdCurrencyExchange
  },
  {
    name: " خرید آسان",
    url: "/buy",
    icon: TbExchange
  },
  {
    name: "تاریخچه معاملات",
    url: "/transaction-history",
    icon: BsClockHistory
  },
  {
    name: "دعوت دوستان",
    url: "/invite-friends",
    icon: FaClipboardList
  },
  {
    name: "مدیریت حساب‌کاربری",
    url: "/profile",
    icon: FaUser
  },
  {
    name: "تیکت‌ها",
    url: "/tickets",
    icon: TbMessageSearch
  },
  {
    name: "کارت بانکی‌ها",
    url: "/bank-card",
    icon: RiBankCard2Fill
  },
]


export const listCryptocurrencies = [
  {
    name: "Bitcoin",
    imgUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    price: 50000,
    percent: 2.5,
  },
  {
    name: "Ethereum",
    imgUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    price: 3000,
    percent: -1.8,
  },
  {
    name: "Cardano",
    imgUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    price: 2.5,
    percent: 3.2,
  },
  {
    name: "Binance Coin",
    imgUrl: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    price: 400,
    percent: 0.7,
  },
  {
    name: "Solana",
    imgUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
    price: 150,
    percent: 5.5,
  },
  {
    name: "XRP",
    imgUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    price: 1.2,
    percent: -0.3,
  },
  {
    name: "Polkadot",
    imgUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    price: 30,
    percent: 1.8,
  },
  {
    name: "Dogecoin",
    imgUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    price: 0.25,
    percent: 2.0,
  },
  {
    name: "Avalanche",
    imgUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    price: 80,
    percent: 4.1,
  },
  {
    name: "Chainlink",
    imgUrl: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    price: 25,
    percent: -0.5,
  },
  {
    name: "Litecoin",
    imgUrl: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    price: 120,
    percent: 1.2,
  },
  {
    name: "Algorand",
    imgUrl: "https://cryptologos.cc/logos/algorand-ala-logo.png",
    price: 1.5,
    percent: 3.5,
  },
  {
    name: "Stellar",
    imgUrl: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
    price: 0.5,
    percent: -1.2,
  },
  {
    name: "Tezos",
    imgUrl: "https://cryptologos.cc/logos/tezos-xtz-logo.png",
    price: 5,
    percent: 2.8,
  },
  {
    name: "VeChain",
    imgUrl: "https://cryptologos.cc/logos/vechain-vet-logo.png",
    price: 0.1,
    percent: 1.0,
  },
  {
    name: "EOS",
    imgUrl: "https://cryptologos.cc/logos/eos-eos-logo.png",
    price: 2,
    percent: -0.8,
  },
  {
    name: "Tron",
    imgUrl: "https://cryptologos.cc/logos/tron-trx-logo.png",
    price: 0.03,
    percent: 0.2,
  },
  {
    name: "Neo",
    imgUrl: "https://cryptologos.cc/logos/neo-neo-logo.png",
    price: 20,
    percent: 2.3,
  },
  {
    name: "IOTA",
    imgUrl: "https://cryptologos.cc/logos/iota-iota-logo.png",
    price: 0.8,
    percent: 1.5,
  },
  {
    name: "Monero",
    imgUrl: "https://cryptologos.cc/logos/monero-xmr-logo.png",
    price: 150,
    percent: -0.1,
  },
  // Add more cryptocurrencies as needed
];


export const ltistAccordingToTether = [
  {
    name: "Litecoin",
    imgUrl: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    price: 120,
    percent: 1.2,
  },
  {
    name: "Ripple",
    imgUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    price: 1.2,
    percent: -0.3,
  },
  {
    name: "Chainlink",
    imgUrl: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    price: 25,
    percent: -0.5,
  },
  {
    name: "Cardano",
    imgUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    price: 2.5,
    percent: 3.2,
  },
  {
    name: "Stellar",
    imgUrl: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
    price: 0.5,
    percent: -1.2,
  },
  {
    name: "Ethereum",
    imgUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    price: 3000,
    percent: -1.8,
  },
  {
    name: "Bitcoin",
    imgUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    price: 50000,
    percent: 2.5,
  },
  {
    name: "Cardano",
    imgUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    price: 2.5,
    percent: 3.2,
  },
  {
    name: "Polkadot",
    imgUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    price: 30,
    percent: 1.8,
  },
  {
    name: "VeChain",
    imgUrl: "https://cryptologos.cc/logos/vechain-vet-logo.png",
    price: 0.1,
    percent: 1.0,
  },
  {
    name: "Tezos",
    imgUrl: "https://cryptologos.cc/logos/tezos-xtz-logo.png",
    price: 5,
    percent: 2.8,
  },
  {
    name: "Monero",
    imgUrl: "https://cryptologos.cc/logos/monero-xmr-logo.png",
    price: 150,
    percent: -0.1,
  },
  {
    name: "Binance Coin",
    imgUrl: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    price: 400,
    percent: 0.7,
  },
  {
    name: "Avalanche",
    imgUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    price: 80,
    percent: 4.1,
  },
  {
    name: "EOS",
    imgUrl: "https://cryptologos.cc/logos/eos-eos-logo.png",
    price: 2,
    percent: -0.8,
  },
  {
    name: "Tron",
    imgUrl: "https://cryptologos.cc/logos/tron-trx-logo.png",
    price: 0.03,
    percent: 0.2,
  },
  {
    name: "Neo",
    imgUrl: "https://cryptologos.cc/logos/neo-neo-logo.png",
    price: 20,
    percent: 2.3,
  },
  {
    name: "Dogecoin",
    imgUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    price: 0.25,
    percent: 2.0,
  },
  {
    name: "Algorand",
    imgUrl: "https://cryptologos.cc/logos/algorand-ala-logo.png",
    price: 1.5,
    percent: 3.5,
  },
  {
    name: "IOTA",
    imgUrl: "https://cryptologos.cc/logos/iota-iota-logo.png",
    price: 0.8,
    percent: 1.5,
  },
];



export const orders = [
  { price: 751529, count: 33095, total: 193110, percent: 96 },
  { price: 480304, count: 69435, total: 559686, percent: 87 },
  { price: 12638, count: 42210, total: 389881, percent: 93 },
  { price: 983052, count: 79494, total: 877066, percent: 11 },
  { price: 524968, count: 3880, total: 29738, percent: 45 },
  { price: 976394, count: 99766, total: 939824, percent: 18 },
  { price: 367511, count: 35819, total: 12269, percent: 22 },
  { price: 890874, count: 8353, total: 997784, percent: 49 },
  { price: 431478, count: 59027, total: 628991, percent: 76 },
  { price: 458536, count: 26372, total: 380974, percent: 90 },
  { price: 263742, count: 44242, total: 850087, percent: 16 },
  { price: 539413, count: 79827, total: 497301, percent: 76 },
  { price: 205652, count: 63596, total: 726915, percent: 4 },
  { price: 36112, count: 23062, total: 847048, percent: 7 },
  { price: 304211, count: 98710, total: 46579, percent: 92 },
  { price: 367692, count: 36763, total: 982388, percent: 37 },
  { price: 837272, count: 27867, total: 262811, percent: 38 },
  { price: 979929, count: 3315, total: 521209, percent: 5 },
  { price: 836396, count: 97595, total: 380833, percent: 53 },
  { price: 862575, count: 63332, total: 460424, percent: 77 }
]



export const dataVerify = [
  {
    title: "سطح 1",
    infoTitle: "اطلاعات مورد نیاز",
    infoItems: [
      { icon: 0, text: "ثبت شماره تلفن همراه" },
      { icon: 1, text: "ثبت و بارگزاری اطلاعات هویتی" },
    ],
    featuresTitle: "امکانات",
    features: [
      {
        icon: 1,
        title: "واریز تومانی",
        amount: "25 میلیون تومان روزانه",
      },
      {
        icon: 2,
        title: "واریز تومانی",
        amount: "25 میلیون تومان روزانه",
      },
      {
        icon: 3,
        title: "واریز تومانی",
        amount: "25 میلیون تومان روزانه",
      },
      {
        icon: 0,
        title: "واریز تومانی",
        amount: "25 میلیون تومان روزانه",
      },
      // Add more features as needed
    ],
  },
  {
    title: "سطح 2",
    infoTitle: "اطلاعات مورد نیاز",
    infoItems: [
      { icon: 3, text: "ثبت اطلاعات محل سکونت" },
      {
        icon: 2,
        text: "احراز هویت تصویری (روش هوشمند یا ارسال عکس تایید هویت)",
      },
    ],
    featuresTitle: "امکانات",
    features: [
      {
        icon: 0,
        title: "واریز تومانی",
        amount: "25 میلیون تومان روزانه",
      },
      {
        icon: 0,
        title: "برداشت تومانی",
        amount: "300 میلیون تومان روزانه",
      },
      {
        icon: 0,
        title: "واریز رمز ارز",
        amount: "نامحدود  ",
      },
      {
        icon: 0,
        title: "برداشت رمز ارز",
        amount: "200 میلیون تومان روزانه",
      },
      // Add more features as needed
    ],
  },
  {
    title: "سطح 3",
    infoTitle: "اطلاعات مورد نیاز",
    infoItems: [
      { icon: 0, text: "شماره همراه به نام خودتان باشد" },
      { icon: 0, text: "گذشت حداقل یک ماه از سطح 2)" },
      {
        icon: 0,
        text: "حداقل برداشت مجموع (تومانیو رمزارز) 2.5 میلیارد در 30 روز گذشته",
      },
      {
        icon: 0,
        text: "حداقل مجموع واریز تومانی 500 میلیون تومان",
      },
    ],
    featuresTitle: "امکانات",
    features: [
      {
        icon: 0,
        title: "واریز تومانی",
        amount: "25 میلیون تومان روزانه",
      },
      {
        icon: 0,
        title: "برداشت تومانی",
        amount: "1 میلیارد تومان روزانه",
      },
      {
        icon: 0,
        title: "واریز رمز ارز",
        amount: "نامحدود  ",
      },
      {
        icon: 0,
        title: "برداشت رمز ارز",
        amount: "1 میلیارد تومان روزانه",
      },
      // Add more features as needed
    ],
  },
  // Add more data objects as needed
];



export const myWallet = [
  {
    src: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    name: "کیف پول تومانی",
    inventory: 0
  },
  {
    src: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    name: "کیف پول تومانی",
    inventory: 0
  },
  {
    src: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    name: "کیف پول تومانی",
    inventory: 0
  },
  {
    src: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    name: "کیف پول تومانی",
    inventory: 0
  },
]


export const menuBottom = [
  {
    name: "داشبورد",
    url: "/",
    icon: RxDashboard
  },
  {
    name: "کیف پول",
    url: "/my-wallet",
    icon: FaWallet
  },
  {
    name: "بازار",
    url: "/exchange",
    icon: RxDashboard
  },
  {
    name: " خرید آسان",
    url: "/buy",
    icon: RxDashboard
  },
]


export const cryptoList = [
  { id: 0, name: 'Toman', nameFn: "تومان", symbol: 'IRT', withdrawableAmount: 0, url: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
  { id: 1, name: 'Bitcoin', nameFn: "بیت کوین", symbol: 'BTC', withdrawableAmount: 10, url: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
  { id: 2, name: 'Ethereum', nameFn: "اتریوم", symbol: 'ETH', withdrawableAmount: 20, url: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
  { id: 3, name: 'Ripple', nameFn: "ریپل", symbol: 'XRP', withdrawableAmount: 15, url: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
];

export const cryptoTransactions = [
  { id: 1, name: 'Bitcoin', type: 'Buy', registrationDate: '2024-01-09', amountInToman: 50000000, quantity: 0.05, status: 'Completed', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Ethereum', type: 'Sell', registrationDate: '2024-01-10', amountInToman: 30000000, quantity: 0.2, status: 'Pending', details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, name: 'Ripple', type: 'Buy', registrationDate: '2024-01-11', amountInToman: 10000000, quantity: 50, status: 'Failed', details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
];

export const transactionsList = [
  { type: 'Buy', dateTime: '2024-01-09T08:30:00', amountInToman: 50000000, transactionId: '123456789', creditCard: '**** **** **** 1234', status: 'Completed' },
  { type: 'Sell', dateTime: '2024-01-10T15:45:00', amountInToman: 30000000, transactionId: '987654321', creditCard: '**** **** **** 5678', status: 'Pending' },
  { type: 'Transfer', dateTime: '2024-01-11T12:15:00', amountInToman: 10000000, transactionId: '654321789', creditCard: 'N/A', status: 'Failed' },
];



export const tabsCurrentPrice = ["همه ارز‌ها", "مورد علاقه", 'پرسودترین', "گرانترین", "جدیدترین", "ارزانترین", "پر ضررترین", "فن توکن", "وب3", "متاورس"]
export const currenciesList1 = [
  { interest: 'علاقه‌مندی', name: 'Bitcoin', usdPrice: 35000, tomanPrice: 3500000000, change24h: 5, chart: [20, 2, 15, 1, 30, 3, 50, 70, 60] },
  { interest: 'علاقه‌مندی', name: 'Ethereum', usdPrice: 2500, tomanPrice: 250000000, change24h: -3, chart: [10, 3, 25, 7, 10, 23, 20] },
  { interest: 'علاقه‌مندی', name: 'Cardano', usdPrice: 1.5, tomanPrice: 150000, change24h: 2, chart: [0, 40, 20, 10, 30, 36, 60] },
];


export const note = [
  {
    name: 'طبق ابلاغیه جدید بانک مرکزی سقف واریز روزانه در تمامی صرافی ها برای هر کاربر ۲۵ میلیون تومان می باشد.'
  },
  {
    name: 'در صورتی که قصد واریز مبلغی بیش از 25 میلیون تومان در روز را داریداز طریق گزینه واریز با شناسه درخواست خود را ثبت نمایید .'
  },
  {
    name: 'در صورت پرداخت از کارتی که آن را ثبت نکرده اید مبلغ واریزی تا ثبت آن کارت بانکی در حساب شما شارژ نخواهد شد.'
  },
  {
    name: 'قبل از پرداخت می بایست کارت بانکی خود را در سایت ثبت نمایید ٬ توجه داشته باشید کارت بانکی باید به نام خودتان باشد.'
  },
  {
    name: 'توجه داشته باشید مبلغ واریزی به تومان می باشد .'
  },
  {
    name: 'عد از پرداخت آنلاین در صورت موفق بودن ٬ مبلغ پرداختی به موجودی تومانی شما اضافه خواهد شد. در صورت مشاهده هر گونه خطا برای گزارش آن از چت آنلاین و یا تیکت استفاده نمایید .'
  },
]
export const note_settlement_procedure_Rial_withdrawals = [
  {
    name: 'برداشت ریالی در تراست تتر ، به مقصد همه بانک ها بر اساس سیکل پایا خواهد بود.'
  },
  {
    name: 'کارمزد برداشت ریالی مربوط به سیستم بانکی بوده و توسط سیستم پرداخت یار گرفته می شود و سایت تراست تتر در آن ذینفع نیست.'
  },
  {
    name: 'کارمزد برداشت های ریالی 0.03٪ از مبلغ هر درخواست است. لازم به ذکر است که حداقل کارمزد برداشت های ریالی هزار تومان و حداکثر آن ۱۰ هزار تومان است.'
  },
  {
    name: 'واریز ریالی به تراست تتر بدون کارمزد برای کاربران عزیز انجام می گردد.'
  },

]


export const amounts = [
  {
    value: 5000000,
    label: "5 میلیون تومان"
  },
  {
    value: 10000000,
    label: "10 میلیون تومان"
  },
  {
    value: 15000000,
    label: "15 میلیون تومان"
  },
  {
    value: 20000000,
    label: "20 میلیون تومان"
  },
  {
    value: 25000000,
    label: "25 میلیون تومان"
  },
]


export const menus =[
  {
    name:"بازار معاملات",
    link:"/exchange"
  },
  {
    name:"خرید آسان",
    link:"/buy"
  },
  {
    name:"قیمت لحظه‌ای",
    link:"/current-price"
  },
  {
    name:"قوانین و مقررات",
    link:"https://bitasia.ir/rules"
  },
  {
    name:"تماس با ما",
    link:"https://bitasia.ir/contact-us"
  },
]