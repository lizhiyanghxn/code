/* eslint-disable @typescript-eslint/no-invalid-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import * as echarts from 'echarts';
import CommonTip from '../CommonTip';

const infographic = require('./infographic.project.json');

export type EchartsType = {
  initOpts: any;
  height?: string;
  width?: string;
  option: any;
  resize?: boolean;
  tooltipConfig?: {
    msg: string;
    left: string;
  };
  className?: string;
  onlegendselectchanged?: (...p: any) => any;
  setChartInstance?: (...p: any) => any;
  clear?: (...p: any) => any;
};

class Echarts extends Component<EchartsType, { chartInstance: any; option: any }, any> {
  constructor(props: EchartsType) {
    super(props);
    this.state = {
      chartInstance: null,
      option: {},
    };
  }

  static propTypes = {
    initOpts: PropTypes.any,
    height: PropTypes.string,
    width: PropTypes.string,
    option: PropTypes.object,
    resize: PropTypes.bool,
    onlegendselectchanged: PropTypes.func,
    setChartInstance: PropTypes.func,
    clear: PropTypes.func,
  };

  static defaultProps = {
    initOpts: {},
    height: '100%',
    width: '100%',
    option: {},
    resize: true,
    setChartInstance: () => {
      //
    },
    clear: () => {},
  };

  instance = React.createRef<any>();

  componentDidMount() {
    this.setState(
      {
        chartInstance: echarts.init(this.instance.current, infographic.theme, this.props.initOpts),
      },
      // eslint-disable-next-line func-names
      function () {
        this.state.chartInstance.setOption(this.props.option);
        this.props.setChartInstance(this.state.chartInstance);
        this.props.clear(this.clearAndReset);

        if (this.props.resize) {
          window.addEventListener('resize', this.state.chartInstance.resize);
        }

        // 图例点击事件
        if (this.props.onlegendselectchanged) {
          this.state.chartInstance.on('legendselectchanged', this.props.onlegendselectchanged);
        }
      },
    );
  }

  clearAndReset = (option = {}) => {
    if (this.state.chartInstance) {
      this.state?.chartInstance?.clear();
      setTimeout(() => {
        this.state?.chartInstance?.setOption(option);
      }, 100);
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (
      this.state.chartInstance &&
      JSON.stringify(this.props.option.series) !== JSON.stringify(nextProps.option.series)
    ) {
      this.clearAndReset(nextProps.option);
    }
  }

  componentWillUnmount() {
    if (this.props.resize) {
      window.removeEventListener('resize', this.state.chartInstance?.resize);
    }
  }

  render() {
    const { tooltipConfig = null, className } = this.props;

    const tooltipStyle: any = {
      position: 'absolute',
      top: '0',
      zIndex: 99,
      left: tooltipConfig ? tooltipConfig.left : '80px',
    };

    return (
      <div className={cs(['echart-instance-wrap', className])} style={{ position: 'relative' }}>
        <div
          ref={this.instance}
          style={{ height: this.props.height, width: this.props.width, backgroundColor: '#fff' }}
          className="echart-instance"
        />
        {tooltipConfig ? (
          <div className="index-tooltip" style={tooltipStyle}>
            <CommonTip text={tooltipConfig.msg} fontSize={12} style={{ paddingLeft: 0 }} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Echarts;
