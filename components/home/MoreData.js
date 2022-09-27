import React from "react";
import Link from "next/link";
import ApiService from "../../services/Api.service";

class MoreData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      loading: true,
    };

    console.log(this.props);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    let slug = this.props.slug ? this.props.slug : "seo-guide-for-beginners";

    let api = ApiService.route("post/show/" + slug);

    let result = await ApiService.get(api);

    this.setState({
      post: result.data,
      loading: false,
    });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="">
            <div className="text-2xl font-bold text-center my-10">
              Loading...
            </div>
          </div>
        ) : (
          <div className="mx-5 md:mx-40 lg:mx-52">
            <div className="my-10">
              <h6 className="text-gray-500 font-bold mb-2">
                {this.state.post.current?.post_at}
              </h6>
              <h1 className="text-xl md:text-4xl font-bold leading-snug capitalize">
                {this.state.post.current?.title}
              </h1>
            </div>

            {this.state.post.current?.featured_image && (
              <img
                src={this.state.post.current?.featured_image}
                alt="image"
                className="w-full rounded-md"
              />
            )}

            <div className="my-10 md:mx-5 font-serif">
              <div
                className="leading-10 text-xl"
                dangerouslySetInnerHTML={{
                  __html: this.state.post.current?.description,
                }}
              ></div>

              <div className="">
                <hr className="mt-10" />

                <div className="">
                  <div className="">
                    {this.state.post.previous?.id && (
                      <a
                        href={"/" + this.state.post.previous.slug}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <i className="fa fa-arrow-left"></i> Previous Article
                        <h4 className="pt-2 footer_previous_btn_data">
                          {this.state.post.previous.title}
                        </h4>
                      </a>
                    )}
                  </div>

                  <div className="">
                    {this.state.post.next?.id && (
                      <a href={"/" + this.state.post.next.slug}>
                        Next Article <i className="fa fa-arrow-right"></i>
                        <h4 className="">{this.state.post.next.title}</h4>
                      </a>
                    )}
                  </div>

                  <div className="">
                    <Link href="/">
                      <a>
                        Feeling Lucky
                        <h4 className="">Load a random article</h4>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#171717] dark:text-white text-[#171717]">
                <h5 className="">{this.state.post.current?.title}</h5>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MoreData;
