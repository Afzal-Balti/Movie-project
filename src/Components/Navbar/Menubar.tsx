import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const MenuBar: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const items: MenuItem[] = [
    {
      key: "SubMenu",
      icon: (
        <MenuOutlined
          className={`text-xl transition-colors duration-300 ${
            scroll ? "text-black" : "text-white"
          }`}
        />
      ),
      children: [
        {
          type: "group",
          children: [
            { label: "Home", key: "/" },
            { label: "Movies", key: "/movies" },
            { label: "Series Tv ", key: "/tvseries" },
          ],
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const handleClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <div className={`menu-wrapper ${scroll ? "scrolled" : ""}`}>
      <Menu
        onClick={handleClick}
        mode="horizontal"
        items={items}
        className="border-none"
      />
    </div>
  );
};

export default MenuBar;
