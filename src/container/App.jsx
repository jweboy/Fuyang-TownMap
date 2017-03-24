import React, {
    Component
} from 'react';
import IScroll from  'iscroll/build/iscroll-zoom';

import MsgBox from '../component/MsgBox';
import ajax from '../util/ajax';

import renderData from '../../mock/data';
import land from '../imgs/land@2x.png';

import 'normalize.css';
import '../styles/reset.css';

const defaultProps = {
    land:land,
};
const propTypes = {
    land:React.PropTypes.string,
}

const REQUESTURL = '/Interface/FuYMap/ScenicListService.ashx?pagetype=info&iD=';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            viewList:[],
            isShow:false,
            currMsg:{}
        }

       // this.loadPage = this.loadPage.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }
    loadPage = () => {
        this.setState({
            list:renderData.list,
            viewList:renderData.viewList
        });
    }
    handleClick = (index, getList) => {
        // console.log(getList);
        const that = this;
        let isLogo = false;
        if(index !== 100) {
            isLogo = true;
        }
        ajax.getRequest({
            url:REQUESTURL + index,
            method:'get'
        }, function(data) {
            data = JSON.parse(data);
            if(data.status === 1) {
                that.setState({
                    isShow:isLogo,
                    currMsg:data.data
                });
            }
        }, function(error) {
            // console.log(error);
        });
    }
    handleClose(isShow) {
        this.setState({
            isShow:isShow
        })

    }
    render() {
        let { list, isShow, viewList } = this.state;
        const { land } = this.props;

        const landPoint = list.map((item, index) => {
            const posStyle = {
                'left':`${item.coordX}`,
                'top':`${item.coordY}`
            }
            return (
                <a className="land" style={posStyle} key={index} data-index={item.id} onClick={this.handleClick.bind(this,item.id, 'land')} >
                    <img className="logo" src={land} alt={item.name}/>
                    <span style={{'display':'none'}}>{item.name}</span>
                </a>
            )
        },this);

        const viewPoint = viewList.map((item, index) => {
            const viewStyle = {
                'left':`${item.coordX}`,
                'top':`${item.coordY}`
            }
            return (
                <a className={index === 0 ? "view-spe" : "view"} style={viewStyle} key={index} data-index={item.id} onClick={this.handleClick.bind(this,item.id, 'view')} >
                    <span style={{'display':'none'}}>{item.name}</span>
                </a>
            );
        }, this);

        return (
            <div className="map-container wrapper">
                <div className={isShow === true ? "land-map map-move" : "land-map"}>
                    {landPoint}
                    {viewPoint}
                </div>
                <MsgBox {...this.state} closeCallBack={this.handleClose}/>
            </div>
        )
    }
    componentDidMount() {
        this.loadPage();

        new IScroll('.wrapper', {
            zoom: true,
            scrollX: true,
            scrollY: true,
            mouseWheel: true,
            wheelAction: 'zoom',
            click:true,
            zoomStart:2
        });

        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
}
App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
