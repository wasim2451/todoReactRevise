import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState<Array<string>>([]);
  const [input, setInput] = useState<string>("");

  const handleAdd = (currVal: string) => {
    if (input.trim() === "") return;
    setData((prev) => [...prev, currVal.trim()]);
    setInput("");
  };

  const handleRemove = (i: number) => {
    const newArr = data.filter((_, index) => index !== i);
    setData(newArr);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 px-4 py-6">
      <div className="mx-auto w-full max-w-xl bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 text-slate-700">
          Todo List
        </h1>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={input}
            placeholder="Enter a task..."
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={() => handleAdd(input)}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 active:scale-95 transition"
          >
            Add
          </button>
        </div>

        {data.length === 0 && (
          <p className="text-center text-slate-400 py-10">
            No todos yet. Add something 📝
          </p>
        )}

        {/* Todo List */}
        <div className="space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-slate-50 px-4 py-3 rounded-lg shadow-sm"
            >
              <p className="text-slate-700 wrap-break-word">{item}</p>
              <button
                onClick={() => handleRemove(index)}
                className="self-end sm:self-auto text-sm px-3 py-1 rounded-md bg-red-400 text-white hover:bg-red-500 active:scale-95 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
