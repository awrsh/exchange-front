import { RxDashboard } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { TbMessageSearch } from "react-icons/tb";
import { RiBankCard2Fill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";

export const header_menu = [
  {
    name: "صفحه اصلی",
    url: "/",
    icon: RxDashboard
  },
  {
    name: "کیف پول من",
    url: "/my-wallet",
    icon: FaWallet
  },
  {
    name: "قیمت لحضه‌ای",
    url: "/#",
    icon: RxDashboard
  },
  {
    name: "بازار حرفه‌ای",
    url: "/exchange",
    icon: RxDashboard
  },
  {
    name: " خرید آسان",
    url: "/buy",
    icon: RxDashboard
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