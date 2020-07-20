<template>
    <div class="signUpContainer">
        <form @submit.prevent="onSubmitHandler" class="card self-center">
            <div class="card-content">
                <p class="card-title">Sign Up</p>
                <p class="text greyText">New to CrossProm?</p>
                <div class="line"/>
                <p class="text greyText">Create an account! It won't take long.</p>
                <div class="input-field">
                    <input
                        :class="{invalidInput: $v.name.$dirty && !$v.name.required}"
                        id="name"
                        placeholder="Enter your name"
                        type="text"
                        v-model.trim="name"
                    >
                    <small
                        class="error invalid"
                        v-if="$v.name.$dirty && !$v.name.required"
                    >
                        Enter Name!
                    </small>
                </div>
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
                    <img @mousedown="() => toggleShowPasswordHandler('down')"
                         @mouseup="() => toggleShowPasswordHandler('up')"
                         class="eye"
                         src="../assets/eye.png"
                         v-if="toggleShowPassword"
                    />
                    <img @mousedown="() => toggleShowPasswordHandler('down')"
                         @mouseup="() => toggleShowPasswordHandler('up')"
                         class="eye"
                         src="../assets/eye-close.png"
                         v-else
                    />
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
                <Button
                    btnClass="auth-submit"
                    btnType="submit"
                >
                    Sign Up
                </Button>
                <p class="text greyText termsConditions">
                    By clicking Sign Up you accept
                    <span class="purpleText">Terms and Conditions</span>
                </p>
                <p class="text haveAccount">
                    <router-link to="/login">Already have an account?</router-link>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
    import Button from '../components/Button';
    import {email, minLength, required} from 'vuelidate/lib/validators';

    export default {
        name: 'signUp',
        components: {
            Button
        },
        data: () => ({
            toggleShowPassword: false,
            email: '',
            password: '',
            name: ''
        }),
        validations: {
            email: {
                email,
                required
            },
            password: {
                required,
                minLength: minLength(6)
            },
            name: {
                required
            }
        },
        methods: {
            toggleShowPasswordHandler(type)
            {
                this.toggleShowPassword = !!(type === "down");
            },
            async onSubmitHandler()
            {
                if (this.$v.$invalid)
                {
                    this.$v.$touch();
                    return;
                }

                const formData = {
                    email: this.email,
                    password: this.password,
                    name: this.name
                };

                try
                {
                    await this.$store.dispatch('signUp', formData);
                    this.$router.push('/campaigns');
                } catch (err)
                {
                    console.log('err', err);
                }
            }
        },
    };
</script>

<style lang="scss">

    .signUpContainer {
        position: relative;
        width: 100%;
        height: 100%;
    }

    html {

        .termsConditions {
            text-align: left;
            font-size: 13px;
        }

        .haveAccount {
            margin-top: 40px;
            font-size: 13px;
        }

        .purpleText {
            color: var(--main-color);
        }
    }


    .hidden {
        display: none;
    }

    .eye {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }

    .auth-submit {
        width: 100%;
    }

    .input-field {
        width: 100%;
        margin: 10px 0;
        display: inline-block;
        position: relative;

        input {
            border: 1px solid var(--main-border-color);
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

    .card {
        box-sizing: border-box;
        padding: 35px 63px;
        width: 450px;
        height: 619px;
        background: #FFFFFF;
        box-shadow: 0px 18px 23px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
    }

    .text {
        margin: 10px 0;
        display: inline-block;
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
