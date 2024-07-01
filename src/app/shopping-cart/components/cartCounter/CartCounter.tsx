"use client";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({value=20}: Props) => {
  const [count, setCount] = useState<number>(value);

    const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span>Productos en el carrito</span>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={increaseCount}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={decreaseCount}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
