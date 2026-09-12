import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";

export default function Playlist() {
  return (
    <Card>
      <CardContent>
        <Card>
          <CardHeader>
            <CardTitle>Football Game</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div>
              <p>Location: Kharadi</p>
              <p>Amount: 100 Rs</p>
              <p>Time of Play : 29th Aug 21:00</p>
              <p>Remaninig Slots : 2</p>
            </div>
            <div>
              <Button>Join Play</Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
