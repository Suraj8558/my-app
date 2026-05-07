"use client";
import Image from "next/image";
import { useEffect, useState, useCallback ,useMemo, useReducer} from "react";
import Counter from "../components/feature/Counter";
export default function Home() {
  const [count, SetCount] = useState<number>(1);

  useEffect(() => {
    console.log("intial page load");
    console.log("did update");

    return () => {
      console.log("component did unmount");
    };
  }, [count]);

  const handleAdd = () => {
    SetCount((pre) => pre + 1);
  };



const handleChange = useCallback(() => {
  SetCount((pre) => pre + 1);
}, []);

 const add = useMemo(()=> {
    return 5 + 4
 },[])


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-10xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Home page 
          </h1>
            <Counter />
        </div>
       
      </main>
    </div>
  );
}
