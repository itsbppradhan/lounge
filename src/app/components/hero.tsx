import { Imperial_Script } from "next/font/google";

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperial-script",
  weight: "400",
});

export default function Hero() {
  return ( 
    <div className="flex flex-col items-center gap-4">
        <div className={imperialScript.className}>
     
            <p className="text-5xl">Rest here, traveller...</p>
            
      </div>
      <p className="font-extralight w-96 text-center">
      In a world swirling with chaos, pause and step into your haven. Here, tranquility reigns, inviting you to reflect and rediscover the beauty of goodness.
<br/>
Join us on a journey to reclaim hope and simplicity. Rest here, traveller, and let’s create a brighter tomorrow together.
</p>


    </div>
  );
}
