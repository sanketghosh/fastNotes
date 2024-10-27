// PACKAGES
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// COMPONENTS
import MainAppLayout from "@/layout/main-app-layout";
import { AddNote, Auth, Home, LandingPage, Note } from "@/pages";
import { AfterAuthRedirect, NoAuthNoAccess } from "@/protected";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          index={true}
          element={
            <AfterAuthRedirect>
              <LandingPage />
            </AfterAuthRedirect>
          }
        />
        <Route
          path="/auth"
          element={
            <AfterAuthRedirect>
              <Auth />
            </AfterAuthRedirect>
          }
        />
        <Route
          path="/home"
          element={
            <NoAuthNoAccess>
              <MainAppLayout>
                <Home />
              </MainAppLayout>
            </NoAuthNoAccess>
          }
        />
        <Route
          path="/add-note"
          element={
            <NoAuthNoAccess>
              <MainAppLayout>
                <AddNote />
              </MainAppLayout>
            </NoAuthNoAccess>
          }
        />
        <Route
          path="/note/:id"
          element={
            <NoAuthNoAccess>
              <MainAppLayout>
                <Note />
              </MainAppLayout>
            </NoAuthNoAccess>
          }
        />
      </Routes>
    </Router>
  );
}
