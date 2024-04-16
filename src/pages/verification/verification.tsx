import { CircularProgress } from "@mui/material";
import useGetAuthorityLevels from "../../hook/query/authority/useGetAuthorityLevels";
import CardVerify from "../../componets/verificationTable/CardVerify";
import VerifyTable from "../../componets/verificationTable/VerifyTable";
import Layout from "../../componets/common/Layout";
import useAuthStore from "../../stores/user-store";
function Verification() {
  const { user } = useAuthStore()
  const { data, isLoading } = useGetAuthorityLevels();
  return (
    <div>
      <Layout>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <div className="px-10  mx-auto py-[15px]  ">
              <div className="flex gap-[150px] ">
                {data?.map((authority, idx) => (
                  <CardVerify level={user?.user_level === idx} authority={authority} key={idx} />
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
