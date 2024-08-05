import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { Button } from "../../../components/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import "react-day-picker/dist/style.css";
interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) =>  void;
  eventStartAndEndDates: DateRange | undefined;
  setEventStartAndEndDates: (dates:DateRange | undefined) =>void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  eventStartAndEndDates,
  setEventStartAndEndDates
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  function openDatePicker() {
    return setIsDatePickerOpen(true);
  }
  function closeDatePicker() {
    return setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d ' de ' LLL ", {
          locale: ptBR,
        }).concat(
          format(eventStartAndEndDates.to, "'até' d ' de ' LLL", {
            locale: ptBR,
          })
        )
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestsInputOpen}
          onChange={(event) => setDestination(event.target.value)}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
        />
      </div>

      <button
        className="flex items-center gap-2"
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg flex-1 text-zinc-400">
          {displayedDate || "Quando?"}
        </span>
      </button>
      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              classNames={{
                chevron: `fill-lime-300`,
                day_button: " border-lime-400 border-2",
                range_middle: "bg-lime-300 text-zinc-800",
                range_end:
                  "bg-lime-300 text-zinc-800 rounded-full rounded-tl-none rounded-bl-none",
                range_start:
                  "bg-lime-300 text-zinc-800 rounded-full rounded-tr-none rounded-br-none",
                selected: "bg-lime-300  text-zinc-800",
                today: "text-lime-300",
              }}
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
