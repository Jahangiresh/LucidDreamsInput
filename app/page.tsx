"use client";
import Image from "next/image";
import FormulaInput from "./components/FormulaInput";
import store from "./store/store";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <div className="px-10 mt-10">
      <Provider store={store}>
        <FormulaInput />
      </Provider>
    </div>
  );
}
