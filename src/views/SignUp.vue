<template>
    <form class="card">
        <div class="card-content">
            <span class="card-title center">Sign-Up</span>
            <span class="center">New to CrossProm?</span>
            <div class="line"></div>
            <span class="center">Create an account! It won't take long.</span>
            <div class="input-field">
                <input
                    class="validate"
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                >
                <label for="name">Name</label>
            </div>
            <div class="input-field">
                <input
                    class="validate"
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                >
                <label for="email">Email</label>
                <small class="helper-text invalid">Email</small>
            </div>
            <div class="input-field">
                <input
                    class="validate"
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                >
                <label for="password">Password</label>
                <small class="helper-text invalid">Password</small>
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
            <span>By clicking Sign Up you accept Terms and Conditions</span>
            <p class="center">
                Already have an account?
                <a href="/">Зарегистрироваться</a>
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
