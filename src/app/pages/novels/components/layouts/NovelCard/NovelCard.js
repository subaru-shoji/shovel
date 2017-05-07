import NovelCardView from './NovelCardView';
import React from 'react';

class NovelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  handleExpandChange(expanded) {
    this.setState({
      expanded: expanded
    });
  }
  readCard() {
    const data = {
      ncode: this.props.novel.ncode,
      isRead: true
    };
    this.props.updateMethod(data);
    this.setState({
      expanded: false
    });
  }
  unreadCard() {
    const data = {
      ncode: this.props.novel.ncode,
      isRead: false
    };
    this.props.updateMethod(data);
    this.setState({
      expanded: false
    });
  }
  toggleExpand() {
    const isExpanded = this.state.expanded;
    this.setState({
      expanded: !isExpanded
    });
  }
  render() {
    return (
      <div>
        <NovelCardView
      novel={this.props.novel}
      readCard={this.readCard.bind(this)}
      unreadCard={this.unreadCard.bind(this)}
      toggleExpand={this.toggleExpand.bind(this)}
      expanded={true}
      handleExpandChange={this.handleExpandChange.bind(this)}
      />
      </div>
      );
  }
}

export default NovelCard;
