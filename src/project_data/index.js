import Book_Finder from './Book_Finder';
import Chingu from './Chingu';
import Connect_4 from './Connect_4';
import Form_Creator from './Form_Creator';
import Project_Match from './Project_Match';
import Turtles_Tab from './Turtles_Tab';
import InclusiveMaps from './InclusiveMaps';
import TicTacToe from './TicTacToe';
import HttpServer from './HttpServer';
import Rebay from './Rebay';
import Focal from './Focal';
import HWDA from './HWDA';

const projects = new Map([
  ['hwda', HWDA],
  ['focal', Focal],
  ['rebay', Rebay],
  ['http-server', HttpServer],
  ['tic-tac-toe', TicTacToe],
  ['inclusive-maps', InclusiveMaps],
  ['chingu', Chingu],
  ['connect-4', Connect_4],
  ['book-finder', Book_Finder],
  ['form-creator', Form_Creator],
  ['project-match', Project_Match],
  ['turtle-tab', Turtles_Tab]
]);

export default projects;
