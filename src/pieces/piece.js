export default class Piece {
  constructor(player, iconUrl, namePeace) {
    this.player = player;
    this.namePeace = namePeace;
    this.style = {
      backgroundImage: "url('" + iconUrl + "')",
      backgroundSize: "cover"
    };
  }

  getPlayer() {
    return this.player
  }
}