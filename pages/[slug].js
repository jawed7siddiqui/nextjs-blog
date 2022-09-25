import { useRouter } from 'next/router';
import MoreData from "../components/home/MoreData";

export const getInitialProps = async (context) => {
  const { slug } = context.query;

  if (! slug) {
    slug = null;
  }

  return { props: { slug:slug } };
};

export default function PostDetails() {
  const router = useRouter();

  return (
    <div className="container-lg">
      <div className="px-lg-5 mx-lg-5">
        <br /><br /><br />
        <MoreData slug={router.query.slug} />
      </div>
    </div>
  )
}
