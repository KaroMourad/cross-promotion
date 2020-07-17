<template>
    <div class="campaignsContainer">
        <div class="actions">
            <Button
                @onClick="onCreateHandler"
                btnClass="createButton"
            >
                Create
            </Button>
            <Button
                @onClick="onLogoutHandler"
                btnClass="logoutButton"
            >
                Logout
            </Button>
        </div>
        <div class="campaigns">
            <Campaign :key="campaign.id" v-bind:data="campaign" v-for="campaign in campaigns"/>
        </div>
    </div>
</template>

<script>
    import Button from '../components/Button';
    import Campaign from '../components/Campaign';

    export default {
        name: 'Campaigns',
        components: {
            Button,
            Campaign
        },
        data: () => ({
            campaigns: [
                {
                    id: 1,
                    imageUrl: 'assets/image.png',
                    backers: 29441,
                    title: 'Varram'
                },
                {
                    id: 2,
                    imageUrl: 'assets/Bristly_Backbone-Branding_2.png',
                    backers: 29441,
                    title: 'Bristly'
                }
            ]
        }),
        methods: {
            onCreateHandler(e)
            {
                console.log('create campaign', e);
            },
            async onLogoutHandler()
            {
                await this.$store.dispatch('logout');
                this.$router.push('/login?message=logout');
            },
        }
    };
</script>

<style lang="scss" scoped>
    .campaignsContainer {
        padding: 40px;
        text-align: left;
    }

    .actions {
        text-align: right;
    }

    .createButton {
        width: 150px;
        height: 48px;
        color: white;
        background: #727CF5;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.056px;
        border-radius: 5px;
        border: none;
    }

    .logoutButton {
        width: 150px;
        height: 48px;
        color: #727CF5;
        background: transparent;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.056px;
        border-radius: 5px;
        border: none;
    }
</style>
