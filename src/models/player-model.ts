export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nacionality: string;
  position: string;
  age: number;
  statistics: {
    overall: number;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    psysical: number;
  };
}
