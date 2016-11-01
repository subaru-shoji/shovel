import React from 'react';

import { Card, CardActions, CardText } from 'material-ui/Card';

import NovelCardHeader from './NovelCardHeader';

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
          <NovelCardHeader novel={novel} readCard={this.readCard.bind(this)} />
        </CardActions>
        <CardText expandable={true}>
          {novel.story}
        </CardText>
      </Card>
    );
  }
}

export default NovelCard;