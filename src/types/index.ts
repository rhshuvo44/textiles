export type TServices = {
    id: number,
    icon: React.ReactNode,
    title: string,
    description: string,
}
export type TGetTouch = {
    name: string
    email: string
    phone: string
}
export type TContactForm = {
    name: string
    company: string
    email: string
    phone: string
    message: string
}
export interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}
export type TProduct = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    availabilityStatus: string;
    minimumOrderQuantity: number;
    shippingInformation: string;
    returnPolicy: string;
    warrantyInformation: string;
    brand: string;
    category: string;
    tags: string[];
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    weight: number;
    sku: string;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    thumbnail: string;
    images: string[];
    reviews: Review[];
};




