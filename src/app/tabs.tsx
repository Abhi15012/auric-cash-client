"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../../components/ui/button";
import { useDialog } from "../../context/handleDialog";

export default function Tabs() {
  const [tabActive, setActiveTab] = React.useState("Home");

  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollYRef = React.useRef(0);

  const router = useRouter();
  const { setOpen, open } = useDialog();

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  React.useEffect(() => {
    if (pathname === "/") setActiveTab("Home");
    else if (pathname === "/buy-gold") setActiveTab("sellGold");
    else if (pathname === "/release-gold") setActiveTab("releaseGold");
    else if (pathname === "/about") setActiveTab("Aboutus");
    else setActiveTab("Home");
  }, [pathname, setActiveTab]);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;

      // Always show at very top; otherwise show only when scrolling up
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(isScrollingUp);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    {
      name: "Home",
      href: "/",
      tabActive: "Home",
      active: "/home-ia.png",
      iconSize: "w-4 h-5",
      inactive: "/home-a.png",
    },
    {
      name: "Sell Gold",
      href: "/buy-gold",
      tabActive: "sellGold",
      iconSize: "w-6 h-6",
      active: "/sell-ia.png",
      inactive: "/sell-a.png",
    },
    {
      name: "Release Gold",
      tabActive: "releaseGold",
      href: "/release-gold",
      iconSize: "w-5 h-5",
      inactive: "/loan-ia.png",
      active: "/loan-a.png",
    },
  ];
  return (
    <div
      className={`w-full rounded-t-3xl shadow-3xl shadow-gray-500 border-[1px] border-gray-300 flex-row flex-wrap shrink h-16 bg-white flex justify-around items-center transition-all duration-700 ease-in-out ${
        isVisible && !open ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {tabs.map((tab) => (
        <div
          key={tab.name}
          onClick={() => {
            setActiveTab(tab.tabActive);
            router.push(tab.href);
          }}
          className={`flex flex-col  items-center justify-center cursor-pointer  ${
            tabActive === tab.tabActive
              ? "text-primary text-[5px] font-medium"
              : "text-gray-600 font-medium"
          }`}
        >
          <div className={`relative ${tab.iconSize} mb-1`}>
            <Image
              src={tabActive === tab.tabActive ? tab.active : tab.inactive}
              alt={tab.name}
              fill 
              
              className={`object-contain ${
                tabActive === tab.tabActive ? "text-primary" : "fill-gray-900"
              }`}
            />
          </div>
          <span className="text-[11.5px] md:text-base lg:text-lg ">
            {tab.name}
          </span>
        </div>
      ))}

      <div className="md:flex-shrink-0  md:flex     lg:mx-4">
        <Button
          className="bg-primary  lg:ml-0 cursor-pointer hover:bg-orange-400 font-semibold text-white px-3 py-2 lg:px-5 lg:py-2 rounded-lg
            w-[100px] sm:w-[120px] md:w-[140px] lg:w-[180px] h-8 lg:h-12 text-sm lg:text-lg font-poppins transition-colors duration-500 flex items-center justify-center ease-in-out"
          onClick={() => setOpen(true)}
        >
          <span className="sm:inline text-[13px] md:text-base">
            Enquire Now
          </span>
        </Button>
      </div>
    </div>
  );
}
