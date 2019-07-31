import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(
      ({ id, ...otherSectionProps }) =>  //Destructure section to it's keys, to avoid rewriting section
        (
          <MenuItem key={id} {...otherSectionProps} />
        )
    )}
  </div>
);

const mapStateToProps = createStructuredSelector(
  {sections: selectDirectorySections}
);

export default connect(mapStateToProps, null)(Directory);