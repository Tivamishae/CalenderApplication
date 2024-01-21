import { useEffect, useState } from "react";
import "./MessagesPageMessage.css";
import {
  differenceInDays,
  differenceInMinutes,
  differenceInHours,
  parse,
} from "date-fns";

const MessagesPageMessage = (props) => {
  const [iSentMessage, setISentMessage] = useState(
    props.message.sender === props.yourUserInformation.id
  );

  useEffect(() => {
    setISentMessage(props.message.sender === props.yourUserInformation.id);
  }, [props.message.messageId]);

  const calculateTimeSinceSentMessage = (messageDate, messageTime) => {
    const currentDate = new Date();
    const parsedMessageTimeAndDate = parse(
      messageDate + " " + messageTime,
      "yyyy-MM-dd HH-mm",
      new Date()
    );

    if (differenceInDays(currentDate, parsedMessageTimeAndDate) > 10) {
      return messageDate + " " + messageTime;
    } else if (differenceInDays(currentDate, parsedMessageTimeAndDate) > 0) {
      return (
        differenceInDays(currentDate, parsedMessageTimeAndDate).toString() +
        " day(s) ago"
      );
    } else if (differenceInHours(currentDate, parsedMessageTimeAndDate) > 0) {
      return (
        differenceInHours(currentDate, parsedMessageTimeAndDate).toString() +
        " hour(s) ago"
      );
    } else {
      return (
        differenceInMinutes(currentDate, parsedMessageTimeAndDate).toString() +
        " minute(s) ago"
      );
    }
  };

  return (
    <div
      className={
        iSentMessage ? "MessagesPageMessageYour" : "MessagesPageMessageTheir"
      }
    >
      <div className="MessagesPageMessageContainer">
        <div
          className={
            iSentMessage
              ? "YourMessagesPageMessageLeft"
              : "TheirMessagesPageMessageLeft"
          }
        >
          <div className="MessagesPageMessageTextContainer">
            <div>{props.message.message}</div>
          </div>
        </div>
        <div className="EmptyPartBelowMessage">
          <div>
            <div>
              {iSentMessage
                ? "You"
                : props.otherUserInformation.firstName +
                  " " +
                  props.otherUserInformation.surname}
            </div>
            <div>
              {calculateTimeSinceSentMessage(
                props.message.dateAndTime.date,
                props.message.dateAndTime.time
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPageMessage;
