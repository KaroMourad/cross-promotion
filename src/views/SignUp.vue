<template>
    <form class="card self-center">
        <div class="card-content">
            <p class="card-title">Sign Up</p>
            <p class="text greyText">New to CrossProm?</p>
            <div class="line"/>
            <p class="text greyText">Create an account! It won't take long.</p>
            <div class="input-field">
                <input
                    class="validate"
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                >
            </div>
            <div class="input-field">
                <input
                    class="validate"
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                >
                <!--            <small class="helper-text invalid">Email</small>-->
            </div>
            <div class="input-field" v-bind:style="{position: 'relative'}">
                <input
                    class="validate"
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                >
                <img class="eye" src="../assets/achq.png"/>
                <!--            <small class="helper-text invalid">Password</small>-->
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="auth-submit"
                    type="submit"
                >
                    Sign Up
                </button>
            </div>
            <p class="text greyText info">By clicking Sign Up you accept <span
                class="purpleText">Terms and Conditions</span>
            </p>
            <p class="text info" v-bind:style="{ marginTop: 40+'px' }">
                <a href="/login">Already have an account?</a>
            </p>
        </div>
    </form>
</template>

<script>

</script>

<style lang="scss" scoped>
    .eye {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }

    html .info {
        font-size: 13px;
        text-align: left;
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

        input:after {
            content: " ";
            background-image: url("../assets/achq.png");
        }

        input::placeholder {
            color: #9B9B9B;
            opacity: 0.8;
        }
    }

    .line {
        background: #D6DDE3;
        width: 100%;
        height: 1px;
        margin: 10px 0;
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
        height: 619px;
        background: #FFFFFF;
        box-shadow: 0px 18px 23px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
    }

    .text {
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
        margin: 0;
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
