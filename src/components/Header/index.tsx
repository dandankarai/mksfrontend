import React, { useEffect, useRef } from "react";
import { Container } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import SideBar from "../SideBar/";
import Logo from "../Logo";

export const Header = () => {
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  const dispatch = useDispatch();
  const { amount } = useSelector((state: RootState) => state.product);

  // useEffect(() => {
  //   if (amount == 1) {
  //     alert("daniel");
  //   }
  // }, [amount]);

  const showSidebar = () => {
    setVisibleSideBar(!visibleSideBar);
  };
  return (
    <Container>
      <Logo />

      <button onClick={showSidebar}>
        <FaShoppingCart size={32} />
        <span>{amount}</span>
      </button>
      {visibleSideBar && <SideBar active={setVisibleSideBar} />}
    </Container>
  );
};
