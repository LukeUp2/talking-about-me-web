import React from "react";

interface Props {}

export default function Dashboard({}: Props) {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold">Minhas Marcas</h2>
      {/* Aqui listar marcas e ocorrências */}
    </div>
  );
}
