<template>
    <form class="card self-center">
        <div class="card-content">
            <p class="card-title">Login</p>
            <div class="line"/>
            <div class="input-field">
                <input
                    class="validate"
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                >
                <!--            <small class="helper-text invalid">Email</small>-->
            </div>
            <div :style="{position: 'relative'}" class="input-field">
                <input
                    :type="[toggleShowPassword ? 'text' : 'password']"
                    class="validate"
                    id="password"
                    placeholder="Enter your password"
                >
                <img @click="toggleShowPassword = !toggleShowPassword" class="eye" src="../assets/eye.png"/>
                <!--            <small class="helper-text invalid">Password</small>-->
            </div>
        </div>
        <div class="card-action">
            <p class="text purpleText forgotPassword">
                <a href="/forgot-password">Forgot password?</a>
            </p>
            <div>
                <Button
                    @onClick="onSubmitHandler"
                    btnClass="auth-submit"
                    btnType="submit"
                >
                    Log in
                </Button>
            </div>
            <p class="text newAccount">
                <a href="/signUp">Create new Account</a>
            </p>
        </div>
    </form>
</template>

<script>
  import Button from '../components/Button';

  export default {
    name: 'login',
    components: {
      Button
    },
    data: () => ({
      toggleShowPassword: false
    }),
    methods: {
      onSubmitHandler(e) {
        console.log('login submit', e);
      }
    }
  };
</script>

<style lang="scss" scoped>

    html .forgotPassword {
        margin-top: 0;
        text-align: right;
        font-size: 13px;
    }

    html .newAccount {
        margin: 30px 0;
        font-size: 13px;
    }

    .eye {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }

    html .info {
        font-size: 13px;
    }

    html .purpleText {
        color: #727CF5;
    }

    .invalid {
        color: red;
    }

    .auth-submit {
        border: none;
        margin: 10px 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #727CF5;
        border-radius: 5px;
        color: white;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.056px;
        color: #FFFFFF;
        width: 100%;
        height: 48px;
    }

    .input-field {
        width: 100%;
        margin: 10px 0;
        display: inline-block;

        input {
            border: 1px solid #C7C4C4;
            box-sizing: border-box;
            border-radius: 5px;
            height: 48px;
            width: 100%;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 19px;
            letter-spacing: 0.056px;
            color: black;
            padding: 16px;
            opacity: 1;
        }

        input::placeholder {
            color: #9B9B9B;
            opacity: 0.8;
            font-size: 13px;
        }
    }

    .line {
        background: #D6DDE3;
        width: 100%;
        height: 1px;
        margin: 30px 0;
        display: inline-block;
    }

    .self-center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .card {
        box-sizing: border-box;
        padding: 35px 63px;
        width: 450px;
        height: 483px;
        background: #FFFFFF;
        box-shadow: 0px 18px 23px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
    }

    .text {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.056px;
    }

    .greyText {
        color: #6C757D;
    }

    .card-title {
        margin: 10px 0;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        letter-spacing: 0.056px;
        color: #333333;
    }
</style>
