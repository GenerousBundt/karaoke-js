export default class User{
	constructor(options) {
		if(options) {
			this.authUserId = options.uid;
			this.user = 'true';
			this.admin = options.isAdmin || 'false';
			this.email = options.email;
			this.stageName = options.displayName || null;
			this.name = options.fullName || null;
			this.photoUrl = options.photoUrl || null;
			this.songs = options.songs || [];
		}
	}
}