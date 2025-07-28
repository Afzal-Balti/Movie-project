import React, { useEffect, useState } from "react";
import { Dropdown, Space } from "antd";
import Brightness from "../../../assets/Images/brightness.png";
import "../../../Components/theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

type Theme = "dark" | "light" | "system";
const DropComp: React.FC = () => {
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
      icon: <i className="fas fa-sun "></i>,
      onClick: () => setTheme("light"),
    },

    {
      key: "2",
      label: "Dark",
      icon: <i className="fas fa-moon "></i>,
      onClick: () => setTheme("dark"),
    },
    {
      key: "3",
      label: "System",
      icon: <i className="fas fa-desktop"></i>,
      onClick: () => setTheme("system"),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <Space className="cursor-pointer">
        {theme === "dark" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <img src={Brightness} className="w-6 h-6" alt="Theme toggle" />
        )}
      </Space>
    </Dropdown>
  );
};

export default DropComp;
