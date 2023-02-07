/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlogsThreeColumn2 = ({ subBG }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Our Blogs.
            </h3>
          </Split>
          <span className="tbg">Blogs</span>
        </div>
        <div className="row">
          {/* first stsart */}
          <div className="col-lg-4">
            <div
              className="item list md-mb50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="img">
                <img src="/img/blog/facebook-ad-targeting.jpg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog-details/Facebook-ad-targeting-options">
                  <a className="date custom-font">
                    <span>
                      <i>06</i> August
                    </span>
                  </a>
                </Link>

                <div className="info custom-font">
                  <a href="/blog-details/Facebook-ad-targeting-options" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog-details/Facebook-ad-targeting-options">
                    <a className="tag">
                      <span></span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/Facebook-ad-targeting-options">
                  Facebook ad targeting options
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/Facebook-ad-targeting-options">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* first end */}
          {/* coloum start */}
          <div className="col-lg-4">
            <div
              className="item list md-mb50 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="img">
                <img src="/img/blog/impact-of-digital-marketing.jpeg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog-details/impact-of-digital-marketing-hospitality-sector">
                  <a className="date custom-font">
                    <span>
                      <i>07</i> August
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/impact-of-digital-marketing-hospitality-sector">
                  Impact of digital marketing- Hospitality sector
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/impact-of-digital-marketing-hospitality-sector">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* coloum end */}
          {/* col start */}
          <div className="col-lg-4">
            <div className="item list wow fadeInUp" data-wow-delay=".8s">
              <div className="img">
                <img src="/img/blog/tips-to-get-better-leads-and-conversions-with-googles-ai.jpg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog/tips-to-get-better-leads-and-conversions-with-googles-ai.jpg">
                  <a className="date custom-font">
                    <span>
                      <i>08</i> August
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/tips-to-get-better-leads-and-conversions-with-googles-ai">
                  Tips to get better leads and conversions with Google’s AI
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/tips-to-get-better-leads-and-conversions-with-googles-ai">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* col-end */}
          {/* col start */}
          <div className="col-lg-4">
            <div className="item list wow fadeInUp" data-wow-delay=".8s">
              <div className="img">
                <img src="/img/blog/mobileFriendlinessGoogleRankingElement.png" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog/mobileFriendlinessGoogleRankingElement.png">
                  <a className="date custom-font">
                    <span>
                      <i>08</i> August
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/is-mobile-friendliness-a-google-ranking-element">
                  Tips to get better leads and conversions with Google’s AI
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/is-mobile-friendliness-a-google-ranking-element">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* col-end */}
        </div>
      </div>
    </section>
  );
};

export default BlogsThreeColumn2;
