import Link from "next/link";
import Logo from "../../public/imgs/Logo.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [postionSticky, setPostionSticky] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setPostionSticky(window.pageYOffset > 20)
      );
    }
  }, []);

  return (
    <>
      <div style={{ marginBottom: `${postionSticky ? "100px" : "0px"}` }}>
        <nav
          className={`navbar ${postionSticky ? "py-3" : "py-4"} ${
            postionSticky ? "fixed-top" : ""
          }`}
          style={{
            background: `${postionSticky ? "white" : "transparent"}`,
            borderBottom: `${
              postionSticky
                ? "1px solid rgba(0, 0, 0, 0.12)"
                : "0px solid rgba(0, 0, 0, 0.12)"
            }`,
          }}
        >
          <div className="container-lg px-lg-5">
            <Link href="/">
              <img
                src={Logo.src}
                alt="#ImgNotFound"
                style={{ cursor: "pointer" }}
                width="150px"
              />
            </Link>
            <button type="button" className="btn btn-dark">
              Explore Lapaas Services <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
