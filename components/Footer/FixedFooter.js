import React from "react";
import Link from "next/link";
import ApiService from "../../services/Api.service";

class FixedFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      loading: true,
    };
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
        <div className="bg-white dark:bg-[#171717] dark:text-white text-[#171717] mx-auto h-[66px] sticky bottom-0 z-50 flex justify-center items-center">
          <div className="">
            <h5 className="text-sm md:text-xl font-semibold text-center">
              {this.state.post.current?.title}
            </h5>{" "}
          </div>
        </div>
      </>
    );
  }
}

export default FixedFooter;
