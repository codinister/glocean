import { Sectiontype } from '@/types/types';

const Sectionfour = ({ data }: Sectiontype) => {
  const mainsection = data?.mainsection;
  return (
    <section
      style={{
        backgroundImage: `url(${mainsection?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="sectionfour"
    >
      <div className="container">
        <div>
          <p>{mainsection?.subtitle}</p>
          <h3>{mainsection?.title}</h3>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Sectionfour;
