import { Gstt } from "../constants/categories";

export const calculateTaxes = (subtotal: number) => {
    const sgst = subtotal * 0.025; // 2.5%
    const cgst = subtotal * 0.025; // 2.5%
    const handlingCharges = subtotal * Gstt; // 4%
    const total = subtotal + handlingCharges;
    
    return {
      subtotal,
      sgst,
      cgst,
      handlingCharges,
      total
    };
  };