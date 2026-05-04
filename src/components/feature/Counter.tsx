'use-client'
import React from 'react';
import { useAppDispatch,  useAppSelector} from '@/src/lib/hooks';

import { increment, decrement, incrementByAmount } from '@/src/store/feature/counter/counterSlice';



export  default function  Counter(){
const dispatch = useAppDispatch();
const count = useAppSelector((state) => state.counter.value);
console.log("count", count )
return (
  <div className='mx-auto w-full px-4'>
    <div className="card ">
      <p className='text-l text-center mb-4'> Count : {count}</p>

    </div>
      <button className="py-4 px-4 bg-black text-white text-sm hover:text-green-300 ease-in border-2 cursor-pointer mr-4" onClick={() => dispatch(increment())}> 

        Increment the Value 
      </button>

      <button className="py-4 px-4 bg-black text-white text-sm hover:text-green-300 ease-in border-2 cursor-pointer mr-4" onClick={()=> dispatch(incrementByAmount(5))} > Increment by 5</button>

      <button className="py-4 px-4 bg-black text-white text-sm hover:text-green-300 ease-in border-2 cursor-pointer" onClick={()=> dispatch(decrement())} > Decrement  the Value</button>
  </div>
);
}