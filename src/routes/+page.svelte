<script lang="ts">
	// cat images
	const benji_chilling = new URL('../../static/images/benji_bed_solo.jpg', import.meta.url).href;
	const franklin_whiskey = new URL('../../static/images/cats/franklin.jpg', import.meta.url).href;
	const two_rug = new URL('../../static/images/cats/two_rug.jpg', import.meta.url).href;
	// lina + cat images
	const snuggle_chair = new URL('../../static/images/benji_snuggle.jpg', import.meta.url).href;
	const snuggle_bed = new URL('../../static/images/benji_snuggle1.jpg', import.meta.url).href;
	const franklin_snuggle = new URL('../../static/images/franklin_snuggle.jpg', import.meta.url)
		.href;
	// lina + me :)
	const teletubbies = new URL('../../static/images/us/teletubbies.jpg', import.meta.url).href;
	const wicked = new URL('../../static/images/us/wicked.jpg', import.meta.url).href;
	const dinner = new URL('../../static/images/us/dinner.jpg', import.meta.url).href;
	const yellow_dance = new URL('../../static/images/yellow4.jpg', import.meta.url).href;
	// wedding images
	const blue = new URL('../../static/images/weddings/blue3.jpg', import.meta.url).href;
	const orange = new URL('../../static/images/weddings/orange1.jpg', import.meta.url).href;
	const poloroid = new URL('../../static/images/weddings/poloroid.jpg', import.meta.url).href;
	const yellow = new URL('../../static/images/weddings/yellow1.jpg', import.meta.url).href;

	class Section {
		id: number;
		hide: boolean;
		slide_out: boolean;
		slide_in: boolean;
		image_1: boolean = false;
		image_2: boolean = false;
		image_3: boolean = false;
		image_4: boolean = false;
		image_5: boolean = false;

		constructor(id: number, hide: boolean, slide_out: boolean, slide_in: boolean) {
			this.id = id;
			this.hide = hide;
			this.slide_out = slide_out;
			this.slide_in = slide_in;
		}
	}

	let section1 = new Section(1, false, false, false);
	let section2 = new Section(2, true, false, false);
	let section3 = new Section(3, true, false, false);
	let section4 = new Section(4, true, false, false);
	let section5 = new Section(5, true, false, false);
	let section6 = new Section(6, true, false, false);
	let section7 = new Section(7, true, false, false);
	let section8 = new Section(8, true, false, false);
	// Red button handling
	let no_button_shake = false;
	let no_counter = 0;
	let hide_no_text = true;
	let hide_no_button = false;
	let no_text = 'Hey!!!';

	// dynamic height based on screen size
	let innerWidth = 0;
	let innerHeight = 0;
	$: size_condition = innerWidth * 1.33 <= innerHeight;

	function reset() {
		section1 = new Section(1, false, false, false);
		section2 = new Section(2, true, false, false);
		section3 = new Section(3, true, false, false);
		section4 = new Section(4, true, false, false);
		section5 = new Section(5, true, false, false);
		section6 = new Section(6, true, false, false);
		section7 = new Section(7, true, false, false);
		section8 = new Section(8, true, false, false);

		// Reset these
		no_button_shake = false;
		no_counter = 0;
		hide_no_text = true;
		hide_no_button = false;
		no_text = 'Hey!!!';
	}

	// just hard coding this because idk how any of this works
	function first_transition() {
		console.log('To years page');
		section1.slide_out = true;

		if (!section1.hide) {
			setTimeout(() => {
				section1.hide = true;
			}, 1000);
		}
		section2.hide = false;
		section2.slide_in = true;
	}

	function second_transition() {
		console.log('To cats page');
		section2.slide_out = true;

		if (!section2.hide) {
			setTimeout(() => {
				section2.hide = true;
			}, 1000);
		}
		if (!section3.image_1) {
			setTimeout(() => {
				section3.image_1 = true;
			}, 1200);
		}
		if (!section3.image_2) {
			setTimeout(() => {
				section3.image_2 = true;
			}, 1300);
		}
		if (!section3.image_3) {
			setTimeout(() => {
				section3.image_3 = true;
			}, 1400);
		}
		section3.hide = false;
		section3.slide_in = true;
	}

	function third_transition() {
		console.log('To more cats');
		section3.slide_out = true;

		if (!section3.hide) {
			setTimeout(() => {
				section3.hide = true;
				section3.image_1 = false;
				section3.image_2 = false;
				section3.image_3 = false;
			}, 1000);
		}
		if (!section4.image_1) {
			setTimeout(() => {
				section4.image_1 = true;
			}, 1200);
		}
		if (!section4.image_2) {
			setTimeout(() => {
				section4.image_2 = true;
			}, 1300);
		}
		if (!section4.image_3) {
			setTimeout(() => {
				section4.image_3 = true;
			}, 1400);
		}
		section4.hide = false;
		section4.slide_in = true;
	}

	function fourth_transition() {
		console.log('to as do i');
		section4.slide_out = true;

		if (!section4.hide) {
			setTimeout(() => {
				section4.hide = true;
				section4.image_1 = false;
				section4.image_2 = false;
				section4.image_3 = false;
			}, 1000);
		}
		if (!section5.image_1) {
			setTimeout(() => {
				section5.image_1 = true;
			}, 1200);
		}
		if (!section5.image_2) {
			setTimeout(() => {
				section5.image_2 = true;
			}, 1300);
		}
		if (!section5.image_3) {
			setTimeout(() => {
				section5.image_3 = true;
			}, 1400);
		}
		if (!section5.image_4) {
			setTimeout(() => {
				section5.image_4 = true;
			}, 1400);
		}
		section5.hide = false;
		section5.slide_in = true;
	}

	function fifth_transition() {
		console.log('to weddings');
		section5.slide_out = true;

		if (!section5.hide) {
			setTimeout(() => {
				section5.hide = true;
				section5.image_1 = false;
				section5.image_2 = false;
				section5.image_3 = false;
				section5.image_4 = false;
			}, 1000);
		}
		if (!section6.image_1) {
			setTimeout(() => {
				section6.image_1 = true;
			}, 1200);
		}
		if (!section6.image_2) {
			setTimeout(() => {
				section6.image_2 = true;
			}, 1300);
		}
		if (!section6.image_3) {
			setTimeout(() => {
				section6.image_3 = true;
			}, 1400);
		}
		if (!section6.image_4) {
			setTimeout(() => {
				section6.image_4 = true;
			}, 1400);
		}
		section6.hide = false;
		section6.slide_in = true;
	}

	function sixth_transition() {
		console.log('to question');
		section6.slide_out = true;

		if (!section6.hide) {
			setTimeout(() => {
				section6.hide = true;
				section6.image_1 = false;
				section6.image_2 = false;
				section6.image_3 = false;
				section6.image_4 = false;
			}, 1000);
		}
		section7.hide = false;
		section7.slide_in = true;
	}

	function seventh_transition() {
		console.log('end scene');
		section7.slide_out = true;

		if (!section7.hide) {
			setTimeout(() => {
				section7.hide = true;
			}, 1000);
		}
		section8.hide = false;
		section8.slide_in = true;
	}

	function shake_button() {
		no_counter += 1;
		no_button_shake = true;
		setTimeout(() => {
			no_button_shake = false;
		}, 1000);
		if (no_counter > 0) {
			hide_no_text = false;
		}
		if (no_counter > 1) {
			no_text = 'Cut it out!!';
		}
		if (no_counter > 2) {
			no_text = ':(';
		}
		if (no_counter > 3) {
			hide_no_button = true;
			no_text = 'No choice now!';
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="h-screen flex space-x-5 justify-center items-center w-full">
	<div
		id="section1"
		class="absolute flex space-x-5 justify-center items-center"
		class:animate-slide-out={section1.slide_out}
		class:invisible={section1.hide}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">oh, hey</h1>
		</div>
		<div class="space-y-5 text-center">
			<div class="animate-bounce variant-filled-secondary rounded-full">
				<button on:click={() => first_transition()} class="w-full">Click me!</button>
			</div>
			<p>(You should really click it)</p>
		</div>
	</div>

	<div
		id="section2"
		class="absolute flex space-x-5 justify-center items-center min-w-full"
		class:animate-slide-in={section2.slide_in}
		class:invisible={section2.hide}
		class:animate-slide-out={section2.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">So it's been a couple years now...</h1>
			<div class="variant-filled-secondary rounded-full">
				<button on:click={() => second_transition()} class="w-full">Almost three?!</button>
			</div>
		</div>
	</div>

	<div
		id="section3"
		class="absolute flex space-x-5 justify-center items-center"
		class:animate-slide-in={section3.slide_in}
		class:invisible={section3.hide}
		class:animate-slide-out={section3.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">With a couple of cats</h1>
			<div class="variant-filled-secondary rounded-full">
				<button on:click={() => third_transition()} class="w-full">Aren't they something</button>
			</div>
		</div>
	</div>
	<img
		class="absolute top-10 left-0 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section3.image_1}
		class:invisible={!section3.image_1}
		class:animate-slide-out={section3.slide_out}
		alt="benji"
		src={benji_chilling}
	/>
	<img
		class="absolute top-10 right-0 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section3.image_2}
		class:invisible={!section3.image_2}
		class:animate-slide-out={section3.slide_out}
		alt="franklin"
		src={franklin_whiskey}
	/>
	<img
		class="absolute bottom-5 left-15 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section3.image_3}
		class:invisible={!section3.image_3}
		class:animate-slide-out={section3.slide_out}
		alt="two_rug"
		src={two_rug}
	/>

	<div
		id="section4"
		class="absolute flex space-x-5 justify-center items-center"
		class:animate-slide-in={section4.slide_in}
		class:invisible={section4.hide}
		class:animate-slide-out={section4.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">Who DEFINITELY love you</h1>
			<div class="variant-filled-secondary rounded-full">
				<button on:click={() => fourth_transition()} class="w-full">I get it</button>
			</div>
		</div>
	</div>
	<img
		class="absolute top-10 left-15 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section4.image_1}
		class:invisible={!section4.image_1}
		class:animate-slide-out={section4.slide_out}
		alt="franklin_snuggle"
		src={franklin_snuggle}
	/>
	<img
		class="absolute bottom-5 left-5 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section4.image_3}
		class:invisible={!section4.image_3}
		class:animate-slide-out={section4.slide_out}
		alt="benji_bed"
		src={snuggle_bed}
	/>
	<img
		class="absolute bottom-5 right-5 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section4.image_2}
		class:invisible={!section4.image_2}
		class:animate-slide-out={section4.slide_out}
		alt="benji_chair"
		src={snuggle_chair}
	/>

	<div
		id="section5"
		class="absolute flex space-x-5 justify-center items-center"
		class:animate-slide-in={section5.slide_in}
		class:invisible={section5.hide}
		class:animate-slide-out={section5.slide_out}
	>
		<dev class="space-y-5 text-center">
			<h1 class="h1">As do I :)</h1>
			<div class="variant-filled-secondary rounded-full">
				<button on:click={() => fifth_transition()} class="w-full">Aww shucks!</button>
			</div>
		</dev>
	</div>
	<img
		class="absolute top-11 left-0 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section5.image_1}
		class:invisible={!section5.image_1}
		class:animate-slide-out={section5.slide_out}
		alt="wicked"
		src={wicked}
	/>
	<img
		class="absolute top-11 right-0 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section5.image_2}
		class:invisible={!section5.image_2}
		class:animate-slide-out={section5.slide_out}
		alt="dinner"
		src={dinner}
	/>
	<img
		class="absolute bottom-10 left-3 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section5.image_3}
		class:invisible={!section5.image_3}
		class:animate-slide-out={section5.slide_out}
		alt="yellow_dance"
		src={yellow_dance}
	/>
	<img
		class="absolute bottom-10 right-3 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section5.image_4}
		class:invisible={!section5.image_4}
		class:animate-slide-out={section5.slide_out}
		alt="teletubbies"
		src={teletubbies}
	/>

	<div
		id="section6"
		class="absolute flex space-x-5 justify-center items-center"
		class:animate-slide-in={section6.slide_in}
		class:invisible={section6.hide}
		class:animate-slide-out={section6.slide_out}
	>
		<div class="space-y-5 text-center">
			<h3 class="h3">And now that we've been to some weddings ourselves</h3>
			<!-- <h3 class="h3">it only seems right to ask</h3> -->
			<div class="variant-filled-secondary rounded-full">
				<button on:click={() => sixth_transition()} class="w-full"
					>It only seems right to ask</button
				>
			</div>
		</div>
	</div>
	<img
		class="absolute top-10 left-0 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section6.image_1}
		class:invisible={!section6.image_1}
		class:animate-slide-out={section6.slide_out}
		alt="blue"
		src={blue}
	/>
	<img
		class="absolute top-10 right-0 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section6.image_2}
		class:invisible={!section6.image_2}
		class:animate-slide-out={section6.slide_out}
		alt="yellow"
		src={yellow}
	/>
	<img
		class="absolute bottom-5 left-3 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section6.image_3}
		class:invisible={!section6.image_3}
		class:animate-slide-out={section6.slide_out}
		alt="poloroid"
		src={poloroid}
	/>
	<img
		class="absolute bottom-5 right-3 rounded-3xl desktop"
		class:mobile={size_condition}
		class:animate-slide-in={section6.image_4}
		class:invisible={!section6.image_4}
		class:animate-slide-out={section6.slide_out}
		alt="orange"
		src={orange}
	/>

	<div
		id="section7"
		class="absolute flex space-x-5 justify-center items-center"
		class:animate-slide-in={section7.slide_in}
		class:invisible={section7.hide}
		class:animate-slide-out={section7.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">Will you marry me?</h1>
			<div class="animate-bounce variant-filled-success rounded-full">
				<button on:click={() => seventh_transition()} class="w-full">Yes ❤️</button>
			</div>
			<div
				class="variant-filled-error rounded-full"
				class:animate-shake={no_button_shake}
				class:invisible={hide_no_button}
			>
				<button id="no_button" on:click={() => shake_button()} class="w-full">No 👎</button>
			</div>
			<h2 class:invisible={hide_no_text}>{no_text}</h2>
		</div>
	</div>

	<div
		id="section8"
		class="absolute"
		class:animate-slide-in={section8.slide_in}
		class:invisible={section8.hide}
		class:animate-slide-out={section8.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">yay! :)</h1>
			<h1 class="h1">love you baby!</h1>
		</div>
	</div>
</div>

<div class="absolute left-0 top-0 w-full">
	<button on:click={reset}>Reset</button>
</div>

<style>
	.mobile {
		width: 40%;
	}
	.desktop {
		width: 13%;
	}
</style>
