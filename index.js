import inquirer from 'inquirer';
const { program } = require('commander');

inquirer
  .prompt([
    {
      // 질문들을 정의하는 배열
      type: 'input', // 질문의 종류
      name: 'title', // 답변을 저장할 속성 이름
      message: 'html의 title을 무엇으로 하시겠습니까?', // 사용자에게 보여줄 메시지
    },
    {
      type: 'input',
      name: 'div root use or not',
      message: '최상위 div #root 태그 사용하시겠습니까?',
      choices: ['yes', 'no'],
    }
  ])
  .then((answers) => {
    // 사용자가 입력한 답변들을 처리하는 코드
    console.log('Answers:', answers)
  })
  .catch((error)=> {
    // 오류 처리 코드
  });