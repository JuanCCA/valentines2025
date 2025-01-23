"use client";
import { COLORS } from "@/enums/colors";
import Panel from "./components/Panel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

export default function Home() {
  const [order, setOrder] = useState(0);
  return (
    <div style={{backgroundColor: COLORS.secondary}} className="grid grid-rows-3 h-screen justify-items-center p-20 font-[family-name:var(--font-roboto)]">
      <Header />

    <div className="justify-items-center row-span-2 w-full">
      <Panel order={order} />
      </div>

    <Footer setOrder={setOrder} order={order} />
    </div>
  );
}
