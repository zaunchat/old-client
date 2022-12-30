import { Component } from 'preact';
import { h } from 'preact';
import Prism from 'prismjs';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import styles from '../styles/Sidebar/Chat.module.scss';

export class CodeEditor extends Component {
  state = {
    editor: withReact(createEditor()),
    value: [],
    code: ``,
  };

  onChange = ({ value }) => {
    this.setState({ code: value });
  };

  renderNode = (props) => {
    const { node, attributes, children } = props;
    if (node.type === `code`) {
      const code = node.text;
      const language = node.language;
      return (
        <pre {...attributes}>
          <code ref={(el) => Prism.highlightElement(el, false, language)}>
            {code}
          </code>
        </pre>
      );
    }
    return <pre {...attributes}>{children}</pre>;
  };

  // ...

  render() {
    return (
      <Slate editor={this.state.editor} value={this.state.value}>
        <Editable
          class={styles.rich}
          value={this.state.code}
          onChange={this.onChange}
          renderNode={this.renderNode}
        />
      </Slate>
    );
  }
}
