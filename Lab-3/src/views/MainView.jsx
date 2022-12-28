import { useNavigate } from "react-router-dom";
import palettes from "../static/palette.json";

const backgroundSvg = "/src/assets/bg.svg";

const footerInfo = [
  {
    title: "share",
    items: [
      "Send via e-mail",
      "Share on Twitter",
      "Share on Facebook",
      "Share on Google Plus",
      "Share on LinkedIn",
    ],
  },
  {
    title: "more",
    items: ["Contact Me", "Subscribe", "Submit", "br", "Replay Onboarding"],
  },
  {
    title: "about",
    noHref: true,
    items: [
      "Flat UI Colors 2 brought to you by Ahmet Sulek. Follow me on Twitter or Subscribe to be the first to know when I launch new products.",
      "br",
      "Read the article on Medium to learn more.",
    ],
  },
];

function MainView() {
  const navigate = useNavigate()

  return (
    <div
      className="bg-slate-500 h-full bg-cover"
      style={{ backgroundImage: `url(${backgroundSvg})` }}
    >
      <div className="max-w-5xl mx-auto h-full flex flex-col">

        <header className="h-[105px] flex-shrink-0 flex items-center select-none">
          <span
            className="text-2xl font-semibold tracking-[2.5px] cursor-pointer"
            style={{ textShadow: "0 1px,1px 0,1px 1px" }}
          >
            FLAT UI COLORS 2
          </span>
        </header>

        <div className="flex-1 grid grid-cols-3 gap-14">
          {palettes.map((palette) => {
            return (
              <div
                key={palette.id}
                className="rounded-[4px] p-2 bg-white min-h-[200px] flex flex-col cursor-pointer"
                onClick={() => navigate(`/palette/${palette.id}`)}
              >
                <div className="h-[151px] grid grid-cols-5">
                  {palette.colors.map((color, colorId) => {
                    return (
                      <div
                        key={colorId}
                        style={{ backgroundColor: color.color }}
                      ></div>
                    );
                  })}
                </div>
                <div className="flex flex-grow items-center justify-between">
                  <div className="text-black font-semibold">
                    {palette.paletteName}
                  </div>
                  <div className="text-xl">{palette.emoji}</div>
                </div>
              </div>
            );
          })}
        </div>

        <footer className="flex gap-x-20 py-5 leading-7">
          {footerInfo.map((block, i) => {
            return (
              <div className="max-w-[400px]" key={i}>
                <span className="font-bold">{block.title.toUpperCase()}</span>
                <div className="flex flex-col mt-3 font-semibold">
                  {block.items.map((item, j) => {
                    return item === "br" ? (
                      <span className="h-5" key={j} />
                    ) : (
                      <span
                        key={j}
                        className={!block.noHref ? "cursor-pointer" : null}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </footer>
      </div>
    </div>
  );
}
export default MainView;
