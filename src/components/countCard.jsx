import { useNavigate } from "react-router-dom";

// A card to show count of issues based on different criteria
export default function CountCard({ title, count }) {
  // console.log(count);

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/issue");
      }}
      className="w-1/4 h-[100px] backdrop-blur-xs shadow-lg shadow-gray-500 rounded-xl p-3 mb-3 border-l-4 border-orange-400 cursor-pointer"
    >
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <div className="text-2xl font-bold text-card-foreground">{count}</div>
      </div>
    </div>
  );
}
