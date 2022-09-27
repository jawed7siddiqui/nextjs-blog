import { useRouter } from "next/router";
import MoreData from "../components/home/MoreData";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  if (!slug) {
    slug = null;
  }

  return { props: { slug: slug } };
};

export default function PostDetails() {
  const router = useRouter();

  return (
    <>
      <MoreData slug={router.query.slug} />
    </>
  );
}
