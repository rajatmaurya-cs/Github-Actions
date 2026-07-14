import { describe, expect, it } from "vitest";
import "dotenv/config";
import { calculateDiscount,hasEnvironmentVariable } from "../../src/utils/maths";

describe("calculateDiscount", () => {
    it("should calculate discount correctly", () => {
        expect(calculateDiscount(1000, 20)).toBe(800);
    });

    it("should return original price for 0% discount", () => {
        expect(calculateDiscount(500, 0)).toBe(500);
    });

    it("should return true for correctly loaded enviroment secret from github secre repo",()=>{
        expect(hasEnvironmentVariable()).toBe(true)
    })
});