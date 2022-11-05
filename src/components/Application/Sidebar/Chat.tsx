import { h } from 'preact';
import styles from '../styles/Sidebar/Chat.module.scss';
import { Prism } from '../../../utils/Prism';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { css } from '@emotion/css';
import {
  ChatDocumentIcon,
  ChatVoiceMessageIcon,
} from '../../assets/Application/Chat';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { TextChannelFilledIcon } from '../../assets/Application/Channels';

import { Slate, Editable, withReact } from 'slate-react';
import { createEditor, Transforms, Editor, Text } from 'slate';

const initialValue = [
  {
    type: `paragraph`,
    children: [{ text: `A line of text in a paragraph.` }],
  },
];

const Leaf = ({ attributes, children, leaf }) => {
  return (
    <span
      {...attributes}
      className={css`
        font-weight: ${leaf.bold && `bold`};
        font-style: ${leaf.italic && `italic`};
        text-decoration: ${leaf.underlined && `underline`};
        ${leaf.title &&
        css`
          display: inline-block;
          font-weight: bold;
          font-size: 20px;
          margin: 20px 0 10px 0;
        `}
        ${leaf.list &&
        css`
          padding-left: 10px;
          font-size: 20px;
          line-height: 10px;
        `}
      ${leaf.hr &&
        css`
          display: block;
          text-align: center;
          border-bottom: 2px solid #ddd;
        `}
      ${leaf.blockquote &&
        css`
          display: inline-block;
          border-left: 2px solid #ddd;
          padding-left: 10px;
          color: #aaa;
          font-style: italic;
        `}
      ${leaf.code &&
        css`
          font-family: monospace;
          background-color: #eee;
          padding: 3px;
        `}
      `}
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

    const getLength = (token) => {
      if (typeof token === `string`) {
        return token.length;
      } else if (typeof token.content === `string`) {
        return token.content.length;
      } else {
        return token.content.reduce((l, t) => l + getLength(t), 0);
      }
    };

    const tokens = Prism.tokenize(node.text, Prism.languages.markdown);
    let start = 0;

    for (const token of tokens) {
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
          switch (event.key) {
            case `\``: {
              event.preventDefault();
              const [match] = Editor.nodes(editor, {
                match: (n) => n.type === `code`,
              });
              Transforms.setNodes(
                editor,
                { type: match ? null : `code` },
                { match: (n) => Editor.isBlock(editor, n) },
              );
              break;
            }

            case `b`: {
              event.preventDefault();
              Transforms.setNodes(
                editor,
                { bold: true },
                { match: (n) => Text.isText(n), split: true },
              );
              break;
            }
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
