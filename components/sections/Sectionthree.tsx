import { Sectiontype } from '@/types/types';
import { GoPackage } from 'react-icons/go';
import { LuPackageOpen } from 'react-icons/lu';
import { MdOutlineEmojiTransportation } from 'react-icons/md';

const Sectionthree = ({ data }: Sectiontype) => {
  const mainsection = data?.mainsection;
  const subsection = data?.subsection ? data?.subsection : [];

  return (
    <section className="sectionthree">
      <div>
        <p>{mainsection?.subtitle}</p>
        <h3>{mainsection?.title}</h3>
        <p>{mainsection?.excerpt}</p>
      </div>
      <div className="container">
        {Object.values(subsection).map((v, k) => {
          let icon;
          if (v.title.toLowerCase() === 'package tracking') {
            icon = <LuPackageOpen />;
          }
          if (v.title.toLowerCase() === 'freight shipping') {
            icon = <GoPackage />;
          }
          if (v.title.toLowerCase() === 'express transport') {
            icon = <MdOutlineEmojiTransportation />;
          }

          return (
            <div key={k}>
              <h1>{icon}</h1>
              <h4>{v.title}</h4>
              <p>{v.excerpt}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sectionthree;
