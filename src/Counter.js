import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const countTimesThree = count * 3; // Example setting variable based on state
  const thresholdNumber = 5;
  const greaterThanThreeMessage = count > thresholdNumber ? `Wow, it's greater than ${thresholdNumber}!` : `It's not greater than ${thresholdNumber}!`;

  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      {count > 0 && <button onClick={() => setCount(count - 1)}>Decrease Count</button>}
      <p>{greaterThanThreeMessage}</p>
      <p>{
        /* Count greater than or equal to 10, show the count multiplied by 3 */
        count >= 10 && count * 3
      }</p>
      <p>The number is {
        /* Show if the count is even or odd */
        count % 2 === 0 ? "even" : "odd"
      }</p>
      <p>{
        /* If the count is not 0, show a reset button that sets it to 0 */
        count !== 0 ? <button onClick={() => setCount(count - count)}>Reset</button> : null
      }</p>
      <button onClick={() => setCount(count * 2)}>Double Count</button>
    </div>
  );
}
