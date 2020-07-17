<template>
    <form @submit.prevent="onSubmitHandler" class="card self-center">
        <div class="card-content">
            <p class="card-title">Login</p>
            <div class="line"/>
            <div class="input-field">
                <input
                    :class="{invalidInput: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    v-model.trim="email"
                >
                <small
                    class="error invalid"
                    v-if="$v.email.$dirty && !$v.email.required"
                >
                    Enter Email Address!
                </small>
                <small
                    class="error invalid"
                    v-else-if="$v.email.$dirty && !$v.email.email"
                >
                    Invalid Email!
                </small>
            </div>
            <div class="input-field">
                <input
                    :class="{invalidInput: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                    :type="[toggleShowPassword ? 'text' : 'password']"
                    id="password"
                    placeholder="Enter your password"
                    v-model.trim="password"
                >
                <img @click="toggleShowPassword = !toggleShowPassword" class="eye" src="../assets/eye.png"/>
                <small
                    class="error invalid"
                    v-if="$v.password.$dirty && !$v.password.required"
                >
                    Enter Password!
                </small>
                <small
                    class="error invalid"
                    v-else-if="$v.password.$dirty && !$v.password.minLength"
                >
                    Minimum length must be {{$v.password.$params.minLength.min}} symbol! Now length is
                    {{password.length}}
                </small>
            </div>
        </div>
        <div class="card-action">
            <p class="text purpleText forgotPassword">
                <router-link to="/forgot-password">Forgot password?</router-link>
            </p>
            <Button
                btnClass="auth-submit"
                btnType="submit"
            >
                Log in
            </Button>
            <p class="text newAccount">
                <router-link to="/signUp">Create new Account</router-link>
            </p>
        </div>
    </form>
</template>

<script>
    import Button from '../components/Button';
    import {email, minLength, required} from 'vuelidate/lib/validators';

    export default {
        name: 'login',
        components: {
            Button
        },
        data: () => ({
            toggleShowPassword: false,
            email: '',
            password: '',
        }),
        validations: {
            email: {
                email,
                required
            },
            password: {
                required,
                minLength: minLength(6)
            }
        },
        methods: {
            async onSubmitHandler()
            {
                if (this.$v.$invalid)
                {
                    this.$v.$touch();
                    return;
                }

                const formData = {
                    email: this.email,
                    password: this.password
                };

                try
                {
                    await this.$store.dispatch('login', formData);
                    this.$router.push('/campaigns');
                } catch (err)
                {
                    console.log('err', err);
                }
            }
        },
    };
</script>

<style lang="scss" scoped>

    .invalid {
        color: red;
        display: block;
        text-align: left;
        padding: 4px 10px;
    }

    html .invalidInput, html .invalidInput:focus {
        border: 1px solid red !important;
        outline: none;
    }


    .error {
        position: absolute;
        background: white;
        right: 20px;
        border: 1px solid red;
        border-radius: 5px;
        top: -11px;
        font-size: 11px;
    }

    .hidden {
        display: none;
    }

    html .forgotPassword {
        margin-top: 0;
        text-align: right;
        font-size: 13px;
        display: block;
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
        width: 100%;
        height: 48px;
    }

    .input-field {
        width: 100%;
        margin: 10px 0;
        display: inline-block;
        position: relative;

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
            padding: 16px 16px 12px 16px;
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
