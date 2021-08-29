import {FC, memo} from "react";

interface Props {}

const Important: FC<Props> = () => {
  return (
    <div>
        Important page
    </div>
  );
};

Important.defaultProps = {};

export default memo(Important);