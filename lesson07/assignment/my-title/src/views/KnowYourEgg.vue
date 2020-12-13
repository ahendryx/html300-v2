<template>
<div class="row pb-5">
  <h1 class="col-12 pt-5 pb-2">Know Your Egg</h1>
  <p class="lead col-12 pb-5">What do all those carton labels really mean? Click on each term for an explanation.</p>

  <!-- Adding accordion -->
  <div id="accordion" class="col-lg-10 col-md-10 col-sm-12" v-for="term in terms" v-bind:key="term.terms">
    <div class="card">
      <div class="card-header pt-0 pb-0" id="termTitle">
        <h3 class="m-0 p-0">
          <button class="btn" data-toggle="collapse" data-target="#collapseTitle" aria-expanded="false" aria-controls="collapseTitle">{{term.title}}</button>
        </h3>
      </div>
    </div>
    <div id="collapseTitle" class="collapse" aria-labelledby="term" data-parent="#accordion">
      <div class="card-body">
        <p>{{term.def}}</p>
      </div>
    </div>
  </div>
  <!-- End accordion -->

</div>
</template>



<script>
export default {
  name: '#accordion',
  data () {
    return {
      terms: [
        {title: "CAGE-FREE",
        // Use a backslash after lines of text so Javascript knows the string is continued; otherwise, errors occur
          def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras."
          },
        {title: "FREE-RANGE",
          def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras."
          },
        {title: "ORGANIC",
          def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras."
          },
        {title: "CERTIFIED HUMANE",
          def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras."
          },
        {title: "ANIMAL WELFARE APPROVED",
          def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras."
          },
      ]
    }
  }
}
</script>
