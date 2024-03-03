import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Elevate",
    },
    {
      text: "Your",
    },
    {
      text: "Drive",
    },
    {
      text: "With",
    },
    {
      text: "Luxury",
      className: "text-purple-900 dark:text-purple-900",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
