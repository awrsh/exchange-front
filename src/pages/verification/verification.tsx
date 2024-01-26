import { CircularProgress } from "@mui/material";
import useGetAuthorityLevels from "../../hook/query/authority/useGetAuthorityLevels";
import CardVerify from "../../componets/verificationTable/CardVerify";
import VerifyTable from "../../componets/verificationTable/VerifyTable";
import Layout from "../../componets/common/Layout";
function Verification() {
  const { data, isLoading } = useGetAuthorityLevels();
  return (
    <div>
      <Layout>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <div className="px-10  mx-auto py-[15px] ">
              <div className="flex gap-[150px] ">
                {data?.map((authority, idx) => (
                  <CardVerify authority={authority} key={idx} />
                ))}
              </div>
              <VerifyTable />
            </div>
          </>
        )}
      </Layout>
    </div>
  );
}

export default Verification;
