import { FaCheck } from 'react-icons/fa';

type TrackingStatusType = {
  status: string;
  text: string;
  bar?: string;
};

const TrackingStatus = ({ status, text, bar }: TrackingStatusType) => {


  const st =
    status === 'checked'
      ? 'checkmark'
      : status === 'progress'
        ? 'progress'
        : '';
  return (
    <div className="tracking-status">
      <div>
        <div className={st}>{status === 'checked' ? <FaCheck /> : ''}</div>
        <div>{status === 'progress'? <strong>{text}</strong> : text}</div>
      </div>
      {bar === 'none' ? '' : <div></div>}
    </div>
  );
};

export default TrackingStatus;
