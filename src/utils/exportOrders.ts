// import { utils, writeFile } from 'xlsx';
// import { format } from 'date-fns';

// export const exportOrders = (orders: any[], startDate: Date, endDate: Date) => {
//   // Transform orders data for Excel
//   const worksheetData = orders.map(order => ({
//     'Order ID': order.id,
//     'Customer Name': order.customerName,
//     'Phone': order.customerPhone,
//     'Seat Number': order.seatNumber,
//     'Screen': order.screen,
//     'Theatre amount': order.total - (order.total * 0.04),
//     'Total Amount': order.total,
//     'Status': order.status,
//     'Payment ID': order.paymentId,
//     'Created At': new Date(order.createdAt).toLocaleString(),
//     'Completed At': order.completedAt ? new Date(order.completedAt).toLocaleString() : '',
//     'Items': order.items.map((item: any) => 
//       `${item.name} (${item.quantity}x ₹${item.price})`
//     ).join(', ')
//   }));

//   // Create worksheet
//   const worksheet = utils.json_to_sheet(worksheetData);

//   // Create workbook
//   const workbook = utils.book_new();
//   utils.book_append_sheet(workbook, worksheet, 'Orders');
//   var fileName = '';
//   // Generate filename with date
//   if(startDate != endDate){
//     fileName = `orders_${format(startDate, 'yyyy-MM-dd')} to ${format(endDate, 'yyyy-MM-dd')}.xlsx`;
//   }
//   else{
//     fileName = `orders_${format(startDate, 'yyyy-MM-dd')}.xlsx`;
//   }

//   // Save file
//   writeFile(workbook, fileName);
// };
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
    'Theatre amount': order.total - (order.total * 0.04),
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
  const totalAmount = worksheetData.reduce((sum, order) => sum + order['Total Amount'], 0);

  // Add totals row
  worksheetData.push({
    'Order ID': 'Total',
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
