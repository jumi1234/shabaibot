import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../config.js';
import MessageParser from '../components/MessageParser';
import ActionProvider from '../components/ActionProvider';

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export default MyComponent;