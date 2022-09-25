import Link from 'next/link'

export default function PreviousNextBtn() {
    return (
        <div className="p-3">
            <hr style={{ height: "2px", background: "black" }} />
            <div className="row py-3">
                <div className="col-6 footer_previous_btn">
                    <Link href='/'>
                        <a style={{ textDecoration: "none", color: "black" }}>
                            <i className="fa fa-arrow-left"></i> Previous Article
                            <h4 className='pt-2 footer_previous_btn_data'>
                                On Living Modular
                            </h4>
                        </a>
                    </Link>
                </div>
                <div className="col-6 footer_next_btn">
                    <Link href='/'>
                        <a style={{ textDecoration: "none", color: "black" }}>
                            Next Article <i className="fa fa-arrow-right"></i>
                            <h4 className="pt-2 footer_next_btn_data">
                                Minimum Viable Creativity
                            </h4>
                        </a>
                    </Link>
                </div>
                <div className="col-12 footer_center_btn">
                    <Link href='/'>
                        <a style={{ textDecoration: "none", color: "black" }}>
                            Feeling Lucky
                            <h4 className="pt-2 footer_center_btn_data">
                                Load a random article
                            </h4>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
