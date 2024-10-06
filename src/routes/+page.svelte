<script lang="ts">

  function Section(id, hide, slide_out, slide_in) {
    this.id = id;
    this.hide = hide;
    this.slide_out = slide_out;
    this.slide_in = slide_in;
    this.toggleHide = function() {
      this.hide = true; 
    }
  };

  var section1 = new Section(1, false, false, false);
  var section2 = new Section(2, true, false, false);

	function reset() {
    section1 = new Section(1, false, false, false);
    section2 = new Section(2, true, false, false);
	}

	function first_transition(sec1, sec2) {
    console.log("Doing a transition");
    console.log(sec1);
    console.log(sec2);
		sec1.slide_out = true;

    if (!sec1.hide) {
      setTimeout(() => {sec1.hide = true; }, 1000);
    }
		sec2.hide = false;
		sec2.slide_in = true;
    console.log(sec1);
    console.log(sec2);
	}
</script>

<div class="h-screen flex space-x-5 justify-center items-center">

	<div id="section1" class="absolute flex space-x-5 justify-center items-center" class:animate-slide-out={section1.slide_out} class:invisible={section1.hide}>
		<div class="space-y-5 text-center">
			<h1 class="h1">oh, hey</h1>
		</div>
		<div class="space-y-5 text-center">
			<div class="animate-bounce variant-filled-secondary rounded-full">
				<button on:click={() => first_transition(section1, section2)}>Click me!</button>
			</div>
			<p>(You should really click it)</p>
		</div>
	</div>

	<div id="section2" class="absolute" class:animate-slide-in={section2.slide_in} class:invisible={section2.hide}>
		<div class="space-y-5 text-center">
			<h1 class="h1">I'm a different section</h1>
		</div>
	</div>
</div>

<div class="absolute left-0 top-0">
	<button on:click={reset}>Reset</button>
</div>
