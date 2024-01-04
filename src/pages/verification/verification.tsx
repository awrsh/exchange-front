import CardVerify from "../../componets/verificationTable/CardVerify";
import VerfyTable from "../../componets/verificationTable/VerifyTable";
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
