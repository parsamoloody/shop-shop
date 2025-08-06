interface IDiscount {
    amount: number
    type: 'fixed' | 'percent';
    expiresAt?: string
}
interface IPrice {
    original: number;
    discount: IDiscount;
    currency: "USD" | "IRR"
}
interface IProductDocument {
    product_id: string;
    category: string[];
    name: string;
    description: string;
    price: IPrice;
    createdBy: string,
    editedBy?: string,
    createdAt: Date;
    updatedAt: Date;
}

export default IProductDocument