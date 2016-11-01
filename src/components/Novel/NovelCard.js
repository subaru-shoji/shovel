import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import { NAROU_ROOT_URL } from '../../constants/constant'

class NovelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }
  reduceCard(){
    this.setState({expanded: false});
  }
  render (){
    const novel = this.props.novel;
    const doneButton = (
      <IconButton onClick={this.reduceCard.bind(this)}>
        <ActionDone />
      </IconButton>
    );

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
        <CardHeader
          title={(
            <a href={`${NAROU_ROOT_URL}/${novel.ncode}`} target="_blank">
              {novel.title}
            </a>
          )}
          subtitle={novel.writer}
          children={(
            <div style={{flex: 'auto', textAlign: 'right'}}>
              {doneButton}
            </div>
          )}
          actAsExpander={true}
          style={{display: 'flex'}}
        />
        <CardText expandable={true}>
          {novel.story}
        </CardText>
      </Card>
    );
  }
}

export default NovelCard;