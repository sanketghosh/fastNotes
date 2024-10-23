import { AddNote, Home, LandingPage, Note } from "@/pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainAppLayout from "./layout/main-app-layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index={true} element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <MainAppLayout>
              <Home />
            </MainAppLayout>
          }
        />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/note/:id" element={<Note />} />
      </Routes>
    </Router>
  );
}
