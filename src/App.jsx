import "./App.css";
import HomePage from "./pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllIssuePage from "./pages/allIssuePage";
import EditIssuePage from "./pages/editIssuePage";
import CreateIssuePage from "./pages/createIssuePage";
import IssueDetailPage from "./pages/issueDetailPage";
import Header from "./components/Header";
import IssueHistoryPage from "./pages/issueHistoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen flex flex-col">
        <Header />
        <div className="w-full h-[calc(100vh-20px)] flex items-center justify-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/issue" element={<AllIssuePage />} />
            <Route path="/edit" element={<EditIssuePage />} />
            <Route path="/create" element={<CreateIssuePage />} />
            <Route path="/detail" element={<IssueDetailPage />} />
            <Route path="/history" element={<IssueHistoryPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
