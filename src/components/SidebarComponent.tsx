import classNames from "classnames";
import { FC, memo } from "react";
import { IconType } from "react-icons";

interface Props {
  active: boolean;
  batchNumber?: number;
  Icon: IconType;
  title: string;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const SidebarComponent: FC<Props> = ({
  active,
  batchNumber,
  Icon,
  title,
  type,
  onClick
}) => {
  let classnames = classNames(
    "p-2 px-3 flex justify-between text-gray-400 rounded-r-full cursor-pointer transition duration-300 ease-in-out",
    { "text-gray-800 bg-green-600": active, "hover:opacity-80": !active }
  );
  return (
    <div className={classnames} onClick={onClick}>
      <div>
        <Icon className="inline text-xl mr-2" />
        <span className="capitalize">{title}</span>
      </div>
      {batchNumber!==undefined && (
        <span
          className={classNames("border px-2 rounded-full text-sm mx-2 font-bold", {
            "border-opacity-0": active,
            "border-gray-400": type === "primary",
            "border-blue-400 text-blue-400": type === "secondary",
            "border-yellow-400 text-yellow-400": type === "tertiary",
          })}
        >
          {batchNumber}
        </span>
      )}
    </div>
  );
};

SidebarComponent.defaultProps = {};

export default memo(SidebarComponent);
