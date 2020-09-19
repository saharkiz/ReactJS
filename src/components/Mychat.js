import React, { } from 'react'
import { 
  CButton,
} from  '@coreui/react'


import { getLogin } from '../libs/utils.js';

//REUSABLE COMPONENT
class Mychat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false,
            msg : "",
            eventSource : undefined
        };
        this.myData = this.myData.bind(this);
        this.myChatSend = this.myChatSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      myData()
      {
        //console.log(getLogin());
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"serviceby":getLogin()});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        this.setState({showLoading: true  });
          fetch("https://vconlive.the-v.net/chat/open/"+ this.props.email, requestOptions)
          .then(response => response.text())
          .then(
                json => 
                {
                  
                  if (json.length !== 0){
                    console.log(json);
                    this.setState({data: JSON.parse(json)});
                    const objDiv = document.getElementById('msg_history');
                    objDiv.scrollTop = objDiv.scrollHeight;
                    this.timeout = setTimeout(() => {
                        this.setState({showLoading: false  });
                        const objDiv = document.getElementById('msg_history');
                        objDiv.scrollTop = objDiv.scrollHeight;
                    }, 500)
                  }
                }
          )
      }
      myChatSend()
      {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"email":this.props.email,"irid":this.props.id,"msg":this.state.msg,"from":getLogin()});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://vconlive.the-v.net/chat/add", requestOptions)
          .then(response => response.text())
          .then(result => 
            {
              this.myData();
              this.setState({msg: ""});
              const objDiv = document.getElementById('msg_history');
              objDiv.scrollTop = objDiv.scrollHeight;
            }
          )
          .catch(error => console.log('error', error));
      }
      handleChange(event)
      {
        this.setState({msg: event.target.value});
      }
      componentDidMount() {
        //wait 500 miliseconds
        setTimeout(() => {
          this.myData();
        }, 500);
        
      }
      componentWillUnmount() {
        if(this.state.eventSource)
          this.state.eventSource.close();
      }
      render() {
        if(this.state.eventSource)
        {this.state.eventSource.close();}
        this.state.eventSource = new EventSource("https://vconlive.the-v.net/live/chatreply/"+ this.props.email);
        
        this.state.eventSource.onmessage = e => {
          let newmsg = [JSON.parse(e.data)];
          let oldmsg = this.state.data.concat(newmsg);
          this.setState({data: newmsg})
          const objDiv = document.getElementById('msg_history');
          objDiv.scrollTop = objDiv.scrollHeight;
        }
        return <>
        <div className="container">
         <div className="messaging">
              <div className="inbox_msg">
                <div className="mesgs">
                  <div className="msg_history" id="msg_history">

                    {this.state.data.map((chat, index) => {
                    if (chat.moderator !== "moderator"){
                        return <div className="incoming_msg" key={index}>
                                  <div className="received_msg">
                                    <div className="received_withd_msg">
                                    <span className="chat_name"> {chat.irId} - {chat.email}</span>
                                      <p>{chat.msg}</p>
                                      <span className="time_date"> {chat.CreatedOn}</span></div>
                                  </div>
                                </div>
                      }
                      else{
                          return <div className="outgoing_msg"  key={index}>
                                    <div className="sent_msg">
                                    <span className="chat_name"> {chat.serviceBy}</span>
                                      <p>{chat.msg}</p>
                                      <span className="time_date"> {chat.CreatedOn}</span> </div>
                                  </div>
                      }
                      })}
                  </div>
                  <div className="type_msg">
                    <div className="input_msg_write">
                      <input type="text" className="write_msg" value={this.state.msg}  placeholder="Type a message" onChange={this.handleChange}/>
                      <button className="msg_send_btn" type="button" onClick={this.myChatSend}>></button>
                      <CButton color="info" className="px-4" onClick={this.myData}>Show All Chat</CButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  </>
      }
  }


  export default Mychat