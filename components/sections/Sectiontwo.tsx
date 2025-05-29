import { Sectiontype } from '@/types/types';
import Link from 'next/link';

const Sectiontwo = ({ data }: Sectiontype) => {
  const mainsection = data?.mainsection;

  return (
    <section className="sectiontwo">
      <div className="container">
        <div
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundImage: `url(${mainsection?.image})`,
          }}
        ></div>
        <div>
          <p>{mainsection?.subtitle}</p>
          <h3>{mainsection?.title}</h3>

          <p>{mainsection?.excerpt}</p>


          <Link href="/about" className="about-btn">About Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
