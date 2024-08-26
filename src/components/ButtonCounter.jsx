// libs
import { useState } from 'react';

const ButtonCounter = () => {
  const [clickedCount, setClickedCount] = useState(0);

  return (
    <div className="flex flex-col m-auto gap-4 items-center">
      <span data-testid="buttonClickedCount">
        Click counter: {clickedCount}
      </span>
      <button
        data-testid="incrementClickedCountButton"
        className="border-solid border-2 border-black hover:border-sky-400 hover:bg-gray-300 rounded-xl p-1"
        onClick={() => setClickedCount((prevCount) => prevCount + 1)}
      >
        Click Me!
      </button>
    </div>
  );
};

export { ButtonCounter };
