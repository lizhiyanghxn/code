import React, { Component } from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
import './ContentBox.scss';
import { getSlotContent } from 'common/utils/publicMethod';

class ContentBox extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    titleText: PropTypes.any, // 标题
    subTitleText: PropTypes.string, // 子标题
    showHead: PropTypes.bool, // 是否展示头
    headClass: PropTypes.string, // 头部样式class
  };

  static defaultProps = {
    titleText: '',
    subTitleText: '',
    showHead: true,
    headClass: 'head-style-1',
  };

  render() {
    return (
      <div className={cs('content-box-comp', this.props.className)}>
        {this.props.showHead ? (
          <div className={cs('head', this.props.headClass)}>
            <div className="head-left">
              {this.props.titleText ? (
                <div>
                  {this.props.titleText}{' '}
                  {this.props.subTitleText ? (
                    <span className="sub-title-text">({this.props.subTitleText})</span>
                  ) : null}
                </div>
              ) : (
                getSlotContent(this.props.children, 'headLeft')
              )}
            </div>
            <div className="head-right">{getSlotContent(this.props.children, 'headRight')}</div>
          </div>
        ) : null}
        <div className="content">{getSlotContent(this.props.children, 'content')}</div>
      </div>
    );
  }
}

export default ContentBox;
