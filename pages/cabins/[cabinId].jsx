import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";

// for dynamic pages | gets access to the pararms | SSR
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return {
    props: {
      cabin,
    },
  };
}

const Cabin = ({ cabin }) => {
  return (
    <>
      <Head>
        <title>Cabin {cabin.name} | The Wild Oasis</title>
      </Head>
      <CabinView cabin={cabin} />
    </>
  );
};
export default Cabin;
