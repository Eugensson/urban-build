"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-5 mb-5">
        <Input name="fullName" type="text" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Email address" />
        <div className="flex flex-col xl:flex-row gap-5">
          <Input name="phone" type="tel" placeholder="Phone number" />
          <Select>
            <SelectTrigger className="w-full rounded-none h-13.5 text-secondary outline-none">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="renovation">Renovation</SelectItem>
                <SelectItem value="restoration">Restoration</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Textarea
          name="message"
          placeholder="Enter your message here..."
          className="h-45 resize-none rounded-none"
        />
        <Button text="Send message" />
      </div>
    </form>
  );
};
