import { Sectiontype } from '@/types/types';
import Link from 'next/link';

const Sectionfive = ({ data }: Sectiontype) => {
  const mainsection = data?.mainsection;
  const subsection = data?.subsection ? data?.subsection : [];

  return (
    <section className="sectionfive">
      <div className="container">
        <div>
          <p>{mainsection?.subtitle}</p>
          <h3>{mainsection?.title}</h3>
          <div>{mainsection?.excerpt}</div>
          <Link className="about-btn" href="/contact">
            Get In Touch
          </Link>
        </div>
        <div>
          {subsection.map((v, k) => (
            <div key={k} className="employees">
              <div>
                <h1>{v.icon}</h1>
              </div>
              <div>
                <h4>{v.title}</h4>
                <div>{v.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectionfive;
