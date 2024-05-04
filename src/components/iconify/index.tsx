import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { cn } from "../../utils/cn";

export type IconifyProps = IconifyIcon | string;
interface Props {
  icon: IconifyProps;
  boxClassName?: string;
  iconClassName?: string;
}

export const Iconify = React.forwardRef<HTMLDivElement, Props>(
  ({ icon, boxClassName = "", iconClassName }, ref) => {
    return (
      <div ref={ref} className={cn("w-5, h-5", boxClassName)}>
        <Icon icon={icon} className={cn("w-5, h-5", iconClassName)} />
      </div>
    );
  }
);
