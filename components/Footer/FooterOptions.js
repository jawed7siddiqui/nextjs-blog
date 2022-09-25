import Link from 'next/link'

export default function FooterOptions() {
    return (
        <div className="data-container p-3">
            <hr style={{ height: "2px", background: "black" }} />
            <h6 className='text-center py-3' style={{ color: "#9A9897" }}><i className="fa fa-th-large"></i> Explore by Topic</h6>
            <div className="row">
                <div className="col-6 col-lg-3 text-center footer-options">
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Culture</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Learning</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Consumer Psychology</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Systems Thinking</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Management</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Structured Thinking</p></a></Link>
                </div>
                <div className="col-6 col-lg-3 text-center footer-options">
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Finance</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Economics & Markets</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>First Principles</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Market Research</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Product Thinking</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Business Operations</p></a></Link>
                </div>
                <div className="col-6 col-lg-3 text-center footer-options">
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Marketing</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Top Reads</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Career</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Workplace</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Venture Creation</p></a></Link>
                </div>
                <div className="col-6 col-lg-3 text-center footer-options">
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Strategy</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Incentives</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Business Philosophy</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Leadership</p></a></Link>
                    <Link href="/"><a style={{ textDecoration: "none" }}><p className='Link'>Sales</p></a></Link>
                </div>
            </div>
        </div>
    )
}
