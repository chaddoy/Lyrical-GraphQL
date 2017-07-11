import React, { Component } from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
  constructor (props) {
    super(props);

    this.state = { title: '' };
  }

  onSubmit (e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        title : this.state.title
      }
    })
  }

  render () {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="title">Song Title:</label>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
