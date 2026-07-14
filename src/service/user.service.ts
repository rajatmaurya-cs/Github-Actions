import { sendWelcomeEmail } from "./email.service";

export async function registerUser(email: string) {
    // Save user...

    await sendWelcomeEmail(email);

    return {
        success: true,
    };
}