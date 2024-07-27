<script>
	let activate_slide_out = false;
	let activate_slide_in = false;
	let first_hide = false;
	let second_hide = true;

	function reset() {
		activate_slide_out = false;
		activate_slide_in = false;
		first_hide = false;
		second_hide = true;
	}

	function delayed_hide() {
		first_hide = true;
	}

	function first_transition() {
		activate_slide_out = true;

		setTimeout(delayed_hide, 1000);
		second_hide = false;
		activate_slide_in = true;

	}
</script>

<div class="h-60 flex space-x-5 justify-center items-center">
	<div id="section1" class="absolute flex space-x-5 justify-center items-center" class:animate-slide-out={activate_slide_out} class:invisible={first_hide}>
		<div class="space-y-5 text-center">
			<h1 class="h1">oh, hey</h1>
		</div>
		<div class="space-y-5 text-center">
			<div class="animate-bounce variant-filled-secondary rounded-full">
				<button on:click={first_transition}>Click me!</button>
			</div>
			<p>You should really click it</p>
		</div>
	</div>
	<div id="section2" class="absolute" class:animate-slide-in={activate_slide_in} class:invisible={second_hide}>
		<div class="space-y-5 text-center">
			<h1 class="h1">I'm a different section</h1>
		</div>
	</div>
</div>
<div class="flex justify-center items-center">
	<button on:click={reset}>Reset</button>
</div>