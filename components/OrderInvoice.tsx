import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { CustomersType } from '@/types/types';
import format_number from '@/utils/format_number';

type OrderInvoiceType = {
  data: CustomersType;
};
const OrderInvoice = ({ data }: OrderInvoiceType) => {
  const custinf = data?.customerinfo;
  const itemsordered = data?.itemsordered;
  const trackingcode = data?.trackingcode;
  const shippingcost = data?.shippingcost;
  const paymenttype = data?.paymenttype;
  const id = data?._id;

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const subtotal = itemsordered
    ?.map((v) => {
      return { ...v, price: parseInt(v.price) };
    })
    .reduce((a, b) => {
      return Number(a) + Number(b.price);
    }, 0);

  const shipcost = shippingcost ? parseInt(shippingcost) : 0;

  const total = Number(subtotal) + Number(shipcost);

  return (
    <>
      <button className="print-btn" onClick={reactToPrintFn}>
        Print
      </button>
      <div className="order-invoice" ref={contentRef}>
        <div>
          <div>
            <div>
              <strong>Thank you for your order</strong>
            </div>
            <div>
              <p>
                Your order has been received and is now being processed. Your
                order details are shown below for your reference
              </p>

              <strong>Order #{id?.split('-')[1]}</strong>

              <table cellSpacing="0">
                <thead>
                  <tr>
                    <td>Product</td>
                    <td>Quantity</td>
                    <td>Price</td>
                  </tr>
                </thead>

                <tbody>
                  {itemsordered?.map((v, k) => {
                    return (
                      <tr key={k}>
                        <td>{v.desc}</td>
                        <td>{v.qty}</td>
                        <td>{v.price}</td>
                      </tr>
                    );
                  })}
                </tbody>

                <tbody>
                  <tr>
                    <td colSpan={2}>Subtotal:</td>
                    <td>GHs {format_number(subtotal)}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Shipping:</td>
                    <td>{shippingcost}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Payment Method:</td>
                    <td>{paymenttype}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Total:</td>
                    <td>GHs {format_number(total)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>
              <strong>Tracking information</strong>
              <p>You can track your shipment with this code {trackingcode}</p>
            </div>
            <div>
              <strong>Customer details</strong>

              <ul>
                <li>Email: {custinf?.email}</li>
                <li>Tel: {custinf?.phone}</li>
              </ul>
            </div>
            <div>
              <div>
                <strong>Billing address</strong>
                <div>
                  <p>{custinf?.fullname}</p>
                  <p>{custinf?.country}</p>
                  <p>{custinf?.city}</p>
                  <p>{custinf?.postaladdress}</p>
                </div>
              </div>
              <div>
                <strong>Shipping address</strong>
                <div>
                  <p>{custinf?.fullname}</p>
                  <p>{custinf?.country}</p>
                  <p>{custinf?.city}</p>
                  <p>{custinf?.postaladdress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInvoice;
