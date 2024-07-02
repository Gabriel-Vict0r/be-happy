import Image from "next/image";
import React from "react";
import CityState from "../forMap/CityState";
import SubTitle from "../forForm/SubTitle";
import Input from "../forForm/Input";
import Form from "../forFormLogin/Form";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
type Props = {};

const WrapPage = (props: Props) => {
  return (
    <main className="flex h-screen">
      <section className="bg-gradient-to-r from-initial-gradient to-end-gradient hidden lg:block lg:flex lg:w-[60%] flex-col items-center justify-center gap-14">
        <div className="flex items-center flex-col">
          <Image
            src="/icon-principal.svg"
            alt="logo"
            width={109.78}
            height={126.52}
          />
          <h1 className="text-7xl font-extrabold">happy</h1>
        </div>
        <CityState center />
      </section>
      <section className="flex flex-col w-full lg:w-[40%] p-5 lg:p-12">
        <Link href="/" className="text-black">
          <FaArrowLeft />
        </Link>
        <Form />
      </section>
    </main>
  );
};

export default WrapPage;
