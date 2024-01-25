import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { User } from "../types/Auth";



interface AuthStore {
    user: User | null;
    setUser:({user}:{user:User | null | any})=> void
}

const useAuthStore = create<AuthStore>()(
    devtools(
        immer((set) => ({
            user: null,
            setUser: ({ user }) => {
                set((state) => {
                    state.user = user;
                });
            },
           
        }))
    )
);

export default useAuthStore;
