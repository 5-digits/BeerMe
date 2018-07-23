import React, { Component } from 'react';

class Results extends Component {

  componentWillMount() {
    this.props.appInitiator(0);
  }

  render() {
    // const { match } = this.props;

    return (
      <section id="results-section">
        <div id="results">
          <div className="right-panel">
            <div className="container">
              <img className="beer-label" src="https://s3.amazonaws.com/brewerydbapi/beer/sEJgaL/upload_U5wKtP-large.png" alt="Beer Label"/>
              <h1 className="beer-name">NatureLand Organic Lager</h1>
              <div className="beer-info">
                <div className="label">
                  <span className="title">ABV:</span>
                  <span className="data">5</span>
                  <div className="question-help">
                    <i className="fa fa-question-circle"></i>
                    <span className="tooltip">
                      <div className="header">Standard Reference Method</div>
                      <div className="description">
                        Standard Reference Method (SRM) is used to measure a beer's color. It goes from 1 to 40+, with 1 being the lightest and 40+ being almost black in color.
                      </div>
                    </span>
                  </div>
                </div>
                <div className="label">
                  <span className="title">IBU:</span>
                  <span className="data">10</span>
                  <div className="question-help">
                    <i className="fa fa-question-circle"></i>
                    <span className="tooltip">
                      <div className="header">Standard Reference Method</div>
                      <div className="description">
                        Standard Reference Method (SRM) is used to measure a beer's color. It goes from 1 to 40+, with 1 being the lightest and 40+ being almost black in color.
                      </div>
                    </span>
                  </div>
                </div>
                <div className="label">
                  <span className="title">GLASSS:</span>
                  <span className="data">Pint</span>
                  <div className="question-help">
                    <i className="fa fa-question-circle"></i>
                    <span className="tooltip">
                      <div className="header">Standard Reference Method</div>
                      <div className="description">
                        Standard Reference Method (SRM) is used to measure a beer's color. It goes from 1 to 40+, with 1 being the lightest and 40+ being almost black in color.
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <a href="#beerinfo" className="see-more">
                <span>Read More</span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div id="beerinfo" className="left-panel">
            <div className="description">
              <h2>DESCRIPTION:</h2>
              <p>Organic Lager: Dry character with noble aroma hops. We have created an exceptional organic lager with an inviting flavour and a clean, refreshing taste. NatureLand is brewed with the world's finest organic malted barley, hops and our own naturally pure spring water. A stunning beer that is brewed using only the best two-row malt, Hallertau Hops and our own pure spring water - NatureLand Organic Lager is among Nature's finest unadulterated products. Every pour ...NatureLand Lager is a veritable glass of alpine-meadow sunshine, complete with hints of green apple. Great with spicy food or roast chicken.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Results;
