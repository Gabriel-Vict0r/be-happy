import React from "react";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const ContainerAdmin = ({ title, subtitle, children }: Props) => {
  return (
    <main className="p-5">
      <div className="flex justify-between flex-col md:flex-row border-b border-border-form p-3">
        <h1 className="text-title font-bold text-2xl">{title}</h1>
        <p className="text-title page text-base">{subtitle}</p>
      </div>
      <section className="py-5 flex flex-col gap-5 lg:flex-row flex-nowrap">
        {children}
      </section>
    </main>
  );
};

export default ContainerAdmin;
