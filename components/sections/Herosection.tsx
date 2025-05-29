'use client';

import { GiBattleship } from 'react-icons/gi';

type Herosectiontype = {
  data: {
    mainsection: {
      title: string;
      body: string;
      excerpt: string;
      _type: string;
      image: string;
    };
    subsection: {
      title: string;
      body: string;
      subtitle: string;
      icon: React.ReactNode;
      excerpt: string;
      _type: string;
      image: string;
    }[];
  };
};

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
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
const Herosection = ({ data }: Herosectiontype) => {
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
              icon={<GiBattleship />}
            />

            <HeroSectionThumb
              title={subsection[1]?.title}
              subtitle={subsection[1]?.subtitle}
              icon={<GiBattleship />}
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
              icon={<GiBattleship />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
