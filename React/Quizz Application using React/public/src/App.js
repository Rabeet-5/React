import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([
    {
      numb: 1,
      question: "Murgi Pehly Aie ya Phr Anda?",
      answer: "Bhar m jaye Jo bhi ayi",
      options: [
        "Anda",
        "Murgi",
        "Bhar m jaye Jo bhi ayi",
        "Mallom Krlonga Bhai Bs Kr",
      ],
    },
    {
      numb: 2,
      question: "Dunya ki sbse Purani Currency Konsi hen ?",
      answer: "British Pound",
      options: [
        "British Pound",
        "US Dollar",
        "Euro",
        "Nhi Pta Pedaishi Jahil hu",
      ],
    },
    {
      numb: 3,
      question: "Ek kilo Shehed Bnany k lye Makhi Kitny Pholo Ka rass Chosti hen ?",
      answer: "20 Lakh",
      options: [
        "20 Lakh",
        "10 Lakh",
        "15 Lakh",
        "Nhi Pta Pedaishi Jahil hu",
      ],
    },
    {
      numb: 4,
      question: "Us Fruit ka name Btaye jisy Khany se Bacchy Beautiful Peda Hoty hen ?",
      answer: "Mango ",
      options: [
        "Mango",
        "Apple",
        "Grapes",
        "Jitna Bhi Khila lo Meri Shakal pr Hi jayega ",
      ],
    },
    {
      numb: 5,
      question: "Wo konsa Janwar he Jisky 2 Dimag hen?",
      answer: "bandar",
      options: [
        "M khud ek janwar se kam Nhi ",
        "bandar",
        "Zarafa",
        "nevla",
      ],
    },
    {
      numb: 6,
      question: "Wo konsi Halat hen Jb Husband ka Apni Biwi ko Jhot bolna Lazmi hen ?",
      answer: "jb wo naraz hogai ho",
      options: [
        " jb wo naraz hogai ho",
        "Jb wo extra Kharchy Krwa rhi ho",
        "Jb usy kahi jana ho or apky under himmat na ho rhi ho ",
        "Humy kia Hum to Single hi marengy !",
      ],
    },
    {
      numb: 6,
      question: "Wo konsi Halat hen Jb Husband ka Apni Biwi ko Jhot bolna Lazmi hen ?",
      answer: "jb wo naraz hogai ho",
      options: [
        " jb wo naraz hogai ho",
        "Jb wo extra Kharchy Krwa rhi ho",
        "Jb usy kahi jana ho or apky under himmat na ho rhi ho ",
        "Humy kia Hum to Single hi marengy !",
      ],
    },
  ]);
  const [index,setIndex] = useState(0);
  const [score,setScore] = useState(1);
  const [remarks,setremarks] = useState(false);
  const [questionNos,setquestionNos] = useState(0) ;

  const checkAnswer = (a,b)=>{
          console.log("userselected" ,a)
          console.log(b)

          if(a===b){
            setScore(score + 1)
            console.log(score)
          }

          if(index + 1 === questions.length){
            setremarks(true)
          }
          setIndex(index + 1)
        }
        if(index + 1 == questions.length){
            return (
              <div className="container border result-Div">
                <div className="row">
                  <div className="col-md-12 text-center bg-dark w-50 ">
                    <div className="main-name p-5 m-5">
                    <h1>Congratulations  ! <br /> Your Total Score is {score}</h1>
                    </div>
                  </div>
                </div>
              </div>
            )
        }

        

  return (

    <div>
      <header>
        {<div className="container-fluid text-center w-100 main-div p-3 main-div ">
          <div className="div-header">
              <div className="main-heading m-4">
                <h1>React Quizz Application</h1>
              </div>
          </div>
            <div className="main-content border rounded m-3 p-3">
              <div className="row">
                <div className="col-md-12 text-center  ">
                <span className='btn button m-3 py-2'>{`Question ${index + 1}  of ${questions.length}`}</span>

                  <h2 className='m-3 p-2'>{questions[index].question}</h2>

                  {questions[index].options.map((x,i)=>{
                    return(
                    <span key={i} onClick={()=> checkAnswer (x,questions[index].answer)} 
                    className='m-3 p-2 d-block btn button '>{x}</span>)

                  })}

                </div>
              </div>
            </div>
        </div>
      }
    </header>
  </div>
  );
};
export default App;