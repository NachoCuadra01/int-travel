import { describe, beforeEach, test, expect} from "vitest";
import Accommodation from "../accommodation.ts";


describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation(200, "Victoria Plaza");
    void accommodation;
  });

  describe("Accommodation name", () => {
    test("should set name correctly", () => {
      expect(accommodation.getName()).toBe("Victoria Plaza");
    });

    test("El nombre debe estar completo", () => {
      expect(() => new Accommodation(200, '')).toThrow();
    })

    test("Name tiene que ser un string", () => {
      expect(() => new Accommodation(200, 231412)).toThrow();
    })

  });

  describe("Accommodation cost", () => {
    test("devuelve el costo bien", () =>{
      expect(accommodation.getCost()).toBe(200);
    });

    test("Cost tiene que ser un numero", () => {
      expect(() => new Accommodation("@231", "Radisson")).toThrow();
    })

    test("Cost tiene que ser mayor a 0", () => {
      expect(() => new Accommodation(-1, "Radisson")).toThrow();
    })
  });
});
