import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainAppLayout from "./layouts/main-app-layout";
import AddNewNote from "./pages/add-new-note";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainAppLayout>
              <Home />
            </MainAppLayout>
          }
        />
        <Route
          path="/add-new-note"
          element={
            <MainAppLayout>
              <AddNewNote />
            </MainAppLayout>
          }
        />
      </Routes>
    </Router>
  );
}
