"use client";
import {  useSearchParams } from "next/navigation";
import { logout } from "../../../firebase/firebase";

export default function Page() {
  const params = useSearchParams(); 
  console.log(params)
  const v = params.get('v');      

  return (
    <div>
      <h1>{v??"unkown"}</h1>
      <button onClick={()=>{logout()}} className="px-6 py-2 rounded-md bg-green-500 text-white transition-all ease-in-out active:scale-90">logout</button>
    </div>
  );
}
