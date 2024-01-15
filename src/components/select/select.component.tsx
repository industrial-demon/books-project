import React, { ElementRef, Ref } from "react";
import * as SelectPrimitives from "@radix-ui/react-select";
import classnames from "classnames";

import { ArrowDownIcon } from "../../icons";

import "./select.component.css";

export type SelectProps = {
  placeholder?: SelectPrimitives.SelectValueProps["placeholder"];
} & SelectPrimitives.SelectProps &
  Pick<SelectPrimitives.SelectContentProps, "position">;

export const Select = ({ children, ...props}: SelectProps) => (
  <SelectPrimitives.Root {...props}>
    <SelectPrimitives.Trigger className="SelectTrigger" aria-label="Food">
      <SelectPrimitives.Value  />
      <SelectPrimitives.Icon className="SelectIcon">
        <ArrowDownIcon />
      </SelectPrimitives.Icon>
    </SelectPrimitives.Trigger>
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content sideOffset={8} position="popper" className="SelectContent">
        <SelectPrimitives.Viewport className="SelectViewport">
          {children}
        </SelectPrimitives.Viewport>
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  </SelectPrimitives.Root>
);

const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: SelectPrimitives.SelectItemProps,
    forwardedRef: Ref<ElementRef<typeof SelectPrimitives.Item>>
  ) => {
    return (
      <SelectPrimitives.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
        <SelectPrimitives.ItemIndicator className="SelectItemIndicator"></SelectPrimitives.ItemIndicator>
      </SelectPrimitives.Item>
    );
  }
);

Select.Item = SelectItem;
Select.Item.displayName = SelectPrimitives.Item.displayName;
