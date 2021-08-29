import { FC, memo } from "react";

interface Props {}

const InputBar: FC<Props> = () => {
  return (
    <div className="">
      <input
        placeholder="Search Here..."
        className="w-full shadow-2xl bg-transparent tracking-wider focus:outline-none p-3 placeholder-gray-300 text-sm border-b border-gray-800 text-green-600"
      />
    </div>
  );
};

InputBar.defaultProps = {};

export default memo(InputBar);
