import React, {
    Component
} from 'react';
// import addons, {
//     classSet
// } from 'react-addons';
import MsgBox from '../component/MsgBox';
// import ajax from '../util/ajax';

import data from '../../mock/data';
import land from './land.png';
import 'normalize.css';
import '../styles/reset.css';

// import Frame from 'react-frame-component';
// console.log(Frame)

const defaultProps = {
    land:land
};
const propTypes = {
    land:React.PropTypes.string
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            index:0,
            isShow:false
        }
       // this.loadPage = this.loadPage.bind(this);
        // this.handleClick = this.handleClick.bind(this);

    }
    loadPage = () => {
        // ajax.getRequest({
        //     url:'http://localhost:8080/mock/data.json',
        //     method:'get'
        // }, function(data) {
        //     console.log(data);
        // })

        this.setState({
            list:data.list
        });
    }
    handleClick = (index) => {
        this.setState(prevState => ({
            isShow:true,
            index:index
        }));
    }
    render() {
        let { list, isShow } = this.state;
        const { land } = this.props;
        return (
            <div>
                <div className={isShow === true ? "land-map map-move" : "land-map"}>
                    {
                        list.map((item, index) => {
                            const posStyle = {
                                'left':`${item.coordX}`,
                                'top':`${item.coordY}`,
                                // 'position':`absolute`,
                                // 'display':'block'
                                //{'width':'100%','height':'100%','position':'absolute','left':'0'}
                            }
                            return (
                                <a className="land" style={posStyle} key={item.id} data-index={index} onClick={this.handleClick.bind(this,index)} >
                                    <img className="logo" src={land} alt={item.name}/>
                                    <span>{item.name}</span>
                                </a>
                            )
                        },this)
                    }
                </div>
             {/*<Frame
                    initialContent = ' <!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> </head> <body><div id ="mountHere"> </div> </html> '
                    mountTarget = '#mountHere'
                    style={{'width':'100%', height:'300px'}}
                >
                </Frame>*/}
                <MsgBox {...this.state}/>
            </div>
        )
    }
    componentDidMount() {
        this.loadPage();
    }
}
App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
