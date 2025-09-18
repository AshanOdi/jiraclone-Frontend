import { useNavigate } from "react-router-dom";

export default function CountCard({ title, count }) {
  console.log(count);

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/issue");
      }}
      className="w-1/4 h-[100px] bg-white shadow-md rounded-xl p-3 mb-3 border-l-4 border-gray-400 cursor-pointer"
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

{
  /* <Card className="bg-card border-border">
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium text-card-foreground">
      Total Issues
    </CardTitle>
    <Bug className="h-4 w-4 text-muted-foreground" />
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold text-card-foreground">{stats.total}</div>
    <p className="text-xs text-muted-foreground">+2 from last week</p>
  </CardContent>
</Card>; */
}
