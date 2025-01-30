import create from 'zustand';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthState {
  isAdmin: boolean;
  loading: boolean;
  error: string | null;
  adminLogin: (email: string, password: string) => Promise<void>;
  adminLogout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAdmin: false,
  loading: false,
  error: null,
  adminLogin: async (email: string, password: string) => {
    const query = new URLSearchParams(location.search).toString();
    set({ loading: true, error: null });
    try {
      await signInWithEmailAndPassword(auth, email, password);
      set({ isAdmin: true, loading: false });
    } catch (error) {
      set({ error: 'Invalid credentials', loading: false });
      navigate(`/admin/menu${query ? `?${query}` : ''}`);
    }
  },

  adminLogout: async () => { // Correctly placed inside the component
    const query = new URLSearchParams(location.search).toString();
    try {
      await signOut(auth);
      set({ isAdmin: false });
      //if any error in logut uncomment
      //navigate(`/theater${query ? `?${query}` : ''}`);
    } catch (error) {
      set({ error: 'Failed to logout' });
    }
  }
}));