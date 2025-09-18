import SummeryBoard from "../components/summeryBoard";
import { Sample } from "../components/sample";

export default function HomePage() {
  return (
    <div className="flex w-full h-full p-4 gap-4">
      <SummeryBoard />
      <SummeryBoard />
    </div>
  );
}
