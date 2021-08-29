import { FC, memo } from "react";
import Navbar from "../components/Navbar";
import TodoList from "./TodoList.page";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div className="bg-black w-full h-screen text-white p-3">
      <Navbar />
      <TodoList />
    </div>
  );
};

Home.defaultProps = {};

export default memo(Home);
