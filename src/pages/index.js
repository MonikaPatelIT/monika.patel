import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
// import styles from './styles/Home.module.css'

export default function Home({ pageData }) {
  return (
    <Layout>
      <div className="entries">
        <div className="row justify-content-start  ">
          {pageData.map((entry) => (
            <div className="col-md-6" key={entry._id}>
              <div className="entry mb-3">
                <div className="main-image">
                  <h3>{entry.title}</h3>
                  <h4>
                    {entry.designation} - {entry.roleType}
                  </h4>
                  <p>{entry.period}</p>
                  <p>{entry.location}</p>
                  {entry.logo && (
                    <img
                      src={`https://portfolio-cms-mongo.herokuapp.com${entry.logo.url}`}
                      alt={entry.logo.name}
                      width={entry.logo.width}
                      height={entry.logo.height}
                    />
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: entry.description }}
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
  const data = await fetch(
    "https://portfolio-cms-mongo.herokuapp.com/work-histories"
  );
  const pageData = await data.json();

  return { props: { pageData }, revalidate: 1 };
};
