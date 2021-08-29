import {FC, memo} from "react";

interface Props {}

const Inbox: FC<Props> = () => {
  return (
    <div>
        Inbox page
    </div>
  );
};

Inbox.defaultProps = {};

export default memo(Inbox);