import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "./config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
type Category = (typeof PRODUCT_CATEGORIES)[number];
interface Props {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}
export default function NavItem({
  category,
  handleOpen,
  isAnyOpen,
  isOpen,
}: Props) {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5 "
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground",{
            "rotate-180": isOpen
          })}/>
        </Button>
      </div>
    </div>
  );
}
