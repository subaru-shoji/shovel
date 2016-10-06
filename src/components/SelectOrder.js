import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const ORDER_LIST = {
  favnovelcnt: 'ブックマーク数の多い順',
  reviewcnt: 'レビュー数の多い順',
  hyoka: '総合評価の高い順',
  hyokaasc: '総合評価の低い順',
  impressioncnt: '感想の多い順',
  hyokacnt: '評価者数の多い順',
  hyokacntasc: '評価者数の少ない順',
  weekly: '週間ユニークユーザの多い順',
  lengthdesc: '小説本文の文字数が多い順',
  lengthasc: '小説本文の文字数が少ない順',
  ncodedesc: 'Nコードが新しい順',
  old: '古い順'
};

const { Component, PropTypes } = React;

export default class SelectOrder extends Component {
  static propTypes = {
      searchMethod: PropTypes.func
  }
  constructor(){
    super();

    this.state = {
      order: Object.keys(ORDER_LIST)[0]
    };
  }
  handleChange(event, index, value){
    this.setState({order: value});
    this.props.searchMethod(event);
  }
  render(){
    return (
      <span>
        <SelectField value={this.state.order} onChange={this.handleChange.bind(this)}>
          {Object.keys(ORDER_LIST).map((key)=> (<MenuItem key={key} value={key} primaryText={ORDER_LIST[key]} />))}
        </SelectField>
        <input name="order" type="hidden" value={this.state.order} />
      </span>
    );
  }
}