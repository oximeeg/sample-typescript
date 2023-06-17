import { Common } from './common';

const main = () => {
  const common = new Common();
  common.hello('World');

  let message: string = 'Hello World';
  console.log(message);
};

main();
