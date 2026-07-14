import { describe, expect, it } from "vitest";

import { calculateDiscount } from "../../src/utils/maths";

describe("calculateDiscount", () => {
    it("should calculate discount correctly", () => {
        expect(calculateDiscount(1000, 20)).toBe(800);
    });

    it("should return original price for 0% discount", () => {
        expect(calculateDiscount(500, 0)).toBe(500);
    });
});