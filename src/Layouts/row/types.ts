import { HorizontalSpacing, VerticalSpacing } from "@themes/spacing";
import { ReactNode } from "react";
import { FlexStyle } from "src/Types";

export type RowProps = {
  children: ReactNode;
  marginTop?: number;
  justifyContent?: FlexStyle["justifyContent"];
  alignItems?: FlexStyle["alignItems"];
  flex?: number;
  gap?: VerticalSpacing | HorizontalSpacing;
};
