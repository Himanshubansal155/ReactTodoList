import {FC, memo} from "react";

interface Props {}

const Trash: FC<Props> = () => {
  return (
    <div className="overflow-y-scroll absolute bottom-0 top-10 right-0 left-0 scrollbar mt-1.5">
        Trash page
      <div className="h-10"></div>
    </div>
  );
};

Trash.defaultProps = {};

export default memo(Trash);