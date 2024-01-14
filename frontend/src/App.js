import { BrowserRouter, Route, Routes } from "react-router-dom/dist/umd/react-router-dom.development";
import "./App.css";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import Home from "./pages/Home";
import EditPage from "./pages/EditPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/viewEmployees" element={<ViewEmployee />} />
          <Route path="/editEmployee/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
