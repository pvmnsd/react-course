import { useState } from "react";
import { useParams } from "react-router-dom";
import palettes from "../static/palette.json";

export const PaletteView = () => {
  const params = useParams();
  const paletteId = params.paletteId;
  const palette = palettes.find((palette) => palette.id === paletteId);

  const [selectedColor, setSelectedColor] = useState('black');
  const [showSplashScreen, setShowSplashScreen] = useState(false);

  return (
    <div className="bg-slate-500 h-full relative">

      <div className={['left-0 top-0 absolute h-full w-full transition-opacity ', 
        showSplashScreen ? ' opacity-100 z-[1]' : ' opacity-0'
        ]} style={{backgroundColor: selectedColor}}/>

      <div className="grid grid-cols-5 h-full">
        {palette.colors.map((color, colorId) => {
          return (
            <div
              className="group min-h-[120px] relative cursor-pointer"
              onClick={() => {
                setShowSplashScreen(true)
                new Audio('/src/assets/notify.mp3').play()
                navigator.clipboard.writeText(color.color)
                setSelectedColor(color.color)
                setTimeout(() => {
                  setShowSplashScreen(false)
                }, 2000);
              }}
              key={colorId}
              style={{ backgroundColor: color.color }}
            >
              <span className="absolute right-2 bottom-2 font-semibold">
                {color.name.toUpperCase()}
              </span>
              <div
                className="border-2 border-white rounded absolute left-1/2 bottom-1/2
            -translate-x-1/2 translate-y-1/2 px-4 py-2 border-opacity-25 font-semibold 
            tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity"
              >
                COPY
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
