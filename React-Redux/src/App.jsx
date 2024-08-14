import { useState } from "react";
import Working from "./component/Working.jsx";
import { useDispatch } from "react-redux";
function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-6 h-screen">
        <h1 className=" text-2xl text-gray-700 font-semibold"> React-Redux</h1>
        <div className="">
          <button
            className=" bg-gray-950 w-32 h-8 text-white rounded-sm"
            onClick={(e) => {
              dispatch({ type: "Increment" });
            }}
          >
            Increment
          </button>
        </div>
        <div className="text-2xl font-semibold">
          <Working />
        </div>
        <div className="">
          <button
            className="bg-gray-950 w-32 h-8 text-white rounded-sm"
            onClick={(e) => {
              dispatch({ type: "Decrement" });
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
