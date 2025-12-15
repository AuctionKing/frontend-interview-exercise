"use client";
import {
  Select as ShadcnSelect,
  SelectGroup,
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/src/components/ui/select";
import { Label } from "@radix-ui/react-label";

export const Select = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label htmlFor="name">Fruits</Label>
      <ShadcnSelect
        onValueChange={(value) => console.log(value)}
        onOpenChange={() => console.log("open")}
      >
        <SelectTrigger size="default" className="w-[125px]" id="name">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
        </SelectContent>
      </ShadcnSelect>
    </div>
  );
};
