import { h } from 'preact';
import '../styles/index.scss';
import { Outlet, Router, ReactLocation, Route } from '@tanstack/react-location';
import { Login, Application } from './pages';
import { useCallback, useState } from 'preact/hooks';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor, Transforms, Editor } from 'slate';

const routes: Route[] = [
  {
    children: [
      { path: `/`, element: <Application /> },
      { path: `login`, element: <Login /> },
    ],
  },
];

const initialValue = [
  {
    type: `paragraph`,
    children: [{ text: `A line of text in a paragraph.` }],
  },
];

const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props: any) => {
  return <p {...props.attributes}>{props.children}</p>;
};
const Yes = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props: any) => {
    console.log(props.element.type);
    switch (props.element.type) {
      case `code`:
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
          if (event.key === `\``) {
            event.preventDefault();
            // Determine whether any of the currently selected blocks are code blocks.
            const [match] = Editor.nodes(editor, {
              match: (n) => n.type === `code`,
            });
            // Toggle the block type depending on whether there's already a match.
            Transforms.setNodes(
              editor,
              { type: match ? `paragraph` : `code` },
              { match: (n) => Editor.isBlock(editor, n) },
            );
          }
        }}
      />
    </Slate>
  );
};

export function App() {
  const location = new ReactLocation();
  return (
    <Router location={location} routes={routes}>
      {/* <div style={{ background: '#333' }}>
        <Yes />
      </div> */}
      <Outlet />
    </Router>
  );
}
