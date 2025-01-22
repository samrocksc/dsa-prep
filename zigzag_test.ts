import { assertEquals } from "@std/assert";
import { zigzag } from "./zigzag.ts";

Deno.test("should return base value", () =>
  assertEquals(zigzag("PAYPALISHIRING", 1), "PAYPALISHIRING")
);
Deno.test("should return zigzag value", () =>
  assertEquals(zigzag("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR")
);
