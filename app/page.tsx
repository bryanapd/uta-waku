import Image from "next/image";
import { AppBrand, AppHeader, AppLinks, AppSpacer } from "./_components/Header";

interface RoutesProps {
  path: string;
  label: string;
}

const routes: RoutesProps[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/shuffle",
    label: "Shuffle",
  },
  {
    path: "/profile",
    label: "My Profile",
  },
];
export default function Home() {
  return (
    <div>
      <AppHeader>
        <AppBrand
          title="Breezarre Anime Tracker"
          logo="https://animeanime.global/wp-content/uploads/2020/06/335869.png"
          width={100}
          height={100}
          alt="Anime Themes"
        />
        <AppLinks direction="row" routes={routes} />
      </AppHeader>

      <AppSpacer />

      
    </div>
  );
}
