import { LoaderCircle } from "lucide-react";

function Skeleton() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <span className="w-14 h-14 rounded-lg shadow-lg bg-zinc-400/30 flex items-center justify-center">
        <LoaderCircle className="text-black/80 animate-spin" />
      </span>
    </div>
  );
}

export default Skeleton;
