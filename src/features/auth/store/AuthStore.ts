
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthStoreType {
    isSignedIn: boolean,

    signIn: () => void,
    signOut: () => void,
}

export const useAuthStore = create<AuthStoreType>()(
    persist(
        (set) => ({
            isSignedIn: false,
            signIn: async () => {
                // Include login authentication logic here
                set({ isSignedIn: true })
            },
            signOut: async () => {
                set({ isSignedIn: false })
            }
        }),
        {
            name: 'token-store',
            getStorage: () => AsyncStorage
        }
    )
)