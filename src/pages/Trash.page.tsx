import {FC, memo} from "react";

interface Props {}

const Trash: FC<Props> = () => {
  return (
    <div>
        Trash page
    </div>
  );
};

Trash.defaultProps = {};

export default memo(Trash);