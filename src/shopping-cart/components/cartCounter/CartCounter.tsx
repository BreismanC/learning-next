"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { addOne, substractOne, initCounterState } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CounterResponse {
  count: number;
}

const getCounter = (): Promise<CounterResponse> => {
  const response = fetch("/api/counter").then(res => res.json());
  return response;
}

export const CartCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getCounter().then(data => dispatch(initCounterState(data.count)));
  }, [dispatch]);
  return (
    <>
      <span>Productos en el carrito</span>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
}
