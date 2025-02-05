import { utils, writeFile } from 'xlsx';
import { format } from 'date-fns';

export const exportOrders = (orders: any[], startDate: Date, endDate: Date) => {

  // Transform orders data for Excel
  const worksheetData = orders.map(order => ({
    'Order ID': order.id,
    'Customer Name': order.customerName,
    'Phone': order.customerPhone,
    'Seat Number': order.seatNumber,
    'Screen': order.screen,
    'Theatre amount': order.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
    'Total Amount': order.total,
    'Status': order.status,
    'Payment ID': order.paymentId,
    'Created At': new Date(order.createdAt).toLocaleString(),
    'Completed At': order.completedAt ? new Date(order.completedAt).toLocaleString() : '',
    'Items': order.items.map((item: any) =>
      `${item.name} (${item.quantity}x ₹${item.price})`
    ).join(', ')
  }));

  // Calculate totals
  const totalTheatreAmount = worksheetData.reduce((sum, order) => sum + order['Theatre amount'], 0);

  const totalAmount=orders.reduce((sum, order) => sum + order.total, 0);

  worksheetData.push({}); 
  worksheetData.push({
    'Order ID': '',
    'Customer Name': '',
    'Phone': '',
    'Seat Number': '',
    'Screen': '',
    'Theatre amount': 'Total Theatre Amount',
    'Total Amount': 'Total Amount (Including Razorpay)',
    'Status': '',
    'Payment ID': '',
    'Created At': '',
    'Completed At': '',
    'Items': ''
  });

  // Add "Total Amount (Including Razorpay)" row
  worksheetData.push({
    'Order ID': '',
    'Customer Name': '',
    'Phone': '',
    'Seat Number': '',
    'Screen': '',
    'Theatre amount': totalTheatreAmount,
    'Total Amount': totalAmount,
    'Status': '',
    'Payment ID': '',
    'Created At': '',
    'Completed At': '',
    'Items': ''
  });

  // Create worksheet
  const worksheet = utils.json_to_sheet(worksheetData);

  // Adjust column widths
  const columnWidths = [
    { wch: 22 }, // Order ID
    { wch: 20 }, // Customer Name
    { wch: 13 }, // Phone
    { wch: 12 }, // Seat Number
    { wch: 10 }, // Screen
    { wch: 20 }, // Theatre Amount
    { wch: 29 }, // Total Amount
    { wch: 10 }, // Status
    { wch: 25 }, // Payment ID
    { wch: 25 }, // Created At
    { wch: 25 }, // Completed At
    { wch: 50 }  // Items
  ];

  worksheet['!cols'] = columnWidths;

  // Add thick bold styles to the last two rows (total rows)
  const range = utils.decode_range(worksheet['!ref']!);
  const totalTheatreAmountRow = range.e.r - 1; // Second-to-last row
  const totalAmountRow = range.e.r; // Last row

  // Apply thick bold font style to "Total Theatre Amount" and "Total Amount (Including Razorpay)" cells
  const boldStyle = { font: { bold: true, weight: 800 } }; // Thick bold font

  worksheet[`F${totalTheatreAmountRow + 1}`].s = boldStyle; // "Total Theatre Amount" cell
  worksheet[`G${totalTheatreAmountRow + 1}`].s = boldStyle; // Corresponding Total cell

  worksheet[`F${totalAmountRow + 1}`].s = boldStyle; // "Total Amount (Including Razorpay)" cell
  worksheet[`G${totalAmountRow + 1}`].s = boldStyle; // Corresponding Total cell

  // Create workbook
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, 'Orders');

  // Generate filename with date
  let fileName = '';
  if (startDate != endDate) {
    fileName = `orders_${format(startDate, 'yyyy-MM-dd')} to ${format(endDate, 'yyyy-MM-dd')}.xlsx`;
  } else {
    fileName = `orders_${format(startDate, 'yyyy-MM-dd')}.xlsx`;
  }

  // Save file
  writeFile(workbook, fileName);
};
