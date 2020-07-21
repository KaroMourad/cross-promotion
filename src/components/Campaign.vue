<template>
    <div class="campaign">
        <div class="imageContainer">
            <img :src="data.imgData" class="previewImage"/>
            <div class="imageFooter">
                backers
            </div>
        </div>
        <main>
            <div class="info">
                <div class="title">
                    <input
                        :class="{invalidInput: this.$v.title.$dirty && !this.$v.title.required}"
                        @change="onUpdateInputHandler"
                        id="title"
                        type="text"
                        v-if="this.edit"
                        v-model="title"
                    />
                    <p for="title" v-else>
                        {{this.title || "--"}}
                    </p>
                    <span
                        class="error invalid"
                        v-if="this.$v.title.$dirty && !this.$v.title.required"
                    >
                        Enter title!
                    </span>
                </div>
                <div class="name">
                    by {{this.$store.getters.info.name || "--"}}
                </div>
            </div>
            <div class="suggestion">
                 <textarea
                     :class="{invalidInput: this.$v.suggestion.$dirty && !this.$v.suggestion.required}"
                     @change="onUpdateInputHandler"
                     id="suggestion"
                     type="text"
                     v-if="this.edit"
                     v-model="suggestion"
                 />
                <p for="suggestion" v-else>{{this.suggestion || "--"}}</p>
                <span
                    class="error invalid"
                    v-if="this.$v.suggestion.$dirty && !this.$v.suggestion.required"
                >
                        Enter suggestion!
                </span>
            </div>
            <footer>
                <div v-if="this.edit">
                    <Button
                        @onClick="onEditCancelHandler"
                        btn-class="cancel"
                    >
                        Cancel
                    </Button>
                    <Button
                        @onClick="onEditSaveHandler"
                        btn-class="save"
                    >
                        Save
                    </Button>
                </div>
                <div v-else>
                    <img @click="editCampaignHandler" alt="edit" src="../assets/edit.png" title="edit"/>
                    <img @click="deleteCampaignHandler" alt="delete" src="../assets/delete.png" title="delete"/>
                </div>
            </footer>
        </main>
    </div>
</template>

<script>

    import Button from "./Button"
    import {required} from 'vuelidate/lib/validators';

    export default {
        name: 'Campaign',
        components: {
            Button
        },
        props: {
            data: {
                imgData: String,
                title: String,
                suggestion: String,
                site: String,
                id: String
            },
        },
        validations: {
            title: {required},
            suggestion: {required},
            // previewImage: {
            //     required,
            //     imageSizeValidation,
            //     imageRatioValidation
            // }
        },
        data: () => ({
            edit: false,
            title: null,
            suggestion: null,
            updated: {},
        }),
        mounted()
        {
            this.title = this.data.title;
            this.suggestion = this.data.suggestion;
        },
        methods: {
            async onEditSaveHandler()
            {
                if (this.$v.$invalid)
                {
                    this.$v.$touch();
                    return;
                }
                try
                {
                    const data = {...this.updated};
                    if (Object.keys(data).length)
                    {
                        await this.$store.dispatch('updateCampaign', {id: this.data.id, data});
                        this.$emit('change', {data, id: this.data.id});
                    }
                    this.edit = false;
                    this.updated = {};
                } catch (e)
                {
                    console.log("err", e);
                    throw e;
                }
            },
            onEditCancelHandler()
            {
                this.edit = false;
                this.title = this.data.title;
                this.suggestion = this.data.suggestion;
            },
            onUpdateInputHandler(e)
            {
                this[e.target.id] = e.target.value;
                this.updated[e.target.id] = e.target.value;
            },
            editCampaignHandler()
            {
                this.edit = true;
            },
            async deleteCampaignHandler()
            {
                try
                {
                    await this.$store.dispatch('deleteCampaign', this.data.id);
                    this.$emit('delete', this.data.id);
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
            padding: 15px 10px 0;
            overflow: hidden;

            .info {
                height: 66px;

                .title {
                    position: relative;

                    p, input {
                        width: 100%;
                        font-size: 19px;
                        color: #858585;
                        margin: 0;
                        text-transform: capitalize;
                        font-style: normal;
                        letter-spacing: 0.056px;
                        font-weight: bold;
                        line-height: 23px;
                    }
                }

                .name {
                    text-transform: capitalize;
                    font-style: normal;
                    letter-spacing: 0.056px;
                    font-weight: bold;
                    line-height: 23px;
                    font-weight: 600;
                    font-size: 12px;
                    color: rgba(133, 133, 133, 0.5);
                }
            }

            .suggestion {
                position: relative;
                width: 100%;
                height: 60px;
                margin: 14px 0;

                textarea, p {
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    resize: none;
                    overflow-x: hidden;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 13px;
                    line-height: 19px;
                    letter-spacing: 0.056px;
                    color: rgba(80, 80, 80, 0.7);
                }
            }

            footer {
                height: 50px;

                .cancel, .save {
                    height: 25px;
                    margin: 0;
                }

                > div {
                    padding: 15px 0 8px 0;
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

    }
</style>
