import React from 'react'

import styled from 'styled-components'

import './style'
import Grid from '../components/grid'

const StyledDemo = styled.div`
    
`;

const sizeMap = {
    xxs: '15px',
    xs: '18px',
    sm: '21px',
    md: '22px',
    lg: '36px'
}

const StyledIcon = styled.span`
    display: inline-block;
    vertical-align: top;
    width: ${props=>sizeMap[props.size] || sizeMap[md]};
    height: ${props=>sizeMap[props.size] || sizeMap[md]};
    background: #ccc;
`;

class Icon extends React.Component{
    static defaultProps = {
        size: 'md'
    }

    render(){
        return <StyledIcon {...this.props} />
    }
}

const genData = (size='md', len = 9)=>{
    let ret = [];
    for(let i = 0; i < len; i++){
        ret.push({
            icon: <Icon size={size} />,
            text: i+1
        })
    }
    return ret;
}

const data1 = genData();

const data2 = genData('lg');

export default class Example extends React.Component {
    handleClick=(item, index)=>{
        console.log(item);
        console.log(index);
    }
    render(){
        return (
            <div>
                <h2>Grid 网格</h2>
                <StyledDemo>
                    <h3>基础</h3>
                    <Grid data={data1} onClick={this.handleClick} />
                    <h3>不显示正方形</h3>
                    <blockquote>square</blockquote>
                    <Grid data={data1} square={false} onClick={this.handleClick}  />
                    <h3>列数</h3>
                    <blockquote>columnNum</blockquote>
                    <Grid data={data1} columnNum={5} onClick={this.handleClick}  />
                    <h3>无边框</h3>
                    <blockquote>hasLine</blockquote>
                    <Grid data={data1} columnNum={5} hasLine={false} onClick={this.handleClick}  />
                    <h3>样式</h3>
                    <blockquote>itemStyle、activeStyle、activeClassName</blockquote>
                    <Grid data={data1} columnNum={3} itemStyle={{background: 'rgba(0,0,0,0.05)'}} activeStyle={{background: '#fff'}} activeClassName="test-active-class" onClick={(item, index)=>{console.log(index)}} />
                    <h3>自定义内容</h3>
                    <blockquote>renderItem</blockquote>
                    <Grid data={data2} renderItem={(item, index)=>{
                        return (
                            <div style={{boxSizing: 'border-box', height: '100%', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {item.icon}
                            </div>
                        )
                    }} onClick={this.handleClick} />
                    <h3>自定义外层样式、边框颜色</h3>
                    <blockquote>wrapperStyle、lineColor</blockquote>
                    <Grid data={data2} lineColor='red' wrapperStyle={{
                        background: '#eee'
                    }} />

                    <h3>API</h3>
                    <h4>Grid</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                            <tr>
                                <td>data</td>
                                <td>传入的菜单数据</td>
                                <td>Array (icon, text)</td>
                                <td>[]</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>点击每个菜单的回调函数</td>
                                <td>function (item: object, index: number)</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>columnNum</td>
                                <td>列数</td>
                                <td>number</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>square</td>
                                <td>每个格子是否固定为正方形</td>
                                <td>boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>hasLine</td>
                                <td>是否有边框</td>
                                <td>boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>lineColor</td>
                                <td>边框颜色</td>
                                <td>string</td>
                                <td>#ddd</td>
                            </tr>
                            <tr>
                                <td>renderItem</td>
                                <td>自定义每个 grid 条目的创建函数</td>
                                <td>function (item, index) => React.Node</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>itemStyle</td>
                                <td>每个格子自定义样式</td>
                                <td>object</td>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <td>activeStyle</td>
                                <td>点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)</td>
                                <td>object|false</td>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <td>activeClassName</td>
                                <td>点击反馈的自定义类名</td>
                                <td>string</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>wrapperStyle</td>
                                <td>自定义最外层样式</td>
                                <td>object</td>
                                <td>{`backgroundColor\: 'white'`}</td>
                            </tr>
                        </tbody>
                    </table>
                </StyledDemo>
            </div>
        )
    }
}
