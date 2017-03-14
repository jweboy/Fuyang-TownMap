import React, {
    Component
} from 'react';

class Message extends Component {
  render() {
    const {
        msg
    } = this.props;

    return (
      <div className="poibox">
        {/*<div className="close icon"></div>*/}
        <img className="logo" src={msg.logo} alt={msg.name}/>
       {/*<header className="placeimg"> 
            <div className="imgfeedlist" style={{display: 'block'}}>
                <a href="/detail/B023B02842?citycode=330000" target="_blank">
                    <div className="imgfeed" style={{backgroundImage: 'url(img/1.jpg)'}}></div>
                    <div className="imgiconbox">
                     <span className="imgico">
                        <i className="iconfont icon-image"></i>
                    </span>
                    </div>
                </a>
            </div>
        </header>*/}
        <section className="placetitle"> 
            <h3 className="poiname">{msg.name}</h3> 
            <span className="poistarbox ratingbox">
                <b className="poistar rating" style={{width:'52px'}}></b>
            </span>
            <p className="desc">{msg.desc}</p>
            {/*<span className="poiprice"><b>￥45起</b> /人</span>
            <span className="poiclassify">风景名胜</span>
            <span>距离市中心7.2公里</span>*/}
        </section>
        {/*<ul className="placeinfo module"> 
         <li className="feed">
             <div className="poi-cover-info" style={{backgroundImage: 'url("images/1.jpg;w=160&amp;h=150&amp;position=5")'}}>
                 <div className="dis">
                     <span className="feedicon">
                        <i className="iconfont icon-poi"></i> 
                     </span>
                 </div>
             </div>
             <p className="feedaddr"> 杭州市西湖区法云弄1号 </p> 
         </li>

            <li className="feed">
             <span className="feedicon">
            <i className="iconfont icon-tel">
            </i>
             </span>
                <p className="feedphone"> 0571-87968665 </p>
            </li>
        </ul>
        <div className="poi-info-left">
            <h3 className="poi-title">
               <span className="poi-name" title="景点名">1.&nbsp;景点名</span>
            </h3>
        </div>*/}
        {/*<div className="poi-info">
            <p className="poi-rate">
            <span className="poi-star">
                <b style={{width:'58.5px'}} className="poi-fstar"></b>
             </span>
            </p>
            <span className="poi-price">
                <font color="#999999">人均:</font>
                <font color="#f53623">￥</font>
                <font color="#f53623">100</font>&nbsp;&nbsp;<font color="#999999">火锅</font>
            </span>
        </div>*/}

        {/* <p className="poi-addr">天城路8号天城银座2幢迈达商业中心(全季酒店旁)</p>
          <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.BaiduMap">去这里</a>*/}
    </div>
    );
  }
}
export default Message;