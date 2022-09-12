<template>
  <div id="app">
    <FormulateForm
    class="login-form"
      v-model="form"
      action="#"
      @submit.prevent="submit"
    >
      <div class="double-wide">
        <div>
          <FormulateInput
            type="button"
            label="SMS Challenge"
            @click="smsChallenge"
          />
          <FormulateInput
            type="button"
            label="Verify OTP"
            @click="verifySmsChallenge"
          />
          <FormulateInput
            type="button"
            label="Process Keys"
            @click="keyppi_protocol"
          />
          <FormulateInput
            type="button"
            label="Get IPFS Address"
            @click="getInfo"
          />
          <FormulateInput
            type="submit"
            label="Login"
          />
          <FormulateInput
            type="button"
            label="Sign Out"
            @click="signOut"
          />
          <FormulateInput
            type="text"
            label="Token"
            v-model="form.token"
          />
          <FormulateInput
            type="text"
            label="phone"
            v-model="form.phone"
          />
          <FormulateInput
            type="text"
            label="OTP"
            v-model="form.otp"
          />
          <FormulateInput
            type="password"
            label="Private Key"
            v-model="form.pk"
          />
          <FormulateInput
            type="text"
            label="Nullifier"
            v-model="form.nullifier"
          />
          <FormulateInput
            type="text"
            label="IPFS address"
            v-model="form.ipfsAddress"
          />
          <FormulateInput
            type="text"
            label="Document Type"
            v-model="form.documentType"
          />
          <FormulateInput
            type="text"
            label="Document Number"
            v-model="form.documentNumber"
          />
          <FormulateInput
            type="text"
            label="Account Number"
            v-model="form.account"
          />
        </div>
        <div>
          <FormulateInput
            type="textarea"
            label="Request"
            v-model="form.request"
          />
          <FormulateInput
            type="textarea"
            label="Response"
            v-model="form.response"
          />
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
import { fb } from "@/firebase";

