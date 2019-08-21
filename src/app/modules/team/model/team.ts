import {Player} from '../../player/model/player';
import {Statistic} from '../../statistics/model/statistic';
import {Match} from '../../match/model/match';

export class Team {
id:number;
name:string;
players:Player[];
matches:Match[];
statistics:Statistic[];
}
