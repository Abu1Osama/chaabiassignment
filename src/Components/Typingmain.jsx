import React, { useEffect, useState } from "react";
import "../Styles/Typingmain.css";
import { Link, useNavigate } from "react-router-dom";

function Typingmain() {
  let data = [
    "Recently, an exhibition Building A New India was held in the capital. It was organized by the Ministry of Information and Broadcasting, Government of India. The exhibition was set up in the Triveni Kala Sangam. The chief exhibits were photographs, novels, some sculptures by Indian modern artists presenting Indian cultural inheritance. First of all, I visited the general section of the exhibition where different charts and photographs depicting India’s development in various fields were set. Most impressive photographs among these were those showing India’s nuclear development. ",
    "A teacher is called builder of the nation. The profession of teaching needs men and women with qualities of head and heart. There are many teachers in our school and a large number of teachers among them are highly qualified. I have great respect for all of them. Yet I have a special liking for Miss Y. Miss Y is a woman of great principles. She is jewel among all the teachers. Almost all the students respect her. She teaches us English. She is quite at home in this subject. She takes keen interest in teaching students. Simple living and high thinking is her motto. ",
    "Books are indeed never failing friends of man. For a mature mind, reading is the greatest source of pleasure and solace to distressed minds. The study of good books ennobles us and broadens our outlook. Therefore, the habit of reading should be cultivated. A student should never confine himself to his schoolbooks only. He should not miss the pleasure locked in the classics, poetry, drama, history, philosophy etc. We can derive benefit from other’s experiences with the help of books. The various sufferings, endurance and joy described in books enable us to have a closer look at human life. They also inspire us to face the hardships of life courageously. Nowadays there are innumerable books and time is scarce. ",
    "I am always scolded by my parents. But one day I was severely scolded by my English teacher. She infect teaches well. But that day, I could not resist the temptation that an adventure of Nancy Drew offered. While she was teaching, I was completely engrossed in reading that book. Nancy Drew was caught in the trap laid by some smugglers and it was then when I felt a light tap on my bent head. The teacher had caught me red handed. She scolded me then and there and insulted me in front of the whole class. I was embarrassed. My cheeks burned being guilty conscious. When the class was over, I went to the teacher to apologize. When she saw that I had realized my mistake.",
    "A frieze above the A frieze above the",
  ];
  // let randomindex=Math.floor(Math.random()*(((data.length-1)+1)))

  const [randomindex, setRandomindex] = useState(
    Math.floor(Math.random() * (data.length - 1 + 1))
  );
  let str = data[randomindex].split("");
  let rv = str.shift();
  let str2 = str;
  const [text, setText] = useState(str);
  const [customtext, setCustomtext] = useState("");
  const [showtext, setShowText] = useState(text.join(""));
  const [currentposition, setCurrentposition] = useState(rv);
  const [wrongcount, setWrongcount] = useState(0);
  const [wordcount, setWordcount] = useState(0);
  const [timer, settimer] = useState(1);
  const [starttest, setStarttest] = useState(true);
  const [mistake, setmistake] = useState(false);
  const [showresult, setShowresult] = useState(false);
  const navigate = useNavigate();

  if (starttest == false && timer < 60) {
    setTimeout(() => {
      settimer(timer + 1);
    }, 1000);
  }

  useEffect(() => {
    if (timer === 60) {
      // Reset all the necessary state variables here
      setRandomindex(Math.floor(Math.random() * (data.length - 1 + 1)));
      let str = data[randomindex].split("");
      let rv = str.shift();
      let str2 = str;
      setText(str);
      setCustomtext("");
      setShowText(str.join(""));
      setCurrentposition(rv);
      setWrongcount(0);
      setWordcount(0);
      settimer(1);
      setStarttest(true);
      setmistake(false);
      setShowresult(false);
      setShowresult(true);
    }
  }, [timer]);

  const handleChange = (e) => {
    let char = e.target.value;

    if (char[char.length - 1] == currentposition) {
      setWordcount(wordcount + 1);

      let arr = text;
      let removeChar = currentposition;
      let pos = arr.shift();
      setCustomtext(customtext + removeChar);
      setText(arr);
      setShowText(text.join(""));
      setCurrentposition(pos);
      setmistake(false);
    } else {
      setWrongcount(wrongcount + 1);
      setmistake(true);
    }
    console.log(char, char[char.length - 1]);
  };
  // useEffect(() => {
  //   let arr = text;
  //   let removeChar = arr.splice(0,1);
  //   console.log(removeChar)
  //   setText(arr);
  //   setCurrentposition(removeChar);
  //   console.log(currentposition)
  //   setShowText(text.join(""));
  // }, []);
  const handletype = () => {
    setStarttest(false);
  };
  const startagain = () => {
    setShowresult(false);
  };

  return (
    <div>
      <div id="btn_top">
        <a className="btn_top btn_top1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32
         32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
              fill="#427067"
            />
          </svg>
          <span>WPM</span>
          <span className="sam">
            {starttest ? "0" : Math.round(wordcount / 5 / (timer / 60))}
          </span>
        </a>
        <a className="btn_top btn_top2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 512 512"
          >
            <path
              d="M464 256A208 208 0 1 1 48 256a208 208 
            0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0
             0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.
             9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
              fill="#5D6C00"
            />
          </svg>
          <span>Timer</span>
          <span className="sam">{60 - timer}</span>
        </a>
        <a className="btn_top btn_top4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 
            256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a
            32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              fill=" #004c6c"
            />
          </svg>
          <span>Accuracy</span>
          <span className="sam">{wrongcount}%</span>
        </a>
        <a onClick={handletype} className="btn_top btn_top3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 512 512"
          >
            <path
              d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"
              fill="#a13000"
            />
          </svg>
          <span>Start</span>
        </a>
      </div>

      {showresult ? (
        <div style={{ display: showresult }} className="show-result">
        <div className="result-div">
        <strong>Word perminute:  {Math.round(wordcount / 5 / (timer / 60))}</strong>{" "}
          <strong>Accuracy rate: 20%</strong>
        </div>
          <button onClick={startagain}>Start Test Again</button>
        </div>
      ) : starttest ? (
        ""
      ) : (
        <div className="main-section">
          <div className="content-section">
            <div className="data">
              <div>
                <h3>
                  <span style={{ color: "green" }}>{customtext}</span>
                  <span
                    style={{
                      textDecoration: "underline",
                      color: mistake ? "red" : "black",
                    }}
                  >
                    {currentposition}
                  </span>
                  <span style={{ color: "black" }}>
                    {text.length == 0 ? "" : showtext}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="inp">
            <textarea
              onChange={(e) => handleChange(e)}
              cols="70"
              rows="10"
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
}

export default Typingmain;
