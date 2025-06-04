import { Sectiontype } from '@/types/types';

const Sectionfive = ({ data }: Sectiontype) => {
  
  const mainsection = data?.mainsection;
  const subsection = data?.subsection ? data?.subsection : [];

  return <section className="sectionfive">
    <div className="container">

    </div>
  </section>;
};

export default Sectionfive;
