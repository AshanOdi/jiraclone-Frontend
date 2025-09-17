import Column from "./column";

export default function Board() {
  return (
    <div className="flex gap-4 p-6">
      <Column title="TO DO" tasks="{data.todo}" />
      <Column title="IN PROGRESS" tasks="{data.inProgress}" />
      <Column title="CODE REVIEW" tasks="{data.codeReview} " />
      <Column title="DONE" tasks="{data.done}" />
    </div>
  );
}
