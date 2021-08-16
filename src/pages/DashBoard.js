// import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
// import { GithubOutlined } from "@ant-design/icons";
import Body from "../components/Body/Body";
import Header from "../components/Header/Header";
import { BottomNav } from "../components/bottomNav/BottomNav";
// import { Header } from "antd/lib/layout/layout";
// import Chart from '../components/chart/Chart';

export const DashBoard = () => {
  return (
    <div className="dashboard flex  ">
      <Sidebar />
      <BottomNav />
      <div className="flex flex-col">
        <Header />
        <Body />
      </div>
    </div>

  );
};
