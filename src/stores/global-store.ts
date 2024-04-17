import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";



interface GlobalStore {
  verifyAuth: boolean;
  toggleVerifyAuth:(status:boolean)=>void;
}

const useGlobalStore = create<GlobalStore>()(
    devtools(
        immer((set) => ({
            verifyAuth:false,
            toggleVerifyAuth:(status)=>{
                set((state)=>{
                    state.verifyAuth = status
                })
            }
        }))
    )
);

export default useGlobalStore;
