import React from 'react';

type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => <h1>Hello {props.name}!</h1>;

export default Greet;
