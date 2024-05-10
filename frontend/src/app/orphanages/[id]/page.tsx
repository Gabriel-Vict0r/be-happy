import SideBar from "@/components/forForm/SideBar";
import SubTitle from "@/components/forForm/SubTitle";
import MapOrphanage from "@/components/forMap/MapOrphanage";
import { GetStaticProps, GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

interface IOrphonage {
  id: string;
  name: string;
  about: string;
  latitude: number;
  longitude: number;
  instructions: string;
  acept_weekend: boolean;
  phone: string;
  initial_hour: string;
  final_hour: string;
}
interface IArrayOrph {
  index: Array<IOrphonage>;
}
interface IImage {
  id: string;
  url: string;
  id_orphanage: string;
}
async function getStaticSideProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const orphResponse = await fetch(
    "https://https://be-happy-api.vercel.app/orphanages"
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
    "https://be-happy-api.vercel.app/orphanages"
  );

  const orph: Array<IOrphonage> = await orphResponse.json();

  return orph.map((orph) => ({
    id: String(orph.id),
  }));
}

async function fetchOrphanage(id: string) {
  const orphResponse = await fetch(
    `https://be-happy-api.vercel.app/getOrphanage/${id}`,
    { next: { revalidate: 3600 } }
  );

  //console.log("Fetching orphanage response", id);
  //console.log(orphResponse.json());
  return orphResponse.json();
}
async function fetchImages(id: string) {
  const imagesResponse = await fetch(
    `https://be-happy-api.vercel.app/getPictures/${id}`
  );
  return imagesResponse.json();
}
export default async function PageOrphanage({ params }: any) {
  const MapNoSSR = dynamic(() => import("@/components/forMap/MapOrphanage"), {
    ssr: false,
    loading: () => <p>Carregando</p>,
  });

  const { id } = params;
  const orph = await fetchOrphanage(id);

  var regex = /(\d{2}):(\d{2})/;
  var mathInitial = regex.exec(orph.initial_hour);
  var mathFinal = regex.exec(orph.final_hour);
  const images = await fetchImages(id);
  const listImage = images.filter(
    (image: IImage, index: number) => index !== 0
  );

  enum WeekendYes {
    TEXT = "Atendemos fim de semana",
    GRADIENT_START = "from-start-gradient-green",
    GRADIENT_END = "to-end-gradient-green",
    COLOR_ICON = "text-green-box",
    BORDER_COLOR = "border-green",
  }

  enum WeekendNo {
    TEXT = "Não atendemos fim de semana",
    GRADIENT_START = "from-start-gradient-red",
    GRADIENT_END = "to-end-gradient-red",
    COLOR_ICON = "text-red-box",
    BORDER_COLOR = "border-red",
  }
  const weekend = orph.acept_weekend ? WeekendYes : WeekendNo;

  interface IImage {
    id: string;
    url: string;
  }
  const regexNumber = /\d/gi;
  const numberOrph = orph.phone.match(regexNumber).join("");
  // console.log(numberOrph);
  //console.log(images);
  return (
    <main className="flex bg-bg-form flex-col">
      <SideBar />
      <section className="w-full flex flex-col gap-4 justify-start items-center py-7 z-0">
        <p className="text-title-page">Orfanato</p>
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-white w-full pb-10 md:w-[70%]">
          <div className="w-full flex flex-col gap-3">
            {/* <Image src={images[0].url} alt={images[0].id} width={100} height={100}
        className="w-full rounded-t-2xl"
        /> */}
            <div
              style={{ backgroundImage: `url(${images[0].url})` }}
              className="w-full h-[336px] bg-cover bg-no-repeat bg-center rounded-t-2xl"
            ></div>
            <div className="flex flex-row items-center justify-between flex-wrap gap-2">
              {listImage.map((image: IImage) => (
                <div
                  key={image.id}
                  style={{ backgroundImage: `url(${image.url})` }}
                  className="w-[94px] h-[94px] bg-cover bg-no-repeat bg-center rounded-xl xl:flex-grow"
                ></div>
              ))}
            </div>
          </div>
          <div className="px-3 flex flex-col gap-3 md:pt-6">
            <h1 className="text-title font-bold text-4xl">{orph.name}</h1>
            <p className="text-text font-semibold text-base">{orph.about}</p>
          </div>
          {/* <MapNoSSR latitude={orph.latitude} longitude={orph.longitude}/> */}

          <iframe
            width="600"
            height="450"
            style={{ border: 0, width: "90%", borderRadius: 12, height: 291 }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAhxEurhPz36Nlb92Seh2ZedhCVdxt8Kxk&q=${orph.latitude},${orph.longitude}&center=${orph.latitude},${orph.longitude}`}
          ></iframe>
          <p className="w-[90%] bg-gradient-blue text-dark-blue text-center py-2">
            Rotas do local
          </p>
          <div className="px-6 pt-4 flex flex-col gap-3 w-full">
            <SubTitle subTitle="Instruções para visita" />
            <p className="text-text font-semibold text-base">
              {orph.instructions}
            </p>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col bg-gradient-to-r from-first-gradient to-second-gradient p-4 rounded-2xl border-border-box-hour w-full border md:w-1/2">
                <FaRegClock className="text-3xl text-initial-gradient " />
                <div className="text-text text-base font-semibold">
                  <p>Horário das visitas</p>
                  <p>{`Das ${mathInitial![0]} às ${mathFinal![0]}`}</p>
                </div>
              </div>
              <div
                className={`flex flex-col p-4 rounded-2xl border w-full bg-gradient-to-r ${weekend.GRADIENT_START} ${weekend.GRADIENT_END} border-${weekend.BORDER_COLOR} md:w-1/2`}
              >
                <IoAlertCircleOutline
                  className={`text-3xl ${weekend.COLOR_ICON}`}
                />
                <p className={`font-semibold text-base ${weekend.COLOR_ICON}`}>
                  {weekend.TEXT}
                </p>
              </div>
            </div>
            <Link
              href={`https://wa.me/55${numberOrph}?text=${encodeURIComponent(
                `Olá! gostaria de conhecer o Orfanato ${orph.name}.`
              )}`}
              className="flex justify-center items-center gap-2 bg-green-contact p-4 rounded-2xl text-center font-extrabold text-lg"
              target="_blank"
            >
              <FaWhatsapp />
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
