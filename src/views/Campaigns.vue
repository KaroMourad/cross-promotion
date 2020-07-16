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
        <div :key="campaign.id" class="campaigns" v-for="campaign in campaigns">
            <Campaign :data="campaign"/>
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
    methods: {
      onCreateHandler(e) {
        console.log('create campaign', e);
      },
      onLogoutHandler(e) {
        console.log('logout', e);
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
