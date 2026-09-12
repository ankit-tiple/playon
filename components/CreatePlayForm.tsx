import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarWithTime } from "@/components/DateTimePicker";
import { Calendar } from "@/components/ui/calendar";
export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={<Button variant="outline">Create Play</Button>}
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Create Play Form</DialogTitle>
            <DialogDescription>
              Enter the Details for the Play that you want to Create
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="playtype">Play Type</Label>
              <Input id="playtype" name="playtype" defaultValue="" />
            </Field>
            <Field>
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" defaultValue="" />
            </Field>
            <Field>
              <Label htmlFor="playtime">Time Of Play</Label>
              {/*
              <Input
                id="playtime"
                name="playtime"
                type="datetime-local"
                placeholder="DD-MM-YYYY HH:MM:SS"
              />
	      */}
              <CalendarWithTime />
            </Field>
            <Field>
              <Label htmlFor="totalslots">Total Slots</Label>
              <Input id="totalslots" name="totalslots" defaultValue="" />
            </Field>
            <Field>
              <Label htmlFor="amountperhead">Amount Per Head</Label>
              <Input id="amountperhead" name="amountperhead" defaultValue="" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
