"use client";

import Kenat from "kenat";
import { DatePicker } from "et-calendar";
import { EthiopianDate } from "et-calendar/lib";
import { useEffect, useState } from "react";

export function EthiopianDatePicker() {
  const et = new Kenat();
  const etToday = et.getEthiopian();
  const gregorianDate = new Date();

  return (
    <div className="flex flex-col justify-center p-5 gap-3">
      <h1 className="text-3xl font-semibold text-blue-400">Ethiopian Date</h1>

      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <p>Today's Ethiopian Date: {JSON.stringify(etToday)}</p>
        <p className="mb-4">
          Today's Gregorian Date: {gregorianDate.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default function useEthiopianDatePicker(
  calenderType: "ethiopian" | "gregorian",
  locale: string = "EN"
) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedFormattedDate, setSelectedFormattedDate] =
    useState<string>("EN");

  const checkLocale = () => {
    if (locale && locale == "am") {
      return "AMH";
    }
    return "EN";
  };

  useEffect(() => {
    setSelectedFormattedDate(
      EthiopianDate.formatEtDate(
        EthiopianDate.toEth(selectedDate),
        checkLocale()
      )
    );
  }, [locale]);

  const handleDateChange = (changedDate: Date) => {
    let convertedDate = EthiopianDate.toEth(changedDate);
    setSelectedDate(changedDate);
    if (calenderType === "ethiopian") {
      setSelectedFormattedDate(
        EthiopianDate.formatEtDate(convertedDate, checkLocale())
      );
    } else {
      console.log("gregorian date", changedDate.toDateString());
      setSelectedFormattedDate(changedDate.toDateString());
    }
  };

  const DatePickerUI = () => {
    return (
      <DatePicker
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        showCalendars={calenderType}
        viewFirst={calenderType === "ethiopian" ? "Ethiopian" : "Gregorian"}
        dateFormat="MMMM dd, yyyy"
      />
    );
  };

  return {
    showDatePicker,
    setShowDatePicker,
    selectedFormattedDate,
    setSelectedFormattedDate,
    DatePickerUI,
  };
}
