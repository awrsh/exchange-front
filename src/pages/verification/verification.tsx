import { CircularProgress } from "@mui/material";
import useGetAuthorityLevels from "../../hook/query/authority/useGetAuthorityLevels";
import CardVerify from "../../componets/verificationTable/CardVerify";
function Verification() {
  const { data, isLoading } = useGetAuthorityLevels()
  return (
    <div>
      {
        isLoading ? <CircularProgress />
          :
          <div className="px-10 w-[90%] mx-auto py-[15px] ">
            <div className="flex justify-between ">
              {
                data?.map((authority,idx)=>(
                  <CardVerify authority={authority} key={idx}/>
                ))
              }
            </div>
            {/* <VerfyTable /> */}
          </div>
      }
    </div>
  );
}

export default Verification;
