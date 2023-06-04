import React from 'react';

// NOTE: Example of dynamic meta data.
// HAS TO BE CALLED 'generateMetadata'

export async function generateMetadata({ params }: { params: { orderNumber: string } }) {
  const { orderNumber } = params;
  return {
    title: `Order Number: ${orderNumber}`,
  };
}

// NOTE: can also get access to search params in this.
function Order({ params }: { params: { orderNumber: string } }) {
  const { orderNumber } = params;
  return (
    <div>
      Order Details for Order Number
      {orderNumber}
    </div>
  );
}

export default Order;
