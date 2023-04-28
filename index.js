import inquirer from 'inquirer';
import { program } from 'commander';

// HTML 파일을 만드는 명령어
program
  .version('1.0.0')
  .description('HTML 파일 생성')
  // 터미널에서 입력한 명령어와 옵션을 파싱하고 해당 동작을 수행한다.
  .parse(process.argv);

// 사용자에게서 데이터를 받아오는 CLI
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
      name: 'isRoot',
      message: '최상위 div #root 태그 사용하시겠습니까?',
      default: true,
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

    const { title, isRoot, pTag } = answers;

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      ${isRoot ? '<div id="root">' : '<div>'}
      <p>${pTag}</p>
      </div>
    </body>
    </html>`
  })
  .catch((error)=> {
    // 오류 처리 코드
  });