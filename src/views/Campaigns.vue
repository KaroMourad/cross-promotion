<template>
    <div class="main">
        <div class="actions">
            <Button
                @onClick="onCreateHandler"
                btnClass="createButton"
            >
                Create
            </Button>
            <Button
                @onClick="onLogoutHandler"
                btn-type="href"
                btnClass="logoutButton"
            >
                Logout
            </Button>
        </div>
        <div class="campaignsContainer">
            <Loader v-if="loading"/>
            <div class="campaigns" v-else>
                <Campaign
                    :key="campaign.id"
                    :onDelete="onDeleteCampaignHandler"
                    v-bind:data="campaign"
                    v-for="campaign in this.campaigns"
                />
            </div>
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
            loading: true,
            campaigns: null
        }),
        async mounted()
        {
            this.campaigns = await this.$store.dispatch('fetchCampaigns');
            this.loading = false;
        },
        methods: {
            onDeleteCampaignHandler(id)
            {
                this.campaigns = this.campaigns.filter(campaign => campaign.id !== id)
            },
            onCreateHandler(e)
            {
                this.$router.push('/create-campaign');
            },
            async onLogoutHandler()
            {
                await this.$store.dispatch('logout');
                this.$router.push('/login');
            },
        }
    };
</script>

<style lang="scss" scoped>
    .main {
        width: 100%;
        height: 100%;
        padding: 20px;
        text-align: left;
        min-height: 100vh;
    }

    .campaignsContainer {
        width: 100%;
        height: calc(100% - 48px);
    }

    .actions {
        text-align: right;

        .createButton {
            width: 150px;
        }

        .logoutButton {
            width: 150px;
            color: var(--main-color);
        }
    }
</style>
