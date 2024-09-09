import { create } from "zustand";
const useStore = create((set) => ({
  productId: null,
  setProductId: (productId) => set({ productId: productId }),
}));

export { useStore };
