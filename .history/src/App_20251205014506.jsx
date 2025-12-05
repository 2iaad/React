import { useState, useEffect } from "react";

export default function App() {

  return (
    <
  )
}












// export default function App() {

//   const [isOnline, setIsOnline] = useState(navigator.onLine); // navigator.onLine (built-in browser value).

//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }

//     function handleOffline() {
//       setIsOnline(false);
//     }

//     /**
//      * window is a built-in browser object that has a method called addEventListener that takes an 
//      * event name as the first argument and a function to execute when that event happens.
//      */
//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, [isOnline]);

//   return (
//     <div>
//       <h1>Online / Offline Detector</h1>

//       <p>
//         Status: {isOnline ? "Online" : "Offline"}
//       </p>
//     </div>
//   );
// }
