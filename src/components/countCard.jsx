export default function CountCard() {
  return (
    <div className="w-1/4 h-[100px] bg-white  rounded-2xl shadow-lg m-3 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div>
        <h1>Total Issues</h1>
      </div>
      <div>
        <div className="text-2xl font-bold text-card-foreground">20</div>
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
