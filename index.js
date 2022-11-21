import { createRoot } from "react-dom/client";

// import { useFloating } from "@floating-ui/react-dom-interactions";
// function App() {
//   const { x, y, reference, floating, strategy } = useFloating();

//   return (
//     <>
//       <button ref={reference}>Button</button>
//       <div
//         ref={floating}
//         style={{
//           position: strategy,
//           top: y ?? 0,
//           left: x ?? 0,
//           width: "max-content",
//         }}
//       >
//         Tooltip
//       </div>
//     </>
//   );
// }

import { Tooltip, Button } from "@mantine/core";

function App() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}

createRoot(document.getElementById("root")).render(<App />);
