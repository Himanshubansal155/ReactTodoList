import {FC, memo} from "react";

interface Props {}

const Done: FC<Props> = () => {
  return (
    <div>
        Done page
    </div>
  );
};

Done.defaultProps = {};

export default memo(Done);