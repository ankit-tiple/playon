"use client";
import * as React from "react";
import { useState } from "react";
import { Clock2Icon, CalendarDays } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { format } from "date-fns";
export function CalendarWithTime() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12),
  );

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const [hours, minutes] = e.target.value.split(":").map(Number);
    setDate((prev) => {
      if (!prev) return undefined;
      const newDate = new Date(prev);
      newDate.setHours(hours, minutes);
      return newDate;
    });
  }
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline" />}
        className="w-full justify-between font-normal"
      >
        {date ? format(date, "MMM do, yyyy HH:mm") : "Pick a Date"}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-0"
            />
          </CardContent>
          <CardFooter className="border-t bg-card">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="time-from"
                    type="time"
                    step="60"
                    value={date ? format(date, "HH:mm") : ""}
                    onChange={handleTimeChange}
                    className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <InputGroupAddon>
                    <Clock2Icon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </FieldGroup>
          </CardFooter>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
