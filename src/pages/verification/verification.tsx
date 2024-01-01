import Sidebar from "../../componets/common/Sidebar";
import CardVerify from "../../componets/verificationTable/CardVerify";
import VerfyTable from "../../componets/verificationTable/VerfyTable";
function Verification() {
  return (
    <>
      <div className="px-10 py-[15px] ">
        <CardVerify />
        <VerfyTable />
      </div>
    </>
  );
}

export default Verification;
