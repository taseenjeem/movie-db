import ActiveSidebar from "./ActiveSidebar";
import { getDictionary } from "@/data/dictionary/dictionaries";
import { IoMdTrendingUp } from "react-icons/io";
import {
  MdFiberNew,
  MdUpcoming,
  MdFavorite,
  MdWatchLater,
} from "react-icons/md";

const SideBar = async ({ language }) => {
  const dictionary = await getDictionary(language);
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <ActiveSidebar
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              path="/"
            >
              <IoMdTrendingUp className="w-6 h-auto" />
              <span>{dictionary.sidebar.trending}</span>
            </ActiveSidebar>
          </li>
          <li>
            <ActiveSidebar
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              path="/new-releases"
            >
              <MdFiberNew className="w-6 h-auto" />
              <span>{dictionary.sidebar.new_releases}</span>
            </ActiveSidebar>
          </li>
          <li>
            <ActiveSidebar
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              path="/coming-soon"
            >
              <MdUpcoming className="w-6 h-auto" />
              <span>{dictionary.sidebar.coming_soon}</span>
            </ActiveSidebar>
          </li>
          <li>
            <ActiveSidebar
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              path="/favorites"
            >
              <MdFavorite className="w-6 h-auto" />
              <span>{dictionary.sidebar.favorites}</span>
            </ActiveSidebar>
          </li>
          <li>
            <ActiveSidebar
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              path="/watch-later"
            >
              <MdWatchLater className="w-6 h-auto" />
              <span>{dictionary.sidebar.watch_later}</span>
            </ActiveSidebar>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
