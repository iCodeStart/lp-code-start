import { Header, WorldProgramming } from "@/components";
import { Benefits } from "@/components/Benefits";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <WorldProgramming />
      <Benefits/>
    </>
  );
}
