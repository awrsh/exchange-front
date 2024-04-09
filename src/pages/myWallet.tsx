import { Link } from "react-router-dom";
import Layout from "../componets/common/Layout";
import Table from "../componets/common/Table";
import { StyledTableCell, StyledTableRow } from "../helpers/utils/mui";
import WithTokenCkeck from "../hook/common/WithTokenCkeck";
import useAuthStore from "../stores/user-store";
import Inventory from "../componets/my-wallet/inventory";
import IranFlg from "../assets/images/download.jpg";
const MyWallet = () => {
    const { user } = useAuthStore();
    return (
        <Layout>
            <div className="pb-10 w-[95%] mx-auto">
                <h1 className="text-xl font-bold">کیف پول‌ها</h1>
                <div className="bg-white dark:bg-dark p-4 mt-7 rounded-xl">
                    <Inventory />
                    <div className="mt-4 pb-5">
                        <Table
                            header={["نام رمز ارز", "موجودی رمز ارز", "مبلغ قابل برداشت", ""]}
                        >
                            {user?.wallets.map((crypto, idx) => {
                                return (
                                    <StyledTableRow className="style-table-row" key={idx}>
                                        <StyledTableCell width={200} align="center">
                                            <div className="flex items-center justify-start  gap-1">
                                                <img
                                                    className="w-7 h-7 rounded-full"
                                                    src={
                                                        crypto.currency_id.code === "IRT"
                                                            ? IranFlg
                                                            : crypto.currency_id.image
                                                    }
                                                />
                                                <div>
                                                    <p className="font-bold text-[13px]">
                                                        {crypto.currency_id.title}
                                                    </p>
                                                    <p className="font-regular text-start">
                                                        {crypto.currency_id.code}
                                                    </p>
                                                </div>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell
                                            className="!font-num !text-[14px]"
                                            align="center"
                                        >
                                            <div className="flex flex-col items-center">
                                                <p className="flex flex-col items-center gap-1 text-zinc-900">
                                                <span>{Number(Number(crypto.balance).toFixed(crypto.currency_id.decimal)).toLocaleString()}</span>
                                                    {crypto.currency_id.code !== "IRT" && (
                                                        <span className="font-num font-bold">
                                                            {Number(Number(
                                                                Number(crypto.currency_id.price_info_price) *
                                                                Number(crypto.balance)
                                                            ).toFixed(0)).toLocaleString()}{" "}
                                                            <span className="text-xs font-medium text-gray-500">
                                                                تومان
                                                            </span>
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell
                                            className="!font-num !text-[14px]"
                                            align="center"
                                        >
                                            <div className="flex flex-col items-center">
                                                <p className="flex flex-col items-center gap-1 text-zinc-900">
                                                <span>{Number(crypto.balance).toLocaleString("fa")}</span>
                                                    {crypto.currency_id.code !== "IRT" && (
                                                        <span className="font-num font-bold">
                                                            {Number(
                                                                Number(crypto.currency_id.price_info_price) *
                                                                Number(crypto.balance)
                                                            ).toLocaleString()}{" "}
                                                            <span className="text-xs font-medium text-gray-500">
                                                                تومان
                                                            </span>
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell className="flex items-center gap-3">
                                            <Link
                                                to={"/action"}
                                                className="text-blue-500   px-3 py-2 rounded-lg "
                                            >
                                                واریز
                                            </Link>
                                            <Link
                                                to={"/action"}
                                                className="text-blue-500   px-3 py-2 rounded-lg "
                                            >
                                                برداشت
                                            </Link>
                                            {crypto.currency_id.code !== "IRT" ? (
                                                <>
                                                    <Link
                                                        to={"/action"}
                                                        className="text-blue-500   px-3 py-2 rounded-lg "
                                                    >
                                                        واریز ارز
                                                    </Link>
                                                    <Link
                                                        to={"/action"}
                                                        className="text-blue-500   px-3 py-2 rounded-lg "
                                                    >
                                                        برداشت ارز
                                                    </Link>
                                                </>
                                            ) : null}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </Table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default WithTokenCkeck()(MyWallet);
