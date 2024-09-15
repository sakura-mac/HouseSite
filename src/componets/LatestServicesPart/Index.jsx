import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class LatestServicesPart extends React.Component {

    render() { 
        return ( 
          <React.Fragment>
          <div className="services-title-area">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <div className="services-title-item text-center">
                    <div className="ring-shape" />
                    <span>推荐房源</span>
                    <h3 className="title">全心全意为您服务</h3>
                  </div> 
                </Col>
              </Row> 
            </Container> 
          </div>
          <div className="latest-services-area">
            <Container>
              <Row className="justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="assets/images/Image_20231028151104.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">🏠 心斎橋南1丁目15番地 モダンアパートメント</h4>
                      <p>
                        现代设计的公寓，步行3分钟到达心斎橋地铁站。周边购物中心和美食街云集，适合喜欢都市生活的旅行者。房间设备齐全，提供高速Wi-Fi，适合短期或长期居住。
                      </p>
                      <Link to={"services-details"}>
                        Read More
                        <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="assets/images/Image_20231028151220.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">🏙 梅田北区中津2-9-3 ラグジュアリースイート</h4>
                      <p>
                        位于梅田中心区，公寓拥有高层全景阳台，俯瞰城市美景。靠近大型商场和餐饮区，步行5分钟到中津站，交通极其便捷。宽敞的起居空间非常适合商务出行或家庭入住。
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="assets/images/Image_20231028151229.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">🌿 天王寺区真田山3丁目12番地 和風庭付き別荘</h4>
                      <p>
                        传统日式庭院别墅，带有私人日式花园，提供静谧舒适的居住体验。步行10分钟可达天王寺公园与寺庙景点，周边还有温泉设施，适合家庭和朋友放松入住。
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/Image_20231028151237.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">🚇 難波中央区元町1丁目5番17号 スタイリッシュアパートメント</h4>
                      <p>
                        距离难波地铁站步行仅需1分钟，位置极其便利。周边餐厅、购物中心和便利店众多，适合短期旅游或商务出行。公寓内设备完善，现代化设计风格让人倍感舒适。
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="2.5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/Image_20231028151244.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">🌅 大阪港区海岸通2丁目7番11号 海景ラグジュアリーアパートメント</h4>
                      <p>
                        坐拥大阪港美丽景色，适合喜欢宁静与美景的住客。公寓宽敞明亮，拥有全景落地窗和现代化设施，提供舒适的居住体验，适合长短租。步行5分钟可至海洋博物馆和水族馆。
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="3s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/Image_20231028151250.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">🏡 大阪福島区吉野1丁目18番地 デザイナーズアパートメント</h4>
                      <p>
                        位于福岛区的设计师公寓，拥有简约时尚的室内设计，步行7分钟可达福岛地铁站。附近有超市和餐馆，适合生活便利的租客。公寓配有独立厨房和洗衣机，非常适合长期居住。
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
          </React.Fragment>
         );
    }
}
 
export default LatestServicesPart;