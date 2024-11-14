import React from "react";
import { ToggleGroup, ToggleGroupItem } from "./toggleGroup";
import { TOGGLE_MENU_LIST_PROPS } from "./type";

const ToggleMenuFilter = ({ menuList = [] }: TOGGLE_MENU_LIST_PROPS) => (
  <ToggleGroup type="single">
    {menuList?.map((item, index) => (
      <ToggleGroupItem key={index} value={item.value}>
        {item.lable}
      </ToggleGroupItem>
    ))}
  </ToggleGroup>
);

export default ToggleMenuFilter;
