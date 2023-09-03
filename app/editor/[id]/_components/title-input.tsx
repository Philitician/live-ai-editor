"use client";

import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { updateTitle } from "../_actions";

interface Props {
  defaultValue?: string;
}

export function TitleInput({ defaultValue }: Props) {
  const [value, setValue] = useState(defaultValue);
  const [debouncedValue] = useDebounce(value, 1000);

  useEffect(() => {
    if (!debouncedValue) return;
    updateTitle(debouncedValue);
  }, [debouncedValue]);
  return (
    <Input
      className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl"
      defaultValue={defaultValue}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
}
