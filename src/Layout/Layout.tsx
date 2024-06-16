import React from "react";

interface Props {
  children: React.ReactElement;
}

export default function Layout(props: Props) {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
}
