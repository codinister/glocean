'use client';

type IframeType = {
  src: string;
  width: string;
  height: string;
};

const Map = ({
  src,
  width,
  height,
}: IframeType) => {
  return (
    <>

      <iframe
        width={width}
        height={height}
        src={`https://maps.google.com/maps?hl=en&q=${src}&ie=UTF8&t=roadmap&z=6&iwloc=B&output=embed&z=99`}
      ></iframe>
    </>
  );
};

export default Map;
