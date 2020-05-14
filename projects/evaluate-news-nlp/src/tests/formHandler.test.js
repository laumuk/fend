import { validURL } from "../client/js/formHandler"

describe("Test the function: validURL", () => {
    test("It should return false for invalid URL", () => {
        expect(validURL("This is not a valid URL")).toBe(false)
    })
    test("It should return true for valid URL", () => {
        expect(validURL("http://index.hu")).toBe(true)
    })
    test("It should return true for valid complex URL", () => {
        expect(validURL("https://www.decathlon.ch/ch_en/?___from_store=ch_fr#/dfclassic/query=gravel%20bike&query_name=match_and")).toBe(true)
    })
})