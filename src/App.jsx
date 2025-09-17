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
      <div>
        <Header />
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
    </BrowserRouter>
  );
}

export default App;
