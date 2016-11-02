import React from 'react';
import { connect } from 'react-redux';

import { Card, CardActions, CardText } from 'material-ui/Card';

import NovelCardHeader from './NovelCardHeader';
import { readNovel } from '../../actions/action';


class NovelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      read: false
    };
  }
  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }
  readCard(){
    this.props.readNovel({ncode: this.props.novel.ncode});
    this.setState({expanded: false, read: true});
  }
  render (){
    const novel = this.props.novel;

    const grayBack = {backgroundColor: 'gray'};

    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange.bind(this)}
        style={this.state.read ? grayBack : {}}
      >
        <CardActions actAsExpander={true}>
          <NovelCardHeader novel={novel} readCard={this.readCard.bind(this)} isRead={this.state.read}/>
        </CardActions>
        <CardText expandable={true}>
          {novel.story}
        </CardText>
      </Card>
    );
  }
}

export default connect(
  null,
  { readNovel }
)(NovelCard);
