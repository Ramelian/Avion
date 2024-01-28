const Counter = ({ counter, setCounter, increment, decrement }) => {
  const addCounter = () => {
    if (counter >= 10) return;
    setCounter((prev) => prev + 1);
    if (increment) increment();
  };

  const subtractCounter = () => {
    if (counter <= 1) return;
    setCounter((prev) => prev - 1);
    if (decrement) decrement();
  };

  return (
    <div className="flex justify-between gap-2 md:gap-4 bg-lightGray py-1 px-2 md:py-3 md:px-4 w-full max-w-[132px] md:w-[132px]">
      <button onClick={subtractCounter} className="p-1 md:p-2 md:hover:bg-gray-300">
        -
      </button>
      <input
        placeholder={counter}
        disabled
        className="w-full text-center placeholder:border-0 bg-lightGray cursor-not-allowed placeholder:text-black"
      />
      <button onClick={addCounter} className="p-1 md:p-2 md:hover:bg-gray-300">
        +
      </button>
    </div>
  );
};
export default Counter;
