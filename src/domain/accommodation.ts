class Accommodation {
  #cost!: number;
  #name!: string;

  constructor(
    cost: number,
    name: string,
  ) {
    this.setCost(cost);
    this.setName(name);
  }

  getCost(): number {
    return this.#cost;
  }

  getName(): string {
    return this.#name;
  }

  setCost(cost: number): void {
    if (isNaN(cost)) {
      throw new Error("Cost tiene que ser un numero");
    }
    if (cost < 0) {
      throw new Error("Cost tiene que ser mayor que 0");
    }
    this.#cost = cost;
  }

  setName(name: string): void {
    if (name === null || name === undefined || name === "") {
      throw new Error("Name tiene que estar completo");
    }
    if (typeof name !== "string") {
      throw new Error("Name tiene que ser un string");
    }
    this.#name = name.trim();
  }




}
export default Accommodation;
