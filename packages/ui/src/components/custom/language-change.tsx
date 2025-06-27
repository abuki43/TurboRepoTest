"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@workspace/ui/components/dropdown-menu";

interface LanguageChangeProps {
    locale:any
    changeLanguage: any;
}

export default function LanguageChange({ locale,changeLanguage }: LanguageChangeProps) {
  return (
    <div className="absolute top-5 right-7 ">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-sm">
          {locale == "en" ? "English" : "Amharic"}
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => changeLanguage("en")}>English</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage("am")}>Amharic</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
