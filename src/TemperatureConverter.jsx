import React, { useState } from 'react';

function TemperatureConverter() {
  const [c, setC] = useState(0);
  const [f, setF] = useState(32);

  function setBothFromC(value) {
    setC(+value);
    let f = 32 + (9 / 5) * value;
    setF(+f.toFixed(1));
  }

  function setBothFromF(value) {
    setF(+value);
    setC(+((5 / 9) * (value - 32)).toFixed(1));
  }

  return (
    <>
      <div className="">
        <div className="flex flex-row space-x-4 font-mono text-white text-sm font-bold leading-6">
          <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            <input
              className="border-double border-4 border-sky-500 text-slate-400"
              value={c}
              onChange={(e) => setBothFromC(e.target.value)}
              type="number"
            />{' '}
            °C ={' '}
          </div>
          <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            <input
              className="border-double border-4 border-sky-500 text-slate-400"
              value={f}
              onChange={(e) => setBothFromF(e.target.value)}
              type="number"
            />
            °F
          </div>{' '}
          <div className="basis-1/2">03</div>
        </div>
      </div>
    </>
  );
}

export default TemperatureConverter;
