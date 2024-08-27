import { describe, test, expectTypeOf } from "vitest"

describe("Testing using vitest", () => {
    test("Check if is a number type", () => {
        expectTypeOf<number>().toBeNumber()
    })
})
