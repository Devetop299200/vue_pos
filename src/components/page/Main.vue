<template>
  <div class="main">
    
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      
    }
  }
}

var PNF = require('google-libphonenumber').PhoneNumberFormat;
 
// Get an instance of `PhoneNumberUtil`.
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// Parse number with country code.
var phoneNumber = phoneUtil.parse('202-456-1414', 'US');

// Print number in the international format.
console.log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL))
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
