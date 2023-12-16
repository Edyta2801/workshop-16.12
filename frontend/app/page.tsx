import styles from './page.module.scss';

import { Button } from '@wa/common-ui';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <div id="welcome">
        <h1>
          <span> Hello there, </span>
          Welcome frontend 👋
        </h1>
      </div>
      <Button label="Click me!" />
    </div>
  );
}
