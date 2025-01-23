"use client";
import { COLORS } from "@/enums/colors";
import Panel from "./components/Panel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

export default function Home() {
  const [order, setOrder] = useState(0);
  return (
    <div style={{backgroundColor: COLORS.secondary}} className="grid grid-rows-20 h-screen justify-items-center p-20 font-[family-name:var(--font-roboto)]">
      <div className="row-span-9">
        <Header />
      </div>

    <div className="justify-items-center row-span-10 w-full h-full">
      <Panel order={order} />
    </div>
    <div className="row-span-1">
        <Footer setOrder={setOrder} order={order} />
    </div>
    </div>
  );
}
