'use client';

import { Sectiontype } from '@/types/types';
import { FaTruckFast } from 'react-icons/fa6';
import { GiBattleship } from 'react-icons/gi';
import { LiaPlaneDepartureSolid } from 'react-icons/lia';
import { MdOutlineEmojiTransportation } from 'react-icons/md';

type HeroSectionThumbType = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const HeroSectionThumb = ({ title, subtitle, icon }: HeroSectionThumbType) => {
  return (
    <div className="herothumb">
      <div>{icon}</div>
      <div>
        <div>
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
const Herosection = ({ data }: Sectiontype) => {
  const mainsection = data?.mainsection;
  const subsection = data?.subsection ? data?.subsection : [];

  return (
    <section
      style={{
        backgroundImage: `url(${mainsection?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="hero"
    >
      <div className="container">
        <h1>{mainsection?.title}</h1>
        <div>
          <div>
            <HeroSectionThumb
              title={subsection[0]?.title}
              subtitle={subsection[0]?.subtitle}
              icon={<FaTruckFast />}
            />

            <HeroSectionThumb
              title={subsection[1]?.title}
              subtitle={subsection[1]?.subtitle}
              icon={<LiaPlaneDepartureSolid />}
            />
          </div>
          <div>
            <HeroSectionThumb
              title={subsection[2]?.title}
              subtitle={subsection[2]?.subtitle}
              icon={<GiBattleship />}
            />

            <HeroSectionThumb
              title={subsection[3]?.title}
              subtitle={subsection[3]?.subtitle}
              icon={<MdOutlineEmojiTransportation />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
