
// any additional code goes here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// any additional code goes here
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg_stage_3
		const bg_stage_3 = this.add.image(400, 300, "bg_stage_3");
		bg_stage_3.scaleX = 0.32;
		bg_stage_3.scaleY = 0.32;

		// retryscreen
		const retryscreen = this.add.container(0, 0);
		retryscreen.visible = false;

		// retry_logo
		const retry_logo = this.add.container(8, -34);
		retryscreen.add(retry_logo);

		// retry_logo
		const retrylogoImage = this.add.image(393, 209, "logo");
		retrylogoImage.scaleX = 0.5;
		retrylogoImage.scaleY = 0.5;
		retry_logo.add(retrylogoImage);

		// retrybutton
		const retrybutton = this.add.container(400, 369);
		retryscreen.add(retrybutton);

		// retrybuttonbg
		const retrybuttonbg = this.add.rectangle(2, 0.5, 128, 128);
		retrybuttonbg.scaleX = 2;
		retrybuttonbg.scaleY = 0.5;
		retrybuttonbg.isFilled = true;
		retrybutton.add(retrybuttonbg);

		// retrybuttontext
		const retrybuttontext = this.add.text(2, 0.5, "", {});
		retrybuttontext.setOrigin(0.5, 0.5);
		retrybuttontext.text = "Retry Game";
		retrybuttontext.setStyle({ "color": "#000000ff", "fontSize": "32px", "fontFamily": "RiverAdventurer", "stroke": "#000000ff" });
		retrybutton.add(retrybuttontext);

		// gameovertext
		const gameovertext = this.add.text(401, 296, "", {});
		gameovertext.setOrigin(0.5, 0.5);
		gameovertext.text = "Time's Up!\nYour Score: 230300";
		gameovertext.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "RiverAdventurer", "fontSize": "32px", "stroke": "#000000ff" });
		retryscreen.add(gameovertext);

		// gamescreen
		const gamescreen = this.add.container(0, 0);
		gamescreen.visible = false;

		// plastic_bin
		const plastic_bin = this.add.image(749, 545, "plastic_bin");
		plastic_bin.scaleX = 0.06;
		plastic_bin.scaleY = 0.06;
		gamescreen.add(plastic_bin);

		// organic_bin
		const organic_bin = this.add.image(575, 545, "organic_bin");
		organic_bin.scaleX = 0.06;
		organic_bin.scaleY = 0.06;
		gamescreen.add(organic_bin);

		// metal_bin
		const metal_bin = this.add.image(402, 545, "metal_bin");
		metal_bin.scaleX = 0.06;
		metal_bin.scaleY = 0.06;
		gamescreen.add(metal_bin);

		// paper_bin
		const paper_bin = this.add.image(228, 545, "paper_bin");
		paper_bin.scaleX = 0.06;
		paper_bin.scaleY = 0.06;
		gamescreen.add(paper_bin);

		// general_bin
		const general_bin = this.add.image(54, 545, "general_bin");
		general_bin.scaleX = 0.06;
		general_bin.scaleY = 0.06;
		gamescreen.add(general_bin);

		// scoretext
		const scoretext = this.add.text(20, 29, "", {});
		scoretext.setOrigin(0, 0.5);
		scoretext.text = "Score: 0000";
		scoretext.setStyle({
			"align": "left", "color": "#fff", "fontSize": "30px", "fontFamily": "RiverAdventurer", "stroke": "#000", "strokeThickness": 1
		});
		gamescreen.add(scoretext);

		// correctsorttext
		const correctsorttext = this.add.text(20, 52, "", {});
		correctsorttext.setOrigin(0, 0.5);
		correctsorttext.text = "Correct Sort: +100 Points";
		correctsorttext.setStyle({ "align": "left", "color": "#1CE900", "fontFamily": "RiverAdventurer", "fontSize": "21px", "stroke": "#000", "strokeThickness": 1});
		gamescreen.add(correctsorttext);

		// wrongsorttext
		const wrongsorttext = this.add.text(20, 74, "", {});
		wrongsorttext.setOrigin(0, 0.5);
		wrongsorttext.text = "Wrong Sort: -50 Points";
		wrongsorttext.setStyle({ "align": "left", "fontFamily": "RiverAdventurer", "color": "#EC1212", "fontSize": "21px", "stroke": "#000", "strokeThickness": 1});
		gamescreen.add(wrongsorttext);

		// timertext
		const timertext = this.add.text(790, 32, "", {});
		timertext.setOrigin(1, 0.5);
		timertext.text = "Timer 02:00";
		timertext.setStyle({ "align": "right", "color": "#fff", "fontSize": "25px", "fontFamily": "RiverAdventurer", "stroke": "#000", "strokeThickness": 1});
		gamescreen.add(timertext);

		// startscreen
		const startscreen = this.add.container(0, 0);

		// logo
		const logo = this.add.container(8, -34);
		startscreen.add(logo);

		// logo
		const logoImage = this.add.image(393, 209, "logo");
		logoImage.scaleX = 0.5;
		logoImage.scaleY = 0.5;
		logo.add(logoImage);

		// startbutton
		const startbutton = this.add.container(400, 310);
		startscreen.add(startbutton);

		// startbuttonbg
		const startbuttonbg = this.add.rectangle(2, 0.5, 128, 128);
		startbuttonbg.scaleX = 2;
		startbuttonbg.scaleY = 0.5;
		startbuttonbg.isFilled = true;
		startbutton.add(startbuttonbg);

		// startbuttontext
		const startbuttontext = this.add.text(2, 0.5, "", {});
		startbuttontext.setOrigin(0.5, 0.5);
		startbuttontext.text = "Start Game";
		startbuttontext.setStyle({ "color": "#000000ff", "fontSize": "32px", "fontFamily": "RiverAdventurer", "stroke": "#000000ff" });
		startbutton.add(startbuttontext);

		// lists
		const objectsList = [timertext, wrongsorttext, correctsorttext, scoretext, gameovertext, startbutton, retrybutton, general_bin, paper_bin, metal_bin, organic_bin, plastic_bin];
		const screensList = [startscreen, gamescreen, retryscreen];

		this.objectsList = objectsList;
		this.screensList = screensList;

		this.events.emit("scene-awake");
	}

	/** @type {Array<Phaser.GameObjects.Text|Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
	objectsList;
	/** @type {Phaser.GameObjects.Container[]} */
	screensList;

	/* START-USER-CODE */
	isGameStarted = false;
	isGameOver = false;
	score = 0;
	timer = 0;
	bins = ["general_bin", "paper_bin", "metal_bin", "organic_bin", "plastic_bin"];
	items = [{
		name: "blackbag_1",
		bin: "general_bin"
	},
	{
		name: "coffee_1",
		bin: "general_bin"
	},
	{
		name: "redcup_1",
		bin: "general_bin"
	},
	{
		name: "soda_can_1",
		bin: "metal_bin"
	},
	{
		name: "apple_1",
		bin: "organic_bin"
	},
	{
		name: "banana_1",
		bin: "organic_bin"
	},
	{
		name: "eggshell_1",
		bin: "organic_bin"
	},
	{
		name: "box_1",
		bin: "paper_bin"
	},
	{
		name: "newspaper_1",
		bin: "paper_bin"
	},
	{
		name: "plastic_bag_1",
		bin: "plastic_bin"
	},
	{
		name: "plastic_milk_1",
		bin: "plastic_bin"
	},
	{
		name: "plasticbottle_1",
		bin: "plastic_bin"
	}];
	randomItem = null;
	dragItem = null;
	binsGroup = null;
	randomItemGroup = null;

	// any additional code goes here

	create() {

		this.editorCreate();


		WebFont.load({
			custom: {
				families: ['RiverAdventurer']
			},
			active: function () {
				this.binsGroup = this.physics.add.staticGroup();
				this.binsGroup.add(this.objectsList[7]);
				this.binsGroup.add(this.objectsList[8]);
				this.binsGroup.add(this.objectsList[9]);
				this.binsGroup.add(this.objectsList[10]);
				this.binsGroup.add(this.objectsList[11]);

				this.randomItemGroup = this.physics.add.group();

				this.screensList.forEach((item, i) => {
					item.setDepth(5);
				});

				// MAKE ALL bins depth 0 and set names
				this.objectsList.forEach((item, i) => {
					item.setDepth(0);
					if (i > 6) {
						item.setName(this.bins[i - 7]);
					}
				});


				this.input.enabled = true;
				this.physics.world.setBounds(0, 0, 800, 600);
				this.physics.world.setBoundsCollision(false, false, false, true);


				// adding events
				this.objectsList[5].list[0].setInteractive();
				this.objectsList[5].list[0].on("pointerdown", (pointer) => {
					this.startGame();
				}, this);
				this.objectsList[5].list[0].on('pointerover', (pointer) => {
					this.input.setDefaultCursor('pointer');
					this.objectsList[5].list[0].setScale(2.1, 0.6);
				}, this);
				this.objectsList[5].list[0].on('pointerout', (pointer) => {
					this.input.setDefaultCursor('default');
					this.objectsList[5].list[0].setScale(2, 0.5);
				}, this);

				this.objectsList[6].list[0].setInteractive();
				this.objectsList[6].list[0].on("pointerdown", (pointer) => {
					this.retryGame();
				}, this);
				this.objectsList[6].list[0].on('pointerover', (pointer) => {
					this.input.setDefaultCursor('pointer');
					this.objectsList[6].list[0].setScale(2.1, 0.6);
				}, this);
				this.objectsList[6].list[0].on('pointerout', (pointer) => {
					this.input.setDefaultCursor('default');
					this.objectsList[6].list[0].setScale(2, 0.5);
				}, this);



				this.input.on("pointerdown", (pointer, targets) => {
					this.startDrag(pointer, targets);
				}, this)

				// add physics overlap
				this.physics.add.overlap(this.randomItemGroup, this.binsGroup, this.collisionHandler, null, this);

				// on touch boundary
				this.physics.world.on("worldbounds", (body) => {
					this.onBoundary(body);
				}, this);

			}.bind(this)
		});
	}

	startGame() {
		if (!this.isGameStarted) {
			this.isGameStarted = true;
			this.isGameOver = false;

			this.timer = 60; // CHANGE TIME HERE, TIME IN SECONDS
			this.score = 0;

			this.updateObjects();

			this.start();

			this.screensList[0].setVisible(false);
			this.screensList[1].setVisible(true);
			this.screensList[2].setVisible(false);
		}
	}

	retryGame() {
		if (!this.isGameStarted && this.isGameOver) {
			this.isGameStarted = true;
			this.isGameOver = false;

			this.timer = 60; // CHANGE TIME HERE AS WELL, TIME IN SECONDS
			this.score = 0;

			this.updateObjects();

			this.start();

			this.screensList[0].setVisible(false);
			this.screensList[1].setVisible(true);
			this.screensList[2].setVisible(false);
		}
	}

	collisionHandler(item1, item2) {
		if (!item1 || !item2) return;

		if (this.isGameStarted && !this.isGameOver && this.randomItem) {
			if ((item1.name === this.randomItem.name && item2.name === this.randomItem.bin) ||
				(item2.name === this.randomItem.name && item1.name === this.randomItem.bin)) {
				this.score += 100;

				// scale up the bin for 0.5 sec
				this.tweens.add({
					targets: (item1.name === this.randomItem.name) ? item2 : item1,
					scaleX: 0.07,
					scaleY: 0.07,
					duration: 500,
					ease: 'Power2',
					yoyo: true,
					repeat: 0
				});


				this.updateObjects();
				this.removeRandomItem();
				this.randomSelectItem();
			}
			else {
				// scale up the bin for 0.5 sec
				this.tweens.add({
					targets: (item1.name === this.randomItem.name) ? item2 : item1,
					scaleX: 0.07,
					scaleY: 0.07,
					duration: 500,
					ease: 'Power2',
					yoyo: true,
					repeat: 0
				});

				this.score -= 50;

				this.updateObjects();
				this.removeRandomItem();
				this.randomSelectItem();
			}
		}
	}

	onBoundary(body) {
		if (this.isGameStarted && !this.isGameOver && this.randomItem) {
			if (body.gameObject.name === this.randomItem.name) {
				this.score -= 50;
				this.updateObjects();
				this.removeRandomItem();
				this.randomSelectItem();
			}
		}
	}

	startDrag(pointer, targets) {
		if (targets.length === 0) return;
		if (this.randomItem === null) return;

		if (this.isGameStarted && !this.isGameOver) {
			var target = targets[0];
			if (this.randomItem && target && target.name === this.randomItem.name) {
				this.input.off("pointerdown", this.startDrag, this);
				this.dragItem = target;
				this.dragItem.body.setAllowGravity(false);
				this.dragItem.body.setVelocity(0, 0);
				this.input.setDefaultCursor('grabbing');
				this.input.on("pointermove", this.doDrag, this);
				this.input.on("pointerup", this.endDrag, this);

				// if cursor goes out of game area then end drag
				this.input.on("pointerout", (pointer) => {
					this.endDrag(pointer);
				}, this);
			}
		}
	}

	doDrag(pointer) {
		if (this.dragItem === null) return;

		if (this.dragItem) {
			this.dragItem.x = pointer.x;
			this.dragItem.y = pointer.y;
		}
	}

	endDrag(pointer) {
		if (this.dragItem === null) return;

		if (this.dragItem) {
			this.input.setDefaultCursor('default');
			this.input.on("pointerdown", this.startDrag, this);
			this.input.off("pointermove", this.doDrag, this);
			this.input.off("pointerup", this.endDrag, this);
			this.dragItem.body.setAllowGravity(true);
			this.dragItem = null;
		}
	}

	start() {
		// CLEAR ALL times
		this.time.removeAllEvents();

		// remove random item
		this.removeRandomItem();

		// new random item
		this.randomSelectItem();

		this.time.addEvent({
			delay: 1000,
			loop: true,
			callbackScope: this,
			callback: () => {
				this.timer--;
				this.updateObjects();
				if (this.timer <= 0) {
					// stop timer
					this.time.removeAllEvents();

					// end game
					this.endGame();
				}
			}
		})
	}

	randomSelectItem() {
		let randomIndex = Phaser.Math.Between(0, this.items.length - 1);
		this.randomItem = this.physics.add.image(Phaser.Math.Between(0, 760), Phaser.Math.Between(-200, 0), this.items[randomIndex].name.toString());

		let desiredWidth = 40; // desired width for all items
		let originalWidth = this.randomItem.width; // original width of the item
		let scaleFactor = desiredWidth / originalWidth; // calculate scale factor

		this.randomItem.setScale(scaleFactor); // apply the scale factor to both x and y

		this.randomItem.name = this.items[randomIndex].name;
		this.randomItem.bin = this.items[randomIndex].bin;

		this.randomItem.setOrigin(0.5, 0.5);
		this.randomItem.setInteractive();
		this.randomItem.setDepth(1);

		this.randomItemGroup.add(this.randomItem);

		// MAKE gravity
		this.randomItem.body.setAllowGravity(true);
		this.randomItem.body.setGravityY(50);
		this.randomItem.body.setCollideWorldBounds(true);
		this.randomItem.body.onWorldBounds = true;
	}


	convertTimeToString(time) {
		let minutes = Math.floor(time / 60);
		let seconds = time % 60;
		return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
	}

	updateObjects() {
		this.objectsList[0].text = "Time: " + this.convertTimeToString(this.timer);
		this.objectsList[3].text = "Score: " + this.score;
	}

	removeRandomItem() {
		// remove random item
		if (this.randomItem) {
			this.randomItem.destroy();
			this.randomItem = null;
		}

		if (this.dragItem) {
			this.dragItem = null;

			this.input.setDefaultCursor('default');
			this.input.on("pointerdown", this.startDrag, this);
		}
	}

	endGame() {
		this.isGameOver = true;
		this.isGameStarted = false;

		this.objectsList[4].text = `Time's Up!\nYour Score: ${this.score}`;

		this.removeRandomItem();

		this.screensList[0].setVisible(false);
		this.screensList[1].setVisible(false);
		this.screensList[2].setVisible(true);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// any additional code goes here
