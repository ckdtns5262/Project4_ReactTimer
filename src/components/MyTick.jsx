import React from 'react';
import './My.css'
import MyTime from './MyTime';

                                         // {} 자바스크립트 표현식(함수,수식)을 쓸수있음
//사용자 정의 태그                        // class를 className으로 사용해야함, id 속성 왠만하면 사용x
                                        //컴포넌트 이름은 대문자로 시작해야함
function MyTick() {                     //컴포넌트 하나는 1개의 function 으로 구성되어 있음  
  return (                              // return은 html 태그 하나에 여러가지 태그로 구성되어 있음                
      <>               
      <h2 className='myh2'>현재시간 :
      <MyTime/>
      </h2>
      </>
    
  );
}

export default MyTick;         // import , export default 해야함
                               // <img /> 무조건 태그를 닫아줘야 함