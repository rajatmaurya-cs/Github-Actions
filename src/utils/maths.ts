

// Unit Test

export function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount) / 100;
}

export function hasEnvironmentVariable(){
    if(process.env.JWT_SECRET)  return true;
    return false;
}