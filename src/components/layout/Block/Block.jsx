import React from "react";

import { BlockWrapper } from "./style";

function Block({children}) {
  return <>
    <BlockWrapper>
        {children}
    </BlockWrapper>
  </>;
}

export default Block;
