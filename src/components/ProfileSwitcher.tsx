import { useState } from "react";
import Navbar from "./Navbar";
import Profile_Nutthawat from "./Profile_Nutthawat";
import Profile_Tanaphoom from "./Profile_Tanaphoom";
import Profile_Kasemsak from "./Profile_Kasemsak";
import Profile_Team from "./Profile_Team";

const links = [
  { label: "Team", href: "#team" },
  { label: "Nutthawat", href: "#nutthawat" },
  { label: "Tanaphoom", href: "#tanaphoom" },
  { label: "Kasemsak", href: "#kasemsak" },
];

export default function ProfileSwitcher() {
  const [activeHref, setActiveHref] = useState("#team");

  const renderProfile = () => {
    switch (activeHref) {
      case "#team":
        return<Profile_Team/>;
      case "#nutthawat":
        return <Profile_Nutthawat />;
      case "#tanaphoom":
        return <Profile_Tanaphoom />;
      case "#kasemsak":
        return <Profile_Kasemsak />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar links={links} activeHref={activeHref} onNavigate={setActiveHref} />
      {renderProfile()}
    </>
  );
}
