"use client";
import { useState } from "react";
import { PRODUCT_CATEGORIES } from "./config";
import NavItem from "./NavItem";

export default function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex!==null
  return (
    <div className="flex h-full gap-4">
      {PRODUCT_CATEGORIES.map((category, idx) => {
        const handleOpen = () => {
          if (activeIndex === idx) {
            setActiveIndex(null);
          } else {
            setActiveIndex(idx);
          }
        };
        const isOpen = idx === activeIndex;
        return <NavItem category={category} handleOpen={handleOpen} isAnyOpen={isAnyOpen} isOpen={isOpen} />;
      })}
    </div>
  );
}
