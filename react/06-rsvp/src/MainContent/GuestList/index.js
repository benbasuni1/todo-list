import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest}/>
    {props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map((guest, id) =>
      <Guest
        key={id}
        name={guest.name}
        isConfirmed={guest.isConfirmed}
        isEditing={guest.isEditing}
        handleConfirmation={() => props.toggleConfirmation(id)}
        handleToggleEditing={() => props.toggleEditing(id)}
        setName={text => props.setName(text, id)}
        handleRemove={() => props.removeGuest(id)}
      />
    )}
  </ul>;

GuestList.propTypes = {
  guests               : PropTypes.array.isRequired,
  isFiltered           : PropTypes.bool.isRequired,
  toggleConfirmation   : PropTypes.func.isRequired,
  toggleEditing        : PropTypes.func.isRequired,
  setName              : PropTypes.func.isRequired,
  removeGuest          : PropTypes.func.isRequired,
  pendingGuest         : PropTypes.string.isRequired
};


export default GuestList;
