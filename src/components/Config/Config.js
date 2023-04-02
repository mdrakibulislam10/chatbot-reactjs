import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from '../LearningOptions/LearningOptions';
import LinkList from '../LinkList/LinkList';

const config = {
    botName: "LearningBot",
    initialMessages: [createChatBotMessage("Hi, I'm ChatbotReactJS here to help you. What do you want to learn? Feel free to ask anything.", {
        widget: "learningOptions",
    }),
    ],
    // ...,
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Introduction to JS",
                        url:
                            "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                        id: 1,
                    },
                    {
                        text: "Mozilla JS Guide",
                        url:
                            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                        id: 2,
                    },
                    {
                        text: "Frontend Masters",
                        url: "https://frontendmasters.com",
                        id: 3,
                    },
                ],
            },
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
}

export default config