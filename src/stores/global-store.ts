import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";



interface GlobalStore {
  verifyAuth: boolean;
  toggleVerifyAuth:()=>void;
}

const useGlobalStore = create<GlobalStore>()(
    devtools(
        immer((set) => ({
            verifyAuth:false,
            toggleVerifyAuth:()=>{
                set((state)=>{
                    state.verifyAuth = !state.verifyAuth
                })
            }
        }))
    )
);

export default useGlobalStore;
