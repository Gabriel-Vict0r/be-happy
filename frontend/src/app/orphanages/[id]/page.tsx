import SideBar from "@/components/forForm/SideBar";
import SubTitle from "@/components/forForm/SubTitle";
import MapOrphanage from "@/components/forMap/MapOrphanage";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa";

async function getStaticSideProps(context: any) {
  const id = context.params?.id;
  const orphResponse = await fetch(
    "https://https://be-happy-beta.vercel.app/orphanages"
  );
  const orph = await orphResponse.json();

  return {
    props: {
      orph,
    },
  };
}
export async function generateStaticParams() {
  const orphResponse = await fetch(
    "https://be-happy-beta.vercel.app/orphanages"
  );

  const orph = await orphResponse.json();

  return orph.map((orph: any) => ({
    id: String(orph.id),
  }));
}

async function fetchOrphanage(id: string) {
  const orphResponse = await fetch(
    `https://be-happy-beta.vercel.app/getOrphanage/${id}`, 
    { next: { revalidate: 3600 } }
  );

  //console.log("Fetching orphanage response", id);
  //console.log(orphResponse.json());
  return orphResponse.json();
}
async function fetchImages(id: string) { 
  const imagesResponse = await fetch(`https://be-happy-beta.vercel.app/getPictures/${id}`);
  return imagesResponse.json();
}
  export default async function PageOrphanage({ params, searchParams}: any) {
    const MapNoSSR = dynamic(() => import('@/components/forMap/MapOrphanage'), { 

      ssr: false,
      loading: () => (<p>Carregando</p>)
    })

    const {id} = params
    const orph = await fetchOrphanage(id)

    var regex = /(\d{2}):(\d{2})/;
    var mathInitial = regex.exec(orph.initial_hour);
    var mathFinal = regex.exec(orph.final_hour)
    const images = await fetchImages(id);
    const listImage = images.filter((image, index) => index !== 0 && index < 4)
    //console.log(images);
    return <main className="flex bg-bg-form flex-col">
      <SideBar />
      <section className="w-full flex flex-col gap-4 justify-start items-center py-7 z-0">
      <p className="text-title-page">Orfanato</p>
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white w-full md:w-[708px]">
        <div className="w-full flex flex-col gap-3">
        <Image src={images[0].url} alt={images[0].id} width={100} height={100}
        className="w-full rounded-t-2xl"
        />
        <div className="flex flex-row items-center justify-between">
          {listImage.map((image: any) => (
            <Image
            key={image.id}
            src={image.url} alt={image.id} width={100} height={100} 
            className="w-[30%]"
            />
          ))}
        </div>
        </div>
        <div className="px-3 flex flex-col gap-3">
        <h1 className="text-title font-bold text-4xl">{orph.name}</h1>
        <p className="text-text font-semibold text-base">{orph.about}</p>
        </div>
        {/* <MapNoSSR latitude={orph.latitude} longitude={orph.longitude}/> */}
        
        <iframe width="600" height="450" style={{border: 0, width: '90%', borderRadius: 12, height: 291}} src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAhxEurhPz36Nlb92Seh2ZedhCVdxt8Kxk&q=${orph.latitude},${orph.longitude}&center=${orph.latitude},${orph.longitude}`}></iframe>
        <p className="w-[90%] bg-gradient-blue text-dark-blue text-center py-2">Rotas do local</p>
        <div className="px-3 pt-4 flex flex-col gap-3">
          <SubTitle subTitle="Instruções para visita"/>
          <p className="text-text font-semibold text-base">{orph.instructions}</p>
          <div className="flex flex-col bg-gradient-to-r from-first-gradient to-second-gradient">
          <FaRegClock className="text-3xl text-initial-gradient"/>
          <div className="text-text text-base">
          <p>Horário das visitas</p>
          <p>{`Das ${mathInitial[0]} às ${mathFinal[0]}`}</p>
          </div>
          </div>
        </div>
      </div>
      </section>
    </main>;
  }