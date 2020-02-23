import React, { ReactElement } from 'react';
import { Button, Input, Card } from '@namespace/components';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Button title="Hello client" />
      <Input />
      <Card />
    </div>
  );
};

export default App;
