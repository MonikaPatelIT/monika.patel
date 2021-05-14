import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
// import styles from './styles/Home.module.css'

export default function Home({ pageData }) {
  return (
    <Layout>
      <div className="entries">
        <div className="row justify-content-start  ">
          {pageData.map((entry, index) => (
            <div className="col-md-6" key={index}>
              <div className="entry mb-3">
                <div className="main-image">
                  <Link
                    as={`/portfolio/${entry.slug}`}
                    href="/portfolio/[slug]"
                  >
                    <h1>{entry.headline}</h1>
                  </Link>
                  {entry.image && (
                    <img
                      src={`http://localhost:1337${entry.image.url}`}
                      alt={entry.image.name}
                    />
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:1337/portfolios");
  const pageData = await data.json();

  return { props: { pageData }, revalidate: 1 };
};
