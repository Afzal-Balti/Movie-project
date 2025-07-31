import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "SubMenu",
    icon: <MenuOutlined className="w-full" />,
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

const MenuBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return <Menu onClick={handleClick} mode="horizontal" items={items} />;
};

export default MenuBar;
