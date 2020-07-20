<template>
    <div class="loginContainer">
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
    </div>
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

    .loginContainer {
        position: relative;
        width: 100%;
        height: 100%;
    }

    html {
        .forgotPassword {
            margin-top: 0;
            text-align: right;
            font-size: 13px;
            display: block;
        }

        .newAccount {
            margin: 30px 0;
            font-size: 13px;
        }

        .info {
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
