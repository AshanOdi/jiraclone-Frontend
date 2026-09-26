import { Navigate, useLocation } from "react-router-dom";

// detail and edit pages need an issue in location.state,
// so go back to the board when the page is opened directly (e.g. refresh)
export default function RequireIssue({ children }) {
  const location = useLocation();
  if (!location.state) return <Navigate to="/issue" replace />;
  return children;
}
