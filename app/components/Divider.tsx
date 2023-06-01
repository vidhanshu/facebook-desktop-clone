"use client";

type DividerProps = {
  className?: string;
};
function Divider({ className }: DividerProps) {
  return (
    <hr
      className={`w-full border-none p-0 h-[.5px] bg-gray-200 ${className}`}
    />
  );
}

export default Divider;
