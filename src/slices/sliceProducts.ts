import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { IProductCart } from "../utils/interfaces/interfaceProducts";

const initialState = {
  currentSale: [] as IProductCart[],
  amount: 0,
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IProductCart>) => {
      const { id } = action.payload;

      const existingProduct = state.currentSale.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.amount += 1;
      } else {
        state.currentSale.push({ ...action.payload, amount: 1 });
        toast.success("Produto adicionado!");
      }
    },

    removeCard: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.currentSale = state.currentSale.filter(
        (item) => item.id !== itemId
      );
      toast.error("Produto removido!");
    },

    increase: (state, { payload }: PayloadAction<number>) => {
      const itemToIncrease = state.currentSale.find(
        (item) => item.id === payload
      );
      if (itemToIncrease) itemToIncrease.amount += 1;
    },

    decrease: (state, { payload }: PayloadAction<number>) => {
      const itemToDecrease = state.currentSale.find(
        (item) => item.id === payload
      );
      if (itemToDecrease && itemToDecrease.amount > 1)
        itemToDecrease.amount -= 1;
    },

    totalValue: (state) => {
      state.amount = state.currentSale.reduce(
        (acc, item) => acc + item.amount,
        0
      );
      state.total = state.currentSale.reduce(
        (acc, item) => acc + item.amount * Number(item.price),
        0
      );
    },
  },
});

export const { addCart, removeCard, increase, decrease, totalValue } =
  productSlice.actions;

export default productSlice.reducer;
