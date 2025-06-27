"use client";
import { useState } from "react";
import useUserStore from "@workspace/core/src/store/user-store";
import { useTranslations } from "next-intl";
import useEthiopianDatePicker from "@workspace/core/src/calender/ethiopian-date-picker";
import { Button } from "@workspace/ui/components/button";
import { useLocale } from "next-intl";

export default function DashboardPage() {
  
  const locale = useLocale();
  const user = useUserStore((state) => state.user);
  const [calendarType, setCalendarType] = useState<"ethiopian" | "gregorian">("ethiopian")
  const t = useTranslations("dashboard");
  const {
    showDatePicker,
    setShowDatePicker,
    selectedFormattedDate,
    DatePickerUI,
  } = useEthiopianDatePicker(calendarType, locale);

  const handleShowDatePicker = (calendarType: "ethiopian" | "gregorian") => {
    setShowDatePicker(!showDatePicker);
    setCalendarType(calendarType);
  };

  

  return (
    <div className="flex flex-col items-center  py-24  h-full w-full bg-background px-4">
      <h1 className="text-3xl font-semibold tracking-tight">
        {t("welcome")} <code>{user?.email}</code>
      </h1>
      <div className="mt-4 flex gap-4">
        <Button onClick={() => handleShowDatePicker("ethiopian")}>
           ethiopian date picker
        </Button>

        <Button onClick={() => handleShowDatePicker("gregorian")}>
           gregorian date picker
        </Button>


      </div>

      {selectedFormattedDate && (
        <div className="mt-4">
          <p className="text-lg">
            {t("selectedDate")} : {selectedFormattedDate}
          </p>
        </div>
      )}

      
        <div className="mt-4">
          <DatePickerUI />
        </div>
      
    </div>
  );
}
