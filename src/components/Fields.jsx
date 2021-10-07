import React from 'react';

function TextField(props) {
  return (
    <div className={!props.isNotColumn
      ? "column"
      : "mb-4"}>
      <fieldset className="field">
        <label htmlFor={props.name} className="label">
          {props.label}
          {props.optional && <span className="is-muted">&nbsp;(Optional)</span>}
        </label>
        <input
          type="text"
          className="input"
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          pattern={props.pattern}
          name={props.name}
          id={props.name}
          onKeyDown={props.onKeyDown}/>
      </fieldset>
    </div>
  )
}

function Dropdown(props) {
  return (
    <div className={!props.isNotColumn
      ? "column"
      : ""}>
      <fieldset className="field">
        <label className="label" htmlFor={props.name}>
          {props.label}
        </label>
        <div className="select is-fullwidth">
          <select
            name={props.name}
            id={props.name}
            defaultValue={props.defaultValue
            ? props.defaultValue
            : "default"}>
            {props.noDefault
              ? ""
              : <option value="default">{props.defaultText
                  ? props.defaultText
                  : "Don't Change"}</option>}

            <option
              value={props.trueValue
              ? props.trueValue
              : "true"}>{props.trueText
                ? props.trueText
                : "Enabled"}{props.systemDefault === "true" && " (default)"}</option>
            <option
              value={props.falseValue
              ? props.falseValue
              : "false"}>{props.falseText
                ? props.falseText
                : "Disabled"}{props.systemDefault === "false" && " (default)"}</option>
            {props.option3Text && 
              <option
                value={props.option3Value}>{props.option3Text}{props.systemDefault === "option3" && " (default)"}</option>
            }
            {props.option4Text &&
              <option
                value={props.option4Value}>{props.option4Text}{props.systemDefault === "option4" && " (default)"}</option>
            }
          </select>
        </div>
      </fieldset>
    </div>
  )
}

function Checkbox(props) {
  return (
    <label htmlFor={props.name}>
      <input
        type="checkbox"
        className="checkbox mb-5"
        id={props.name}
        name={props.name}
        onClick={props.onClick}></input>
      {props.label}
    </label>
  )
}

function Textbox(props) {
  return (
    <label htmlFor={props.name} className="display-block mt-2 label">
      {props.label}
      <textarea
        name={props.name}
        id={props.name}
        className="textarea mt-1 mb-5"
        rows={props.rows}
        placeholder={props.placeholder}></textarea>
    </label>
  )
}

export {TextField, Dropdown, Checkbox, Textbox}
