import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BillCalculator />
    </div>
  );
}

function BillCalculator() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [serviceFriend, setServiceFriend] = useState(0);
  function handleReset() {
    setBill(0);
    setService(0);
    setServiceFriend(0);
  }
  return (
    <div>
      <span> How much was the bill? </span>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <Service service={service} onService={setService}>
        How did you like the service?
      </Service>
      <Service service={serviceFriend} onService={setServiceFriend}>
        {" "}
        How did your friend like the service?
      </Service>
      {bill > 0 && (
        <>
          <Output bill={bill} service={service} serviceFriend={serviceFriend} />
          <Result onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Service({ children, service, onService }) {
  return (
    <div>
      <span> {children} </span>
      <select value={service} onChange={(e) => onService(e.target.value)}>
        <option value="0"> Dissatisfied(0%)</option>
        <option value="5"> It was ok(5%) </option>
        <option value="10"> It was good</option>
        <option value="20"> Absolutely amazing </option>
      </select>
    </div>
  );
}

function Output({ bill, service, serviceFriend }) {
  return (
    <div>
      <h2>
        You pay ${Number(bill) + Number(service) + Number(serviceFriend)}
         {` Bill Amount: ${Number(bill)} + Tips:${Number(
          service
        )} + FriendTips:${Number(serviceFriend)})`}
      </h2>
    </div>
  );
}

function Result({ onReset }) {
  return (
    <div>
      <button onClick={onReset}> Reset </button>
    </div>
  );
}
export default App;
