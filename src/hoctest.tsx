import React, {FC} from "react";

const hoctest = (MyComponent: FC) => (props: any) => {
    return (
      <div>
        <MyComponent {...props}>
          {props.children.toUpperCase()}
        </MyComponent>
      </div>
    )
  }

export default hoctest