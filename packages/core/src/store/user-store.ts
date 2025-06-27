
import { create } from "zustand";

interface User {
    id: string;
    name: string;
    email: string;
}
interface UserState{
    tenant: string | null;
    user: User | null;
    setUser: (user: User) => void;
    removeUser: () => void;
}
const useUserStore =create<UserState>((set)=>({
    user:null,
    tenant:null,
    setUser: (user)=>set({ user}),
    removeUser: () => set({ user: null }),
}))


export default useUserStore;