<template>
  <div id="app">
    <TextField
        v-model="firstName"
        :textLimit="15"
        labelName="'First Name'"
    ></TextField>
    <TextField
        v-model="lastName"
        :textLimit="15"
        labelName="'Last Name'"
    ></TextField>
    <div>FULL NAME: {{ fullName }}</div>

    <SelectField
      v-model="gender"
      labelName="Gender"
      placeholder="Select Your Gender..."
      :options="genderList"
    ></SelectField>
    {{ gender }}

<br><br>

    <SelectField
        v-model="age"
        labelName="Age"
        placeholder="Select Your Age..."
        :options="ageList"
    ></SelectField>
    {{ age }}


  </div>
</template>

<script>
import TextField from "./components/TextField";
import SelectField from "./components/SelectField";

export default {
  name: "app",
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      age: ""
    };
  },
  watch: {},
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    ageList() {
      let result = [];
      for (let i = 16; i < 65; i++) result.push({value: i, text: i});
      return result;
    },
    genderList() {
      return [
        { value: "mal", text: "Male"},
        { value: "fem", text: "Female"},
        { value: "othr", text: "Other"},
      ]
    }
  },
  components: {
    TextField,
    SelectField
  }
};
</script>

<style lang="stylus">
#app
    margin-top: 60px;

.text-input
    label
        display block;

    input
        display block;
        width 100%

    input.valid
        border 2px solid green

    input.invalid
        border 2px solid red

    .validation
        text-align right;
        font-size 12px;
        color red;
</style>
