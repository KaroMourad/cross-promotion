<template>
    <form class="card">
        <div class="card-content">
            <span class="card-title center">Login</span>
            <div class="line"></div>
            <div class="input-field">
                <input
                    class="validate"
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                >
                <br>
                <small class="helper-text invalid">Email</small>
            </div>
            <div class="input-field">
                <input
                    class="validate"
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                >
                <br>
                <small class="helper-text invalid">Password</small>
                <br>
                <small class="forgot-password">Forgot password?</small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="auth-submit"
                    type="submit"
                >
                    Login
                </button>
            </div>
            <span>By clicking Sign Up you accept Terms and Conditions</span>
            <p class="center">
                <a href="/signUp"> Create new Account</a>
            </p>
        </div>
    </form>
</template>

<script>

</script>

<style>
    .center {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .card-title {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.056px;
        color: #333333;
    }
</style>
