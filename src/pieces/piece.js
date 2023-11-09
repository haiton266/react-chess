export default class Piece {
  constructor(player, iconUrl, namePeace) {
    this.player = player;
    this.namePeace = namePeace;
    this.style = { backgroundImage: "url('" + iconUrl + "')" };
  }

  getPlayer() {
    return this.player
  }
}