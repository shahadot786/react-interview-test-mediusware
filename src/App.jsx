import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import ModalA from "./components/Modal/ModalA.jsx";
import ModalB from "./components/Modal/ModalB.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/*" element={<Menu />}>
        <Route exact path="problem-1" element={<Problem1 />} />
        <Route exact path="problem-2" element={<Problem2 />} />
      </Route>
      <Route exact path="/modal-a" element={<ModalA />} />
      <Route exact path="/modal-b" element={<ModalB />} />
    </Routes>
  );
}

export default App;
