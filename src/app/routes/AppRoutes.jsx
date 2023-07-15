import { useRoutes } from "react-router-dom";
// LAYOUTS
import { LayoutApp } from "../components/layouts";
// SCREENS
import { HomeNetflix, TvProgrammes } from "../screens";

export default function Router() {
  let element = useRoutes([
    {
      element: <LayoutApp />,
      children: [
        { path: "/", element: <HomeNetflix /> },
        { path: "tvProgrammes", element: <TvProgrammes /> },
      ],
    },
  ]);

  return element;
}
