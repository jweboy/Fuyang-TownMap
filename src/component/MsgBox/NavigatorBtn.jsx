import React, {
    Component
} from 'react';

class NavigatorBtn extends Component {
  render() {
    const {
        msg
    } = this.props;

    return (
      <a className="navigator-btn" href={`http://m.amap.com/search/mapview/keywords=${msg.name}`}>去这里</a>
    );
  }
}
export default NavigatorBtn;
