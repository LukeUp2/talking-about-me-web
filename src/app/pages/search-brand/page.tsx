import InputControl from "@/app/components/input-control";
import React from "react";

interface Props {}

export default function SearchBrand({}: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="flex bg-blue-800 min-w-screen h-24 justify-center items-center px-1">
        <h2 className="font-bold md:text-3xl text-2xl">Pesquise sua marca</h2>
      </div>

      <div className="flex justify-center items-center py-6">
        <div className="flex flex-col w-60 items-center gap-3">
          <InputControl label="Nome da marca" labelPosition="side" />
          <InputControl label="Nome da marca" />
          <InputControl label="Nome da marca" />
        </div>
      </div>
    </main>
  );
}
