export default class Song{
	constructor(options) {
		if(options) {
			if(!options.newSong) throw new Error ('A song must have a newSong parameter');
			// this.id = generate unique id?
			this.songName = options.newSong.songName;
			this.songUrl = options.newSong.songUrl;
			// users will also have a set of songs
		}
		else{
			throw new Error ('No options provided to Song constructor');
		}
	}
}