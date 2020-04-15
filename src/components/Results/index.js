import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../actions';
import Card from '../Card';
import loadingImage from '../../images/loading.gif';
import './Results.scss';

class Results extends Component {
  componentDidMount() {
    // load default list of cards, Step 1 in api flow
    this.props.fetchCards("https://api.elderscrollslegends.io/v1/cards?pageSize=20&page=1");
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetchNextPage() {
    const { next, isLoadingData } = this.props;
    // if we're not on the last page and we're not already loading a new page
    if( next !== "LAST_PAGE" && !isLoadingData ) {
      // fetch the next page of cards
      this.props.fetchCards(next);
    }
  }

  isBottom(el) {
    // compare bottom of el from top of viewport to height of viewport
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  handleScroll = (e) => {
    const wrappedElement = document.getElementById('results');
    // if we are at the bottom of results
    if (this.isBottom(wrappedElement)) {
      // attempt to load the next page of cards
      this.fetchNextPage();
    }
  }

  render() {
    // when the cards in the store are updated, this component will redraw,
    // Step 5 in api flow
    const { cards, isLoadingData } = this.props;
    const noResults = (cards.length === 0);
    return (
      <div id="results">
      {(noResults && !isLoadingData) ? (<div className="no-results">No Results</div>) : (cards.map((g, i) => {
        return <Card key={i} {...g} />
      }))}
      {isLoadingData && <div className="loading"><img src={loadingImage} alt="loading" /></div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { cards, isLoadingData, next } = state.cardReducer;
  return {
    cards,
    isLoadingData,
    next
  };
};

export default connect( mapStateToProps, { fetchCards } )(Results);
