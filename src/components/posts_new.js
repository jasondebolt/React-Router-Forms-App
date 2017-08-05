import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderField(field) {
    //console.log(field.foo)
    return (
      <div className="form-group"> {
        /* field.input is an object which contains a bunch
        of different event handlers and a bunch of different props.
        Stuff like 'onChange, onBlur, onFocus' as well as the value of the
        intput. By doing the ..., we are saying that field.input is an object
        and we want all of the properties this object to be communicated as
        properts to the input tag. It's a little bit of fancy JSX that keeps
        us from having to write things like:
        <input
          onChange={field.input.onChange}
          onFocus={field.input.onFocus}
        />
      */}
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        {/*
          You can pass arbitrary values to the Field object and they will
          be accessible in the component as an attribute of the 'field' object
          within the component. See how {field.label} is used in 'renderField'
          above.
        */}
        <Field
          foo="FOO TITLE"
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          foo="FOO CATEGORIES"
          label="Categories"
          name="catagories"
          component={this.renderField}
        />
        <Field
          foo="FOO TAG"
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}


// Make sure that the string that you assign to the form property is unique.
// This is a helper that allow our redux form to communicate directly from
// our component to the reducer that we've already setup. I think that
// this just attaches a bunch of action creators to the component??
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew)
