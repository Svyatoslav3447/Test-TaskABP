import { type Vehicle } from "../types/vehicle";

const BASE_URL = "https://dummyjson.com";

export async function getVehicles(): Promise<Vehicle[]> {
  const response = await fetch(`${BASE_URL}/products/category/vehicle`);

  const data = await response.json();

  return data.products;
}

export async function getVehicle(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  return await response.json();
}
