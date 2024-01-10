import Profile from "./pages/Profile";
import Tickets from "./pages/Tickets";
import Auth from "./pages/auth";
import Register from "./pages/auth/register";
import Verify from "./pages/auth/verify";
import BankCard from "./pages/BankCard";
import Buy from "./pages/buy";
import Home from "./pages/home";
import InviteFriends from "./pages/inviteFriends";
import MyWallet from "./pages/myWallet";
import ProfessionalMarket from "./pages/professionalMarket";
import TransactionHistory from "./pages/transactionHistory";
import Verification from "./pages/verification/verification";
import ExChangePage from "./pages/ExChange";
import CurrentPrice from "./pages/CurrentPrice";
import RialAction from "./pages/RialAction";

const Pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-wallet",
    element: <MyWallet />,
  },
  {
    path: "/invite-friends",
    element: <InviteFriends />,
  },
  {
    path: "/exchange",
    element: <ExChangePage />,
  },
  {
    path: "/current-price",
    element: <CurrentPrice />,
  },
  {
    path: "/tickets",
    element: <Tickets />,
  },
  {
    path: "/bank-card",
    element: <BankCard />,
  },
  {
    path: "/rial-action",
    element: <RialAction />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/transaction-history",
    element: <TransactionHistory />,
  },
  {
    path: "/professionalMarket",
    element: <ProfessionalMarket />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/auth/verify",
    element: <Verify />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
];

export default Pages;
