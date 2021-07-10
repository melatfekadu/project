/* eslint-disable */
eslint-disable
<template>
    <div class="vue-tempalte">
        <nav class="navbar shadow bg-dark rounded justify-content-between flex-nowrap flex-row fixed-top">
            <div class="container">
                <a class="navbar-brand float-left text-white h4" href="#" target="_blank">
                    customer service and compiant
                </a>
                <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                    <router-link class="nav-link pr-3 text-white h6"  to="/login">Sign in</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="btn btn-outline-primary text-white h6" to="/">Sign up</router-link>
                </li>
                </ul>
            </div>
        </nav>
        <div class="vertical-center" style="margin-top: 1rem;">
            <div class="inner-block">
                <form>
                    <h3>Sign Up</h3>

                    <div class="form-group">
                        <label>Full Name</label>
                        <input  id="full_name" type="text" class="form-control form-control-lg"/>
                    </div>
                    <div class="form-group">
                        <label>BP Number</label>
                        <input id="bp_number" type="text" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Email address</label>
                        <input id="email" type="email" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input id="password" type="password" class="form-control form-control-lg" />
                    </div>

                    <button id="submit" type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

                    <p class="forgot-password text-right">
                        already register
                        <router-link :to="{name: 'login'}">sign in?</router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
 data: () => ({
   valid: true,
   username: '',
   password: '',
   nameRules: [
      v => !!v || 'username and password is needed',
   ],
   select: null,
 }),
 methods: {
   submit() {
      if (this.$refs.form.validate()) {
        return axios({
           method: 'post',
           data: {
               username: this.username,
               password: this.username,
           },
           url: 'http://localhost:8081/Signup',
           headers: {
             'Content-Type': 'application/json',
           },
         })
           .then(() => {
              this.$router.push({ name: 'ComplaintPage' });
              this.$refs.form.reset();
           })
           .catch(() => {
           });
        }
        return true;
       },
       clear() {
          this.$refs.form.reset();
      },
    },
};

 
</script>
