import React, { useEffect, useState } from "react";
import { Dropdown, Space } from "antd";
import "../../../Components/theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SunMedium } from "lucide-react";

interface propsScroll {
  scroll: boolean;
}

type Theme = "dark" | "light" | "system";
const DropComp: React.FC<propsScroll> = ({ scroll }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const getSystemTheme = (): "dark" | "light" => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = getSystemTheme();
      document.body.className = systemTheme;

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        document.body.className = e.matches ? "dark" : "light";
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      document.body.className = theme;
    }
  }, [theme]);

  const items = [
    {
      key: "1",
      label: "Light",
      icon: <SunMedium className="w-5 h-5" />,
      onClick: () => setTheme("light"),
    },

    {
      key: "2",
      label: "Dark",
      icon: <i className="fas fa-moon  "></i>,
      onClick: () => setTheme("dark"),
    },
    {
      key: "3",
      label: "System",
      icon: <i className="fas fa-desktop "></i>,
      onClick: () => setTheme("system"),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <Space className="cursor-pointer">
        {theme === "dark" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <SunMedium
            className={`w-7 h-7 ${scroll ? "text-black" : "text-white"}`}
          />
        )}
      </Space>
    </Dropdown>
  );
};

export default DropComp;
