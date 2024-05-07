import React from "react";

type Props = {};

export default function OrphanagePage({ orphanage }: any) {
  return <p>{orphanage.id}</p>;
}
export const getStaticPaths = async () => {
  const res = await fetch("https://be-happy-beta.vercel.app/orphanages");
  const orphanages = await res.json();
  console.log(orphanages);
  const paths = orphanages.map((orphanage: any) => ({
    params: { id: orphanage.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://be-happy-beta.vercel.app/getOrphanage/${params.id}`
  );
  const orphanage = await res.json();

  return { props: { orphanage } };
};
