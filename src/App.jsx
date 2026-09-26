import HomePage from "./pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllIssuePage from "./pages/allIssuePage";
import EditIssuePage from "./pages/editIssuePage";
import CreateIssuePage from "./pages/createIssuePage";
import IssueDetailPage from "./pages/issueDetailPage";
import Header from "./components/header";
import Footer from "./components/footer";
import RequireIssue from "./components/requireIssue";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/contactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Toaster
            position="top-right"
            toastOptions={{ style: { fontSize: "14px" } }}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/issue" element={<AllIssuePage />} />
            <Route path="/edit" element={<RequireIssue><EditIssuePage /></RequireIssue>} />
            <Route path="/create" element={<CreateIssuePage />} />
            <Route path="/detail" element={<RequireIssue><IssueDetailPage /></RequireIssue>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
