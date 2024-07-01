import { Metadata } from "next";
import { CartCounter } from "@/app/shopping-cart/components";

export const metadata: Metadata = {
  title: "Shopping cart",
  description:"Un simple contador"
}

const CounterPage = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <CartCounter value={20} />
    </div>
  );
};

export default CounterPage;
