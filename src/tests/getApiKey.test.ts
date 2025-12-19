import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";
import { IncomingHttpHeaders } from "http";

const person = {
  isActive: true,
  age: 32,
};


const apikey = getAPIKey(IncomingHttpHeaders());

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });

});

