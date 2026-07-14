import { describe, expect, it, vi } from "vitest";

import * as emailService from "../../src/service/email.service";

import { registerUser } from "../../src/service/user.service";

describe("registerUser", () => {

    it("should send welcome email", async () => {

        const spy = vi
            .spyOn(emailService, "sendWelcomeEmail")
            .mockResolvedValue(undefined);

        await registerUser("rajat@gmail.com");

        expect(spy).toHaveBeenCalledOnce();

        expect(spy).toHaveBeenCalledWith("rajat@gmail.com");

    });

});