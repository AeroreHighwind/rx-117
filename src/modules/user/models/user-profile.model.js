export class UserProfile {
  constructor(username, gender, faction, credits = 0, title = "", img = "") {
    this.username = username;
    this.gender = gender;
    this.faction = faction;
    this.title = title;
    this.credits = credits;
    this.img = img;
  }
}
