import './style.css';
import React from 'react';
import RecentChatsHeader from './RecentChatsHeader';
import MessageInput from './MessageInput';
// import DesktopBG from '../../../assets/desktop-bg.svg';
import SendersChat from '../../../components/SendersChat';
import ReceiversChat from '../../../components/ReceiversChat';

export default class RecentChatsContainer extends React.Component {
  render() {
    return (
      <div className="recent-chats-container"
        style={{
          overflowBlock: 'scroll',
          overflow: 'hidden'
        }}
      >
        <RecentChatsHeader />
        <div className="chat-view-section"
          // style={{
          //   backgroundImage: `url(${DesktopBG})`,
          //   width: '100%',
          //   height: '100%',
          //   backgroundAttachment: 'fixed',
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          //   marginRight: 'auto',
          //   marginLeft: 'auto'
          // }}
        >
          <div className="message-content-wrapper"
            style={{
              marginTop: '2em',
              display: 'grid',
              gridTemplateColumns: 'auto',
              rowGap: '4px'
            }}
          >
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /><SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /><SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /><SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <SendersChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />
            <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            /> <ReceiversChat
              message={"Hey there :D"}
              time_tag={"12:56 PM"}
            />

          </div>
        </div>
        <MessageInput />
      </div>
    )
  }
}