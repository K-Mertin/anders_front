import { Product } from './product.model';


export class PurchaseOrder {
    purchaseOrderNo: string;
    vendorNo: string;
    purchaseOrderProducts: PurchaseOrderProduct[];
}

export class PurchaseOrderProduct {
    product: Product;
    unitCost: number;
    volumn: number;
}

export const PURCHASEORDER: PurchaseOrder[] = [
    {
        purchaseOrderNo: 'Order001',
        vendorNo: 'Vendor001',
        purchaseOrderProducts: [
            { product: { productCode: 'A001', productName: 'ProductA', productDesc: 'ProductA description' }, unitCost: 10, volumn: 5 },
            { product: { productCode: 'B001', productName: 'ProductB', productDesc: 'ProductB description' }, unitCost: 20, volumn: 4 }
        ]
    },
    {
        purchaseOrderNo: 'Order002',
        vendorNo: 'Vendor002',
        purchaseOrderProducts: [
            { product: { productCode: 'C001', productName: 'ProductC', productDesc: 'ProductC description' }, unitCost: 50, volumn: 3 },
            { product: { productCode: 'A001', productName: 'ProductA', productDesc: 'ProductA description' }, unitCost: 20, volumn: 3 }
        ]
    }
];

