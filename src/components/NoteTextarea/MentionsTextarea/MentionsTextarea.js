import React from 'react';
import PropTypes from 'prop-types';
import { MentionsInput, Mention } from 'react-mentions';

import './MentionTextArea.scss';

const propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  userData: PropTypes.arrayOf(PropTypes.object),
};

const MentionsTextarea = React.forwardRef(
  (
    {
      value = '',
      onChange,
      onKeyDown = () => {},
      onBlur = () => {},
      onFocus = () => {},
      placeholder = '',
      userData,
    },
    forwardedRef
  ) => {
    const renderSuggestion = (entry, search, highlightedDisplay) => (
      <React.Fragment>
        {highlightedDisplay}
        <div className="email">{entry.email}</div>
      </React.Fragment>
    );

    const data = [
      ...userData.map(data => ({
        ...data,
        display: data.value,
        id: data.id || data.value,
      })),
    ];

    return (
      <div onMouseDown={e => e.stopPropagation()}>
        <MentionsInput
          className="mention"
          inputRef={forwardedRef}
          value={value}
          onChange={(fakeEvent, _, plainTextValue) => {
            onChange(plainTextValue);
          }}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          allowSpaceInQuery
        >
          <Mention
            trigger="@"
            data={data}
            displayTransform={(_, display) => `@${display}`}
            renderSuggestion={renderSuggestion}
          />
        </MentionsInput>
      </div>
    );
  }
);

MentionsTextarea.propTypes = propTypes;

export default MentionsTextarea;
