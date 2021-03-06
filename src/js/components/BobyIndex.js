import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild';

import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

import PropTypes from 'prop-types';

export default class BobyIndex extends React.Component {
    constructor() {
        super(); // 调用基类的所有初始化方法
        this.state = {
            username: "Lac",
            age: 25
        } // 自身的state只是当前作用域
    }

    changeUserInfo(age) {
        this.setState({age: age});
        // 操作原生DOM第一种方式
        var mySubmitBtn=document.getElementById("submitButton");
        ReactDOM.findDOMNode(mySubmitBtn).style.color='red';

        // 第二种方式 （推荐）
        console.log(this.refs.submitButto);

        MixinLog.log();

    };
    handleChildValueChange(event) {
        this.setState({age: event.target.value});
    };

    render() {

        // setTimeout(() => {     // 更改state 的时候     this.setState({username:
        // "Zhangyangyang",age: 18}) }, 4000);

        return (
            <div>
                <h2>页面主体</h2>
                <p>{this.state.username}</p>
                <p>{this.state.age}</p>

                <p>接收到的父页面的属性：{this.props.userid}</p>
                <input id="submitButton" ref="submitButto"
                    type="button"
                    value="提交"
                    onClick={this
                    .changeUserInfo
                    .bind(this, 18)}/>
                    {/*...：把父页面所有属性拿过来*/}
                <BodyChild
                    {...this.props}
                    handleChildValueChange={this
                    .handleChildValueChange
                    .bind(this)}/>
            </div>
        )
    }
}
// 类型约束
BobyIndex.propTypes = {
    userid: PropTypes.number
}

ReactMixin(BobyIndex.prototype,MixinLog);