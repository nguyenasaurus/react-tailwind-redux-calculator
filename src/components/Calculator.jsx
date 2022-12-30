
function Calculator() {
  const handleInputChange = (e) => {
    // only numbers or - + * / x
    // convert x to *
    // numbers with commas every 3
    // numbers get stored in [] before and after - + * /
  };

  return (
    <main className="relative h-1/2 w-1/3 bg-sky-900 p-4">
      <section className="rounded-md bg-slate-900 text-white px-6 py-4 mb-2 w-full">
        <p className="w-full mb-2 text-xs">123</p>
        <input onChange={handleInputChange} type="text" className="bg-slate-900 w-full focus:outline-none text-right"></input>
      </section>
      <section className="bg-slate-900 p-4 rounded-md grid grid-cols-4 gap-2">
        
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">7</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">8</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">9</button>
        <button className="bg-slate-500 rounded-sm border-b-4 border-slate-600 font-bold uppercase text-white">del</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">4</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">5</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">6</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">+</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">1</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">2</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">3</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">-</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">.</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">0</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">/</button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800">x</button>

        <button className="col-span-2 bg-slate-500 rounded-sm border-b-4 border-slate-600 font-bold uppercase text-white">reset</button>
        <button className="col-span-2 bg-red-600 rounded-sm border-b-4 border-red-900 font-bold uppercase text-white">=</button>
      </section>
    </main>
  );
}
export default Calculator;