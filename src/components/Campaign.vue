<template>
    <div class="campaign">
        <div class="imageContainer">
            <img class="previewImage" v-bind:src="data.imgData"/>
            <div class="imageFooter">

            </div>
        </div>
        <main>
            <div class="info">
                <div class="title">
                    {{data.title || "--"}}
                </div>
                <div class="name">
                    by {{this.$store.getters.info.name || "--"}}
                </div>
            </div>
            <p>{{data.suggestion || "--"}}</p>
            <footer>
                <img @click="editCampaignHandler" alt="edit" src="../assets/edit.png" title="edit"/>
                <img @click="deleteCampaignHandler" alt="delete" src="../assets/delete.png" title="delete"/>
            </footer>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Campaign',
        props: {
            data: {
                imgData: String,
                title: String,
                suggestion: String,
                site: String,
                id: String
            },
            onDelete: Function
        },
        methods: {
            editCampaignHandler()
            {

            },
            async deleteCampaignHandler()
            {
                try
                {
                    await this.$store.dispatch('removeCampaign', this.data.id);
                    this.onDelete(this.data.id);
                } catch (e)
                {
                    console.log("err", e);
                    throw e;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .campaign {
        display: inline-block;
        width: 320px;
        height: 543px;
        background: #FFFFFF;
        box-shadow: 0px 0px 35px rgba(154, 161, 171, 0.15);
        border-radius: 10px;
        padding: 15px;
        margin: 20px;

        .imageContainer {
            display: inline-flex;
            position: relative;
            border-radius: 3px;
            overflow: hidden;

            .previewImage {
                width: 290px;
                height: 290px;
            }

            .imageFooter {
                width: 100%;
                height: 47px;
                background: #333333;
                opacity: 0.7;
                position: absolute;
                bottom: 0;
            }
        }

        main {
            margin: 14px 10px;

            .info {
                height: 70px;
                text-transform: capitalize;
                font-style: normal;
                letter-spacing: 0.056px;
                font-weight: bold;
                line-height: 23px;

                .title {
                    font-size: 19px;
                    color: #858585;
                }

                .name {
                    font-weight: 600;
                    font-size: 12px;
                    color: rgba(133, 133, 133, 0.5);
                }
            }

            p {
                height: 57px;
                overflow-x: hidden;
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 19px;
                letter-spacing: 0.056px;
                color: rgba(80, 80, 80, 0.7);
                margin: 14px 0;
            }

            footer {
                padding: 15px 0 10px 0;
                border-top: 1px solid var(--main-border-color);
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                    transition: all 0.25s;
                    box-shadow: none;
                    border-radius: 50%;
                    overflow: hidden;
                }

                img:hover {
                    box-shadow: 0px 0px 2px 0px #888888;
                }

                img:active, img:focus {
                    box-shadow: none;
                }
            }
        }

    }
</style>
