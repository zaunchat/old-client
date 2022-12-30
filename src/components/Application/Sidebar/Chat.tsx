import { h } from 'preact';
import styles from '../styles/Sidebar/Chat.module.scss';
import { Prism } from '../../../utils/Prism';
import { css } from '@emotion/css';
import {
  ChatDocumentIcon,
  ChatVoiceMessageIcon,
} from '../../assets/Application/Chat';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { TextChannelFilledIcon } from '../../assets/Application/Channels';

import { Slate, Editable, withReact } from 'slate-react';
import { createEditor, Text } from 'slate';
import { CodeEditor } from './CodeBlock';

const initialValue = [
  {
    type: `paragraph`,
    children: [{ text: `\`\`\`js\nconsole.log("test")\`\`\`` }],
  },
];

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.code) {
    return (
      <span {...attributes} className={`token ${leaf.prism_token}`}>
        <pre className="code-block" {...attributes}>
          <code>{children}</code>
        </pre>
      </span>
    );
  }
  return (
    <span
      {...attributes}
      className={`${leaf.code && leaf.prism_token}
      ${css(`
    font-weight: ${leaf.bold && `bold`};
    font-style: ${leaf.italic && `italic`};
    text-decoration: ${leaf.underlined && `underline`};
    ${
      leaf.code &&
      css`
        width: 100%;
        background-color: red;
        /* font-family: monospace; */
      `
    }
    ${
      leaf.title &&
      css`
        display: inline-block;
        font-weight: bold;
        font-size: 20px;
        margin: 20px 0 10px 0;
      `
    }
    ${
      leaf[`url-reference`] &&
      css`
        background-color: red;
        display: inline-block;
        font-weight: bold;
        font-size: 20px;
        margin: 20px 0 10px 0;
      `
    }
    ${
      leaf.list &&
      css`
        padding-left: 10px;
        font-size: 20px;
        line-height: 10px;
      `
    }
  ${
    leaf.hr &&
    css`
      display: block;
      text-align: center;
      border-bottom: 2px solid #ddd;
    `
  }
  ${
    leaf.blockquote &&
    css`
      display: inline-block;
      border-left: 2px solid #ddd;
      padding-left: 10px;
      color: #aaa;
      font-style: italic;
    `
  }`)}`}
    >
      {children}
    </span>
  );
};

function RichEditor() {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props: any) => {
    console.log(props.element.type);
    switch (props.element.type) {
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const decorate = useCallback(([node, path]) => {
    const ranges = [];
    if (!Text.isText(node)) {
      return ranges;
    }

    const getLength = (token: any) => {
      if (typeof token === `string`) {
        return token.length;
      } else if (typeof token.content === `string`) {
        return token.content.length;
      } else {
        return token.content.reduce((l, t) => l + getLength(t), 0);
      }
    };
    const tokens = Prism.tokenize(node.text, Prism.languages.markdown);
    console.log(tokens);
    let start = 0;

    for (const token of tokens) {
      console.log(token.type);
      const length = getLength(token);
      const end = start + length;

      if (typeof token !== `string`) {
        ranges.push({
          [token.type]: true,
          anchor: { path, offset: start },
          focus: { path, offset: end },
        });
      }

      start = end;
    }

    return ranges;
  }, []);

  const DefaultElement = (props: any) => {
    return <div {...props.attributes}>{props.children}</div>;
  };

  const [value, setValue] = useState(initialValue);
  const [selection, setSelection] = useState();

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        class={styles.rich}
        value={value}
        selection={selection}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        decorate={decorate}
        onChange={(value, selection) => {
          setSelection(selection);
          setValue(value);
        }}
        onKeyDown={(event: any) => {
          if (!event.ctrlKey) {
            return;
          }
        }}
      />
    </Slate>
  );
}

export function ChatSidebar() {
  const bottomRef = useRef(null);
  const [arr, setArr] = useState<string[]>([]);
  const [content, setContent] = useState(``);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: `smooth` });
  }, [arr]);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <TextChannelFilledIcon w={`20`} />
          <div className={styles.divider} />
          <div>Title</div>
        </div>
      </div>
      <div className={styles.area}>
        <div className={styles.white_space} />
        <div className={styles.messages}>
          <div className={styles.divider}>
            <div>NEW</div>
            <span />
          </div>
          {arr.map((t, i) => (
            <div
              key={i}
              ref={i == arr.length - 1 ? bottomRef : undefined}
              className={styles.message}
            >
              <img src="https://cdn.discordapp.com/avatars/456091385066553355/cf62b15be122834319756e88c75ce3d8.webp?size=96" />
              <div className={styles.wrapper}>
                <div className={styles.username}>Mr.Kasper</div>
                <div className={styles.content}>{t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.input}>
        <RichEditor />
        <div className={styles.buttons}>
          <div className={styles.wrapper}>
            <div>
              <ChatVoiceMessageIcon />
            </div>
            <div>
              <ChatDocumentIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
