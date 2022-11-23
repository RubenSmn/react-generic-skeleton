import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { TextSkeleton } from '../src/skeletons/TextSkeleton';

const App = () => {
  return (
    <div>
      <TextSkeleton>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        doloribus cum voluptas repellendus odit rerum qui excepturi deleniti,
        magnam aperiam distinctio dignissimos sapiente mollitia est iure. Ipsam
        autem odit aspernatur!
      </TextSkeleton>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
