export async function getStaticPaths() {
    const res = await fetch("https://be-happy-api.vercel.app/orphanages");
    const orphanages = await res.json();
    console.log(orphanages);
    const paths = orphanages.map((orphanage: any) => ({
      params: { id: orphanage.id.toString() },
    }));
  
    return { paths, fallback: 'blocking' };
  };
  export async function getStaticProps({params}: any) {
    const res = await fetch(
      `https://be-happy-api.vercel.app/getOrphanage/${params.id}`
    );
    const orphanage = await res.json();
  
    return { props: { orphanage } };
  };