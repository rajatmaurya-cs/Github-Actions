

// Unit Test

export function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount) / 100;
}