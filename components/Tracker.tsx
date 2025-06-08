import TrackingStatus from './Status';
import OrderInvoice from './OrderInvoice';
import { CustomersType } from '@/types/types';

type TrackerType = {
  data: CustomersType;
};
const Tracker = ({ data }: TrackerType) => {
  const deliverydate = data?.deliverydate;
  const deliverystatus = data?.deliverystatus;

  const shipped = deliverystatus ? 'checked' : '';
  const transit = deliverystatus === 'transit' ? 'progress' : '';
  const delivering = deliverystatus === 'delivering' ? 'progress' : '';
  const estimateddelivery =
    deliverystatus === 'estimateddelivery' ? 'progress' : '';
  const delivered = deliverystatus === 'delivered' ? 'checked' : '';

  return (
    <>
      <div className="tracking-result">
        <h4>It&lsquo;s on the way.</h4>

        <div>
          <TrackingStatus status={shipped} text="Shipped Fri, Aug 9" />
          <TrackingStatus status={transit} text="In transit" />
          <TrackingStatus status={delivering} text="Out for delivery" />
          <TrackingStatus
            status={estimateddelivery}
            text={
              estimateddelivery === 'progress'
                ? `Estimated delivery ${deliverydate}`
                : 'Estimated delivery'
            }
          />

          <TrackingStatus status={delivered} text="Delivered" bar="none" />
        </div>
      </div>

      <OrderInvoice data={data} />
    </>
  );
};

export default Tracker;
