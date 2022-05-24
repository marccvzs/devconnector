import React, { Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';

const ProfileItem = props => {
  return (
    <div>ProfileItem</div>
  )
}

ProfileItem.propTypes = {};

export default connect()(ProfileItem);