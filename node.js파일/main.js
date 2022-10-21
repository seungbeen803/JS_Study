// say라는 객체에 모듈에서 내보낸 것들은 포함하는 형식로 불러옴
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');

// sayHi를 hi로, sayBye를 bye로 이름을 바꿔서 가져오기
import { sayHi as hi, sayBye as bye } from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!