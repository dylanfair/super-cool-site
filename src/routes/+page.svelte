<script lang="ts">
	class Section {
		id: number;
		hide: boolean;
		slide_out: boolean;
		slide_in: boolean;

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

	function reset() {
		section1 = new Section(1, false, false, false);
		section2 = new Section(2, true, false, false);
		section3 = new Section(3, true, false, false);
		section4 = new Section(4, true, false, false);
		section5 = new Section(5, true, false, false);
	}

	// just hard coding this because idk how any of this works
	function first_transition() {
		console.log('First transition');
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
		console.log('Second transition');
		section2.slide_out = true;

		if (!section2.hide) {
			setTimeout(() => {
				section2.hide = true;
			}, 1000);
		}
		section3.hide = false;
		section3.slide_in = true;
	}

	function third_transition() {
		console.log('Third transition');
		section3.slide_out = true;

		if (!section3.hide) {
			setTimeout(() => {
				section3.hide = true;
			}, 1000);
		}
		section4.hide = false;
		section4.slide_in = true;
	}

	function fourth_transition() {
		console.log('Fourth transition');
		section4.slide_out = true;

		if (!section4.hide) {
			setTimeout(() => {
				section4.hide = true;
			}, 1000);
		}
		section5.hide = false;
		section5.slide_in = true;
	}
</script>

<div class="h-screen flex space-x-5 justify-center items-center">
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
		class="absolute"
		class:animate-slide-in={section2.slide_in}
		class:invisible={section2.hide}
		class:animate-slide-out={section2.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">I'm the second section</h1>
			<div class="animate-bounce variant-filled-secondary rounded-full">
				<button on:click={() => second_transition()} class="w-full">Click me!</button>
			</div>
		</div>
	</div>

	<div
		id="section3"
		class="absolute"
		class:animate-slide-in={section3.slide_in}
		class:invisible={section3.hide}
		class:animate-slide-out={section3.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">I'm the third section</h1>
			<div class="animate-bounce variant-filled-secondary rounded-full">
				<button on:click={() => third_transition()} class="w-full">Click me!</button>
			</div>
		</div>
	</div>

	<div
		id="section4"
		class="absolute"
		class:animate-slide-in={section4.slide_in}
		class:invisible={section4.hide}
		class:animate-slide-out={section4.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">I'm the fourth section</h1>
			<div class="animate-bounce variant-filled-secondary rounded-full">
				<button on:click={() => fourth_transition()} class="w-full">Click me!</button>
			</div>
		</div>
	</div>

	<div
		id="section5"
		class="absolute"
		class:animate-slide-in={section5.slide_in}
		class:invisible={section5.hide}
		class:animate-slide-out={section5.slide_out}
	>
		<div class="space-y-5 text-center">
			<h1 class="h1">I'm the fifth section</h1>
			<h2 class="h2">All done!</h2>
		</div>
	</div>
</div>

<div class="absolute left-0 top-0">
	<button on:click={reset}>Reset</button>
</div>
