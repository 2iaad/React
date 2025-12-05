import { useState, useEffect } from "react";

export default function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      <h1>Online / Offline Detector</h1>
      <p>
        Status:{" "}
        <span
          style={{
            color: isOnline ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>
    </div>
  );
}
