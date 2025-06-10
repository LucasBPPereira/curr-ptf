
import {RotatingText} from "@/components/motion/RotatingText";

export default function PageHome() {
  return (
    <div className="h-screen w-full flex items-center ">
        <div className="w-full h-32 border rounded-lg flex items-center justify-center gap-2 transition-all">
          <h1 className="flex items-center gap-2 text-2xl ">
          Desenvolvedor
          <RotatingText
            words={["Front-end", "Web", "Is", "Cool!"]}
            className=""
          />
        </h1>
        </div>
    </div>
  );
}
