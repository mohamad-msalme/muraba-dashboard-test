import { cn } from "../../../utils/cn";
import { Icon } from "@iconify/react";
import { useMatch } from "react-router-dom";
import { useRouter } from "../../../routes";

type FavIconProps = {
  onRemoveClick?: (path: string) => void;
  removable?: boolean;
  className?: string;
  onClick?: () => void;
  path: string;
  icon: string;
};

export const FavIcon: React.FC<FavIconProps> = ({
  onClick,
  onRemoveClick,
  removable = false,
  path,
  icon,
  className,
}) => {
  const { push } = useRouter();
  const active = useMatch(path);
  const handelClick = () =>
    typeof onClick === "function" ? onClick() : push(path);

  const handelRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    onRemoveClick?.(path);
  };
  return (
    <div
      onClick={handelClick}
      className={cn(
        "cursor-pointer group relative transition-all w-fit p-2 ring-gray-300 ring-1 rounded-lg hover:ring-red-300 hover:bg-red-50 hover:text-red-400",
        {
          "ring-red-300 bg-red-50 text-red-400": active,
        }
      )}
    >
      <span
        onClick={handelRemove}
        className={cn(
          "transition-all  hover:w-5 hover:h-5 hidden text-white justify-center absolute w-4 h-4 rounded-full shadow-sm top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-red-500",
          { " group-hover:flex group-hover:items-center": !active && removable }
        )}
      >
        <Icon icon="eva:close-outline" />
      </span>
      <Icon icon={icon} className={cn("w-5 h-5", className)} />
    </div>
  );
};
