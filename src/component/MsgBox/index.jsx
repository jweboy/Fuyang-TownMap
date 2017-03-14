import React, {
    Component
} from 'react';
import './index.css';
import Message from './Message';
import NavigatorBtn from './NavigatorBtn';

class MsgBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
        msgObj:{}
    };
  }
  componentWillReceiveProps(nextProps) {
    console.info(nextProps);
    this.setState({
        msgObj:nextProps.list[nextProps.index]
    });
  }

  render() {
    let {
      msgObj
    } = this.state;

    const {
      isShow
    } = this.props;

    return (
        <div className={isShow === true ? "msg-box card-move" : "msg-box"}>
            <Message msg={msgObj}/>
            <NavigatorBtn msg={msgObj}/>
        </div>
    );
  }
}
export default MsgBox;
