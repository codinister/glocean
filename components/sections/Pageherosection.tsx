type PageherosectionType = {
  name: string;
};

const Pageherosection = ({ name }: PageherosectionType) => {
  return (
    <section
      className="page-hero-section"
      style={{
        backgroundImage: 'url("/cargocar.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2>{name}</h2>
    </section>
  );
};

export default Pageherosection;
