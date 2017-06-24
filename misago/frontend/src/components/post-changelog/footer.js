// jshint ignore:start
import React from 'react';
import Button from 'misago/components/button';

export default class extends React.Component {
  onClick = () => {
    this.props.revertEdit(this.props.edit.id);
  }

  render() {
    if (!this.props.canRevert) return null;

    return (
      <div className="modal-footer visible-xs-block">
        <Button
          className="btn-default btn-sm btn-block"
          disabled={this.props.disabled}
          onClick={this.onClick}
          title={gettext("Revert post to state from before this edit.")}
        >
          {gettext("Revert")}
        </Button>
      </div>
    )
  }}