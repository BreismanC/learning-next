"use client";

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "../SimpleWidget/SimpleWidget"
import { useSelector } from "react-redux";

export const WidgetsGrid = () => {
	const count = useSelector((state: any) => state.counter.count);

	return (
		<div className="flex flex-wrap mt-2 p-2 items-center justify-center">

			<SimpleWidget title={count}
				subtitle="Productos agregados"
				label="Contador"
				icon={<IoCartOutline size={50} className="text-blue-500" />}
				href="/counter" />
		</div>
	)
}