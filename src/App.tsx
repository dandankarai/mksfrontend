import { QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import { totalValue } from "./slices/sliceProducts";
import { RootState, store } from "./store";
import Global from "./styles/global";

function App() {
  const { currentSale } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalValue());
  }, [currentSale, dispatch]);

  return (
    <div className="App">
      <Global />
      <Home />
    </div>
  );
}

export default App;
