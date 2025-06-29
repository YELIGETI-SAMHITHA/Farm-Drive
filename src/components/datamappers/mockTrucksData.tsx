//code for MockTrucksData

import React from "react";
import { mockTrucks } from "@/data/mockTrucks";
import { useTranslations } from "next-intl";
export default function MockTrucksData() {
  const t = useTranslations("trucks");
  return (
    <React.Fragment>
      {mockTrucks.map((trucks) =>{
      const truck = t.raw(trucks.id);
        return(
          <div
          key={truck.id}
          className={`rounded-xl shadow-xl hover:scale-[1.01] scale-100 transition-all ease-in-out  bg-cover flex flex-col justify-end shadow w-80 aspect-[9/11] p-3`}
          style={{
            backgroundImage: `url(${truck.image})`,
          }}
        >
         <div className="p-3 rounded-md bg-black/40">
          <h2 className="text-lg font-bold mt-2 text-white">{truck.title}</h2>
          <p className="text-md text-stone-50">{truck.description}</p>
          <p className="text-green-500 text-sm font-semibold ">{truck.price.charAt(0)+" "+truck.price.slice(1)}</p>
          <p className="text-sm text-gray-50">{truck.location}</p>
         </div>
        </div>
        )
      } )}
    </React.Fragment>
  );
}
