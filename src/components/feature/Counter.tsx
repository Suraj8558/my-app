'use-client'
import React, {useState} from 'react';
import { useAppDispatch,  useAppSelector} from '@/src/lib/hooks';

import { increment, decrement, incrementByAmount } from '@/src/store/feature/counter/counterSlice';
import { addExercise, setExercises, updateExercise } from '@/src/store/feature/workout/workoutSlice';

import { fetchUserById } from '@/src/store/feature/users/usersSlice';


export  default function  Counter(){
const dispatch = useAppDispatch();
const count = useAppSelector((state) => state.counter.value);
const [userId, setUserId] = useState('1')
const {loading, error, entities} = useAppSelector((state) => state.users)
const excersice = useAppSelector((state) => state.exercise)
console.log("excersice", excersice )

const workout = [
  { id: 'ex3', title: 'Leg', completed: false },
  { id: 'ex4', title: 'Shoulder', completed: true }
]


return (
  <div className='mx-auto w-full px-4'>
    <div className="card ">
      <p className='text-l text-center mb-4'> Count : {count}</p>

    </div>
    <div className='mb-10'>  <button className="py-4 px-4 bg-black text-white text-sm hover:text-green-300 ease-in border-2 cursor-pointer mr-4" onClick={() => dispatch(increment())}> 

        Increment the Value 
      </button>

      <button className="py-4 px-4 bg-black text-white text-sm hover:text-green-300 ease-in border-2 cursor-pointer mr-4" onClick={()=> dispatch(incrementByAmount(5))} > Increment by 5</button>

      <button className="py-4 px-4 bg-black text-white text-sm hover:text-green-300 ease-in border-2 cursor-pointer" onClick={()=> dispatch(decrement())} > Decrement  the Value</button>
</div>


      <hr className="border-gray-300 dark:border-gray-700 mb-3" />

      <div>
        <h3 className="text-xl font-bold mb-5">Fetch User (Async Thunk)</h3>

        <div className="flex gap-2 mb-4 mt-4">
          <input 
            type="number" 
            value={userId} 
            onChange={(e) => setUserId(e.target.value)}
            className="px-3 py-2 border rounded text-black w-24 text-white border-2"
            placeholder="Enter you id here"
          />
          <button 
            onClick={() => dispatch(fetchUserById(Number(userId)))}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded transition"
          >
            Load User
          </button>
        </div>

        {loading === 'pending' && <p className="text-blue-500">Loading user...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <ul className="list-disc pl-5 mt-2">
          {entities.map((user, index) => (
            <li key={index} className="text-sm font-medium">
              User ID {user.id}: {user.name}
            </li>
          ))}
        </ul>

      </div>

      <button 
            onClick={() => dispatch(addExercise({ id: 'ex2', title: 'Pushups', completed: false }, ))}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded transition"
          >
            Add workout 
          </button>

           <button 
            onClick={() => dispatch(setExercises(workout))}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded transition"
          >
            Set Exercises 
          </button>
           <button 
            onClick={() => dispatch(updateExercise({id: 'ex2', 
              changes: { title: 'Diamond Pushups' } 
            }))}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded transition"
          >
            Update Exercises 
          </button>
  </div>
);
}