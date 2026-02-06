import "./App.css";
import { useState } from "react";
function App() {
  //Create a Task Checker
  const [data, setData] = useState<Array<string>>([]);
  const [input, setInput] = useState<string>("");
  const handleAdd = (currVal: string) => {
    setData((prev) => [...prev, currVal]);
    setInput("");
    // console.log(data);
  };
  const handleRemove = (i: number) => {
    const newArr = data.filter((_, index) => index != i);
    setData(newArr);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="mx-[15%] my-[5%] border-2 min-h-screen">
      <div className="flex flex-row justify-center items-center gap-[30px]">
        <input
          type="text"
          className="bg-yellow-100 p-3 font-medium"
          value={input}
          placeholder="Enter Todo"
          onChange={handleInputChange}
        />
        <div>
          <button
            className="p-3 bg-green-500 cursor-pointer"
            onClick={() => handleAdd(input)}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div>
        {data.length == 0 && (
          <>
            <p className="text-center">No todos here . . . </p>
          </>
        )}
        {data.map((item, index) => (
          <div key={index} className="flex justify-center gap-4 mb-[20px]">
            <p>{item}</p>
            <button
              className="bg-red-400 p-3 cursor-pointer"
              onClick={() => handleRemove(index)}
            >
              Delete Button
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
