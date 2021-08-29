import classNames from "classnames";
import { FC, memo } from "react";
import { sidebarSelector } from "../selectors/sidebar.selectors";
import { useAppSelector } from "../store";
import InputBar from "./InputBar";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const toggle = useAppSelector(sidebarSelector);
  const classnames = classNames(
    "relative h-full z-10 ease-linear duration-1000 text-gray-400 rounded-md",
    { "md:ml-60": toggle.isSidebarOpen }
  );
  return (
    <div className={classnames}>
      <InputBar />
      {props.children}
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
