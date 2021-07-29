<template>
  <div class="container w-50 my-5">
    <h1>Details</h1>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label">Name</label>
        <input type="text" v-model="user.name" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label">Phone no.</label>
        <input type="text" v-model="user.Phoneno" class="form-control" />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          v-model="user.Address"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <!-- <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div> -->
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input
          type="text"
          v-model="user.City"
          class="form-control"
          id="inputCity"
        />
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" v-model="user.State" class="form-select">
          <option selected>Choose...</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="U.P">U.P</option>
          <option value="M.P">M.P</option>
          <option value="Gujrat">Gujrat</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Zip</label>
        <input
          type="text"
          v-model="user.Zip"
          class="form-control"
          id="inputZip"
        />
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            v-model="user.Check"
            type="checkbox"
            id="gridCheck"
          />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <div class="col-12">
        <b class="war" v-if="msg">{{ msg }}</b
        ><br />
        <button type="button" @click="postss" class="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  name: "Formexamp",
  data() {
    return {
      user: {
        name: "",
        Phoneno: "",
        Address: "",
        City: "",
        State: "",
        Zip: "",
        Check: false,
      },
      msg: undefined,
      users: [],
    };
  },
  methods: {
    postss() {
      if (
        !this.user.name |
        !this.user.Phoneno |
        !this.user.Address |
        !this.user.Zip
      ) {
        return (this.msg = "please fill all the information");
      }
      console.log(this.user);
      this.$router.push("/");
    },
  },
  async created() {
    const respons = await axios.get(
      "https://temp-node-express-mongodb.herokuapp.com/users"
    );
    console.log(respons.data);
    this.users = respons.data;
  },
};
</script>

<style>
.war {
  color: red;
}
</style>