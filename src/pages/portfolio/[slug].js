import Layout from "../../components/layout/layout";

const PortfolioItem = ({ porfolio }) => {
  return (
    <Layout>
      <div>
        {porfolio.image && (
          <img
            src={`http://localhost:1337${porfolio.image.url}`}
            alt={porfolio.image.name}
            width="800"
          />
        )}
        <h1>{porfolio.headline}</h1>
        <div dangerouslySetInnerHTML={{ __html: porfolio.content }}></div>
      </div>
    </Layout>
  );
};
export default PortfolioItem;

export const getStaticProps = async ({ params }) => {
  const data = await fetch(
    `http://localhost:1337/portfolios?slug=${params.slug}`
  );

  const porfolio = await data.json();

  return {
    props: { porfolio: porfolio[0] },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const data = await fetch("http://localhost:1337/portfolios");
  const pageData = await data.json();

  const paths = pageData.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return { paths, fallback: false };
};
