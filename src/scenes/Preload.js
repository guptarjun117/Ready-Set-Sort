
// any additional code goes here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// any additional code goes here
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// bg_stage_3
		const bg_stage_3 = this.add.image(400, 300, "bg_stage_3");
		bg_stage_3.scaleX = 0.32;
		bg_stage_3.scaleY = 0.32;

		// progress
		const progress = this.add.text(393, 300, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "color": "#000", "fontFamily": "RiverAdventurer", "fontSize": "30px", "stroke": "#000" });

		// logo
		const logo = this.add.container(0, 0);

		// logo
		const logoImage = this.add.image(393, 209, "logo");
		logoImage.scaleX = 0.5;
		logoImage.scaleY = 0.5;
		logo.add(logoImage);

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// any additional code goes here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// any additional code goes here
