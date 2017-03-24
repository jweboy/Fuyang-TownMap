import React, {
    Component
} from 'react';
import './index.css';
import Message from './Message';

class MsgBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
        msgObj:{}
    };
  }
  componentWillReceiveProps(nextProps) {
    // console.info(nextProps);
    this.setState({
        msgObj:nextProps.currMsg
    });
  }

  render() {
    let {
      msgObj
    } = this.state;

    const {
      isShow,
      closeCallBack
    } = this.props;

    return (
        <div className={isShow === true ? "msg-box card-move-in" : "msg-box card-move-out"}>
            <Message msg={msgObj} closeCallBack={closeCallBack}/>
        </div>
    );
  }
}
export default MsgBox;
