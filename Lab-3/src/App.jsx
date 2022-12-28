import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainView from './views/MainView'
import {PaletteView} from './views/PaletteView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView/>,
  },
  {
    path: "/palette/:paletteId",
    element: <PaletteView/>,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="text-white h-full w-full font-[Barlow]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
