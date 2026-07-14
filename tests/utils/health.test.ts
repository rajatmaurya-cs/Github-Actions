import request from "supertest";

import { describe, expect, it } from "vitest";

import app from "../../src/index";

describe("GET /health", () => {

    it("should return server status", async () => {

        const response = await request(app)
            .get("/health");

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

    });

});