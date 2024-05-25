import Image from "next/image";
import React from "react";
import CityState from "../forMap/CityState";
import SubTitle from "../forForm/SubTitle";
import Input from "../forForm/Input";
import Form from "../forFormLogin/Form";
import Link from "next/link";

type Props = {};

const WrapPage = (props: Props) => {
  return (
    <main className="flex">
      <section className="bg-gradient-to-r from-initial-gradient to-end-gradient hidden md:flex-auto">
        <div>
          <Image
            src="/icon-principal.svg"
            alt="logo"
            width={109.78}
            height={126.52}
          />
          <h1>happy</h1>
        </div>
        <CityState />
      </section>
      <section className="flex flex-col w-full md:w-[40%] p-5">
        <Link href="/">teste</Link>
        <Form />
      </section>
    </main>
  );
};

export default WrapPage;
