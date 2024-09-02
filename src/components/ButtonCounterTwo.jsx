// libs
import { useState, useEffect } from 'react';

// DO NOT MAKE ANY CHANGES TO CODE IN THIS FILE

const ButtonCounterTwo = () => {
  const [clickedCount, setClickedCount] = useState(0);

  useEffect(() => {
    return () => console.log('unmounted');
  }, []);

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

export { ButtonCounterTwo };