export default {
  name: "App",
  components: {},
  data() {
    return {
      form: {
        username: null,
        password: null,
        token: null,
        documentType: null,
        documentNumber: null,
        account: null,
        departmentCode: null,
        ipfsAddress: null,
        municipalityCode: null,
        nullifier: null,
        otp: null,
        phone: null,
        pk: null,
        request: null,
        response: null
      },
      error: null
    };
  },
  mounted() {},
  methods: {
    submit() {
      fb.auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(data=> {
        console.log(data);
      })
      .catch(error=> {
        console.log("Unable to authenticate user", error);
      });
    },
    signOut() {
      fb
        .auth()
        .signOut()
        .then(() => {
          console.log("Signed out...");
        });
    },
    test() {
      let data = {
        firstName: "Juan",
        lastName: "Perez",
      };

      var httpTest = fb.functions().httpsCallable("httpTest");
      httpTest(data)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    authenticate() {
      let data = {
        method: "authenticate",
        user: this.form.username,
        password: this.form.password
      };
      console.log("data:", data);
      let httpAuthenticationServices = fb.functions().httpsCallable("httpAuthenticationServices");
      this.form.request = JSON.stringify(data);
      httpAuthenticationServices(data)
        .then((result) => {
          console.log(result.data);
          this.form.response = JSON.stringify(result.data);
          this.form.token = result.data.token;
        })
        .catch((err) => {
          console.log(err.message);
          this.form.response = err.message;
        });
    },
    smsChallenge() {
      let data = {
        method: "smsChallenge",
        phone: this.form.phone
      };
      console.log(data);
      let httpChallengesServices = fb.functions().httpsCallable("httpChallengesServices");
      this.form.request = JSON.stringify(data);
      httpChallengesServices(data)
        .then((result) => {
          console.log(result.data);
          this.form.response = JSON.stringify(result.data);
        })
        .catch((err) => {
          console.log(err.message);
          this.form.response = err.message;
        });
    },
    verifySmsChallenge() {
      let data = {
        method: "verifySmsChallenge",
        phone: this.form.phone,
        token: this.form.otp
      };
      console.log(data);
      let httpChallengesServices = fb.functions().httpsCallable("httpChallengesServices");
      this.form.request = JSON.stringify(data);
      httpChallengesServices(data)
        .then((result) => {
          console.log(result.data);
          this.form.response = JSON.stringify(result.data);
        })
        .catch((err) => {
          console.log(err.message);
          this.form.response = err.message;
        });
    },
    keyppi_protocol() {
      let data = {
        method: "keyppi_protocol",
        pk: this.form.pk,
        nullifier: this.form.nullifier
      };
      console.log(data);
      let httpSecuringServices = fb.functions().httpsCallable("httpSecuringServices");
      this.form.request = JSON.stringify(data);
      httpSecuringServices(data)
        .then((result) => {
          console.log(result.data);
          this.form.response = JSON.stringify(result.data);
        })
        .catch((err) => {
          console.log(err.message);
          this.form.response = err.message;
        });
    },
    getInfo() {
      let data = {
        method: "getInfo",
        cid: this.form.ipfsAddress
      };
      console.log(data);
      let httpIpfsServices = fb.functions().httpsCallable("httpIpfsServices");
      this.form.request = JSON.stringify(data);
      httpIpfsServices(data)
        .then((result) => {
          console.log(result.data);
          this.form.response = JSON.stringify(result.data);
        })
        .catch((err) => {
          console.log(err.message);
          this.form.response = err.message;
        });
    },
    checkBeneficiarySubsidy() {
      let data = {
        method: "checkBeneficiarySubsidy",
        token: this.form.token,
        beneficiaryId: this.form.beneficiaryId
      };
      console.log(data);
      let httpAuthenticationServices = fb.functions().httpsCallable("httpAuthenticationServices");
      this.form.request = JSON.stringify(data);
      httpAuthenticationServices(data)
        .then((result) => {
          console.log(result.data);
          this.form.response = JSON.stringify(result.data);
        })
        .catch((err) => {
          console.log(err.message);
          this.form.response = err.message;
        });
    }
  },
};
</script>

<style lang="scss">
  @import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
  .login-form {
    padding: 0;
    min-height: calc(100vh - 16px);
    border: 1px solid #a8a8a8;
    border-radius: .5em;
    max-width: 100%;
    box-sizing: border-box;
  }
  .form-title {
    margin-top: 0;
  }
  .login-form::v-deep .formulate-input .formulate-input-element {
    max-width: none;
  }
  @media (min-width: 420px) {
    .double-wide {
      display: flex;
    }
    // .double-wide .formulate-input {
    .double-wide > div {
      padding: 2em;
      // flex-grow: 1;
      // width: calc(50% - .5em);
      width: 100%;
    }
    // .formulate-input[data-type="textarea"] {
    //   width: 100%;
    //   display: none;
    // }
    // textarea {
    //   width: 100%;
    //   background-color: yellow;
    // };
    // .double-wide .formulate-input:first-child {
    //   margin-right: .5em;
    // }
    // .double-wide .formulate-input:last-child {
    //   margin-left: .5em;
    // }
    .double-wide >div:first-child {
      margin-right: 1em;
    }
    .double-wide >div:last-child {
      margin-left: 1em;
      background-color: #fafafa
    }
  }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  // div.formulate-input-element[type="data-type=textarea"] > * {width: 100%; display: none;}
  textarea {min-width: 100% !important; resize: vertical; min-height: 10em;}
  .formulate-input .formulate-input-element {
      /* max-width: 20em; */
      max-width: 100%;
      // resize: vertical;
      // margin-bottom: 0.1em;
  }
  div[data-type="button"], div[data-type="submit"] {
    display: inline-block;
    margin-right: 10px;
  }
  // body {background: yellow}
</style>
