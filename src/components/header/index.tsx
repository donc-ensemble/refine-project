"use client";

import { ColorModeContext } from "@contexts/color-mode";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import {
  Layout as AntdLayout,
  Avatar,
  Space,
  Switch,
  Typography,
  theme,
} from "antd";
import React, { useContext } from "react";

const { useToken } = theme;

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky = true,
}) => {
  const { token } = useToken();
  const { mode, setMode } = useContext(ColorModeContext);

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1;
  }

  return (
    <AntdLayout.Header style={headerStyles}>
      <Space>
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
      </Space>
    </AntdLayout.Header>
  );
};
