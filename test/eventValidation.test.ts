import { postSchemas } from "../src/api/v1/validation/eventValidation";

describe("POST /events validation", () => {

    // demo 02
    it("should pass validation for a valid event body (video demo)", () => {
    const validEvent = {
        name: "Tech Conference 2025",
        date: "2026-12-25T09:00:00.000Z",
        capacity: 200,
        registrationCount: 50,
        status: "active",
        category: "conference"
    };

    const { error, value } = postSchemas.create.body.validate(validEvent);

    expect(error).toBeUndefined();
    expect(value.category).toBe("conference");
    });

    // demo 03
    it("should fail validation if name is missing", () => {
    const invalidEvent = {
        date: "2026-12-25T09:00:00.000Z",
        capacity: 200
    };

    const { error } = postSchemas.create.body.validate(invalidEvent);

    expect(error).toBeDefined();
    expect(error?.details[0].message).toBe('"name" is required');
    });

    // demo 04
    it("should fail validation if name length is less than 3", () => {
        const invalidEvent = {
            name: "AB",
            date: "2026-12-25T09:00:00.000Z", // future date
            capacity: 200
        };

    const { error } = postSchemas.create.body.validate(invalidEvent);

    expect(error).toBeDefined();
    expect(error?.details[0].message).toBe('"name" length must be at least 3 characters long');
    });

    // demo 05
    it("Event is successfully created with defaults", () => {
    const validEvent = {
        name: "ABC",
        date: "2026-12-25T09:00:00.000Z",
        capacity: 100
    };

    const { error, value } = postSchemas.create.body.validate(validEvent);

    // validation passes
    expect(error).toBeUndefined();

    // defaults are applied
    expect(value.name).toBe("ABC");
    expect(value.capacity).toBe(100);
    expect(value.registrationCount).toBe(0);
    expect(value.status).toBe("active");
    expect(value.category).toBe("general");
    });



});