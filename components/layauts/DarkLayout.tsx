import { FC, PropsWithChildren } from "react";

interface Props {
  foo?: string;
}

export const DarkLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#E2D6FF",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
