import inquirer from 'inquirer';
import { program } from 'commander';

program
  .version('1.0.0')
  .description('HTML 파일 생성')
  .parse(process.argv);

inquirer
  // 질문들을 정의하는 배열
  .prompt([
    {
      type: 'input', // 질문의 종류
      name: 'title', // 답변을 저장할 속성 이름
      message: 'html의 title을 무엇으로 하시겠습니까?', // 사용자에게 보여줄 메시지
    },
    {
      type: 'confirm',
      name: 'div root use or not',
      message: '최상위 div #root 태그 사용하시겠습니까?',
    },
    {
      type: 'input',
      name: 'pTag',
      message: '본문<p> 태그 내용작성을 해주세요.'
    },
  ])
  // 사용자의 입력 데이터를 통해 HTML파일의 title 설정, 최상위 태그 사용 유무, HTML파일 본문 p 태그 내용을 반영하자.
  // HTML 파일을 만드는 명령어를 만들어보자.
  .then((answers) => {
    // 사용자가 입력한 답변들을 처리하는 코드
    console.log('Answers:', answers)

  })
  .catch((error)=> {
    // 오류 처리 코드
  });