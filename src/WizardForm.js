import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import ProgressDot from './ProgressDot';

class WizardForm extends Component {
  state = {
    currentpage: 1,
    totalPage: 3
  }
  nextPage = () => {
    this.setState({
      currentpage: this.state.currentpage + 1,
    });
  }

  previousPage = () => {
    this.setState({
      currentpage: this.state.currentpage - 1,

    });
  }

  render() {
    const { onSubmit } = this.props;
    const { currentpage, totalPage } = this.state;
    return (
      <div>
        <ProgressDot currentpage={currentpage} totalPage={totalPage} />
        {currentpage === 1 &&
          <WizardFormFirstPage onSubmit={this.nextPage} />
        }
        {currentpage === 2 &&
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        }
        {currentpage === 3 &&
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        }
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;





