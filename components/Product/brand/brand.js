// brand.ts

let brands = [
  { id: 1, name: 'Tesla' },
  { id: 2, name: 'BMW' },
  { id: 3, name: 'Samsung' },
  { id: 4, name: 'AMD' },
];

export function getAllBrands() {
  return brands;
}

export function addNewBrand(name) {
  const newBrand = { id: brands.length + 1, name };
  brands.push(newBrand);
}
