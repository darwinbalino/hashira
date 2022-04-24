import { useRouter } from "next/router";
import ModalDetails from "../../components/ModalDetails";

const ImagePage = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div className="absolute inset-0">
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/2">
          <ModalDetails id={id} />
        </div>
      </div>
    </div>
  );
};

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: "nft1" } },
      { params: { id: "nft2" } },
      { params: { id: "nft3" } },
      { params: { id: "nft4" } },
      { params: { id: "nft5" } },
      { params: { id: "nft6" } },
    ],
    fallback: "blocking",
  };
}

export function getStaticProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}

export default ImagePage;
