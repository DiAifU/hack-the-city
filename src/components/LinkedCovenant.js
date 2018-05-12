import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { Covenant } from 'interbit-ui-components';

const LinkedCovenant = () => {
  const {
    chainId, chainName, raw, covenant, blockchainDispatch, reset,
  } = this.props;

  return (
    <Segment>
      <Link to={chainId ? `/explore?chainId=${chainId}` : '#'}>
        <h3>
          {chainName}
          {chainId ? ` (${chainId.substr(0, 16)}...)` : ''}
        </h3>
      </Link>
      <Covenant
        raw={raw}
        covenant={covenant}
        reset={reset}
        blockchainDispatch={blockchainDispatch}
      />
    </Segment>
  );
};

LinkedCovenant.propTypes = {
  chainId: PropTypes.string.isRequired,
  chainName: PropTypes.string.isRequired,
  // Note: We do not know the state shape and thus cannot define it in props
  // eslint-disable-next-line react/forbid-prop-types
  raw: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  covenant: PropTypes.object.isRequired,
  blockchainDispatch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

LinkedCovenant.defaultProps = {
  raw: {},
};

export default LinkedCovenant;
