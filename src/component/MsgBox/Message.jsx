import React, {
    Component
} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const {
        closeCallBack
    } = this.props;

    closeCallBack(false);
  }
  render() {
    const {
        msg
    } = this.props;

    const imgURL = 'http://saas.zeego.cn/UploadImg/Person';

    let  navigatorURL = '';

      if(msg.ScenicName === '烈士陵园（塔山村）') {
        navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E5%A1%94%E5%B1%B1%E6%9D%91&c=179&searchFlag=more_cate&nb_x=119.729771&nb_y=29.978841&center_rank=1&center_name=%E5%A1%94%E5%B1%B1%E6%9D%91&uid=e116be547318f77ac91b95f3&industry=life&qid=5378378938551733454/showall=1&pos=1&da_ref=mapclk&da_qrtp=11&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A239515510449985_from%3Awebappmap_exptype%3Aurl_query%3A%E5%A1%94%E5%B1%B1%E6%9D%91_adids%3A_killnum%3A0_userids%3A&da_adquery=%E5%A1%94%E5%B1%B1%E6%9D%91&da_adtitle=%E5%A1%94%E5%B1%B1%E6%9D%91&da_adindus=%E8%A1%8C%E6%94%BF%E5%9C%B0%E6%A0%87%3B%E6%9D%91%E5%BA%84&detail_from=list&vt=map`;
      }
      else if(msg.ScenicName === '院士故里（官塘村）') {
         navigatorURL = `https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%AF%8C%E9%98%B3%E5%8C%BA%E6%96%B0%E7%99%BB%E9%95%87%E5%AE%98%E5%A1%98%E6%9D%91%E6%9D%91%E6%B0%91%E5%A7%94%E5%91%98%E4%BC%9A&c=179&searchFlag=more_cate&nb_x=119.289362&nb_y=29.2866488&center_rank=1&center_name=%E5%AF%8C%E9%98%B3%E5%8C%BA%E6%96%B0%E7%99%BB%E9%95%87%E5%AE%98%E5%A1%98%E6%9D%91%E6%9D%91%E6%B0%91%E5%A7%94%E5%91%98%E4%BC%9A/vt=map`;
      }

      else if(msg.ScenicName === '半山村') {
         navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E5%8D%8A%E5%B1%B1%E6%9D%91&c=179&searchFlag=more_cate&nb_x=120.182462&nb_y=%20%2030.014783&center_rank=1&center_name=%E5%8D%8A%E5%B1%B1%E6%9D%91&uid=0934bfaf8803c24579dbd2d1&industry=life&qid=4913304886165355203/showall=1&pos=2&da_ref=mapclk&da_qrtp=11&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A245234180254981_from%3Awebappmap_exptype%3Aurl_query%3A%E5%8D%8A%E5%B1%B1%E6%9D%91_adids%3A_killnum%3A0_userids%3A&da_adquery=%E5%8D%8A%E5%B1%B1%E6%9D%91&da_adtitle=%E5%8D%8A%E5%B1%B1%E6%9D%91&da_adindus=%E8%A1%8C%E6%94%BF%E5%9C%B0%E6%A0%87%3B%E6%9D%91%E5%BA%84&detail_from=list&vt=map`;
      }

      else if(msg.ScenicName === '圣园碑林') {
        navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6%E9%99%84%E8%BF%91&c=179&searchFlag=more_cate&nb_x=119.743648&nb_y=29.977028&center_rank=1&center_name=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6%E9%99%84%E8%BF%91&uid=d82d6697a75997d8d518b716&industry=education&qid=1644929160096392703/showall=1&pos=0&da_ref=mapclk&da_qrtp=36&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A245658749354539_from%3Awebappmap_exptype%3Aurl_query%3A%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6_adids%3A_killnum%3A0_userids%3A&da_adquery=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6&da_adtitle=%E5%AF%8C%E9%98%B3%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6&da_adindus=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD%3B%E4%B8%AD%E5%AD%A6&detail_from=list&vt=map`;
      }

       else if(msg.ScenicName === '徐玉兰故里') {
        navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E5%A1%94%E5%B1%B1%E6%9D%91&c=179&searchFlag=more_cate&nb_x=119.729771&nb_y=29.978841&center_rank=1&center_name=%E5%A1%94%E5%B1%B1%E6%9D%91&uid=e116be547318f77ac91b95f3&industry=life&qid=5378378938551733454/showall=1&pos=1&da_ref=mapclk&da_qrtp=11&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A239515510449985_from%3Awebappmap_exptype%3Aurl_query%3A%E5%A1%94%E5%B1%B1%E6%9D%91_adids%3A_killnum%3A0_userids%3A&da_adquery=%E5%A1%94%E5%B1%B1%E6%9D%91&da_adtitle=%E5%A1%94%E5%B1%B1%E6%9D%91&da_adindus=%E8%A1%8C%E6%94%BF%E5%9C%B0%E6%A0%87%3B%E6%9D%91%E5%BA%84&detail_from=list&vt=map`;
       }

       else if(msg.ScenicName === '罗隐碑林' || msg.ScenicName === '联魁塔') {
          navigatorURL = `https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=贤明山公园&c=179&searchFlag=more_cate&nb_x=119.738586&nb_y=  29.966398&center_rank=1&center_name=贤明山公园附近/vt=map`;
       }

      else {
        navigatorURL = `https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=${msg.ScenicName}&c=179&searchFlag=more_cate&nb_x=${msg.LatY}&nb_y= ${msg.LongX}&center_rank=1&center_name=${msg.ScenicName}/vt=map`;
      }

    return (
      <div>
          <div className="poibox">
            <img className="logo" src={imgURL+msg.ScenicPic} alt={msg.ScenicName}/>
            <section className="placetitle">
              <div className="title">
                <span className="poiname">{msg.ScenicName}</span>
                <a href="#" className="close icon" onClick={this.handleClick}></a>
              </div>
                <p className="desc">
                  {msg.ScenicBrief}
                </p>
                <p style={{'overflow':'hidden','marginTop':5}}>
                  <a href={'tel:'+msg.ScenicTel}>{msg.ScenicTel}</a>&nbsp;&nbsp;
                  <a href={'tel:'+msg.ScenicTelTwo}>{msg.ScenicTelTwo}</a>
                  <a className="navigator-btn" href={navigatorURL}>导&nbsp;&nbsp;航</a>
                </p>
            </section>
        </div>
      </div>
    );
  }
}
export default Message;
