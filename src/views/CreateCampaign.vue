<template>
    <div class="createContainer">
        <div :style="{ textAlign: 'right'}">
            <Button
                @onClick="onLogoutHandler"
                btn-type="href"
                btnClass="logoutButton"
            >
                Logout
            </Button>
        </div>

        <div class="container self-center">
            <main>
                <header>
                    <div class="page-title">
                        Add cross-promotion information
                    </div>
                    <div class="page-text">
                        Add cross-promotion information that your partner campaigns are to post in their updates. You
                        can always edit this information to adjust it to your needs.
                    </div>
                    <div class="line"/>
                </header>
                <div class="main-body">
                    <div :style="{width: '208px'}">
                        <div class="imageContainer">
                            <input
                                @change=uploadImage
                                accept="image/jpeg"
                                id="file-upload"
                                type="file"
                            />
                            <img :src="(previewImage ? previewImage.imgData : null )" class="uploading-image"/>
                            <label
                                :class="{invalidInput: this.$v.previewImage.$dirty && !this.$v.previewImage.required}"
                                :style="{opacity: [previewImage ? 0 : 1 ]}"
                                class="custom-file-upload"
                                for="file-upload"
                            >
                                <img :src="uploadImgIcon"/>
                                <span>Upload your pic in JPG or PNG formats</span>
                            </label>
                            <span
                                class="error invalid"
                                v-if="this.$v.previewImage.$dirty && !this.$v.previewImage.required"
                            >
                                Upload image!
                            </span>
                            <span
                                class="error invalid"
                                v-else-if="this.$v.previewImage.$dirty && !this.$v.previewImage.imageSizeValidation"
                            >
                                Image size must be smaller then 500kb!
                            </span>
                            <span
                                class="error invalid"
                                v-else-if="this.$v.previewImage.$dirty && !this.$v.previewImage.imageRatioValidation"
                            >
                                Image aspect-ratio must be 1x1 format!
                            </span>
                        </div>
                        <div class="maxFileSize">
                            Max. file size 500kb. ratio 1x1 format
                        </div>
                    </div>
                    <div class="infoContainer">
                        <div class="titleContainer">
                            <input
                                :class="`${this.$v.title.$dirty && !this.$v.title.required ? 'invalidInput' : ''} ${title ? 'opacity1' : ''}`"
                                @focusin="focusedTitle = true"
                                @focusout="focusedTitle = (title || false)"
                                class="title"
                                type="text"
                                v-model="title"
                            />
                            <span
                                class="error invalid"
                                v-if="this.$v.title.$dirty && !this.$v.title.required"
                            >
                                Enter title!
                            </span>
                            <span
                                :class="{animatePlaceholder: (focusedTitle || title)}"
                                class="title-text"
                            >
                                Title
                            </span>
                        </div>

                        <div class="suggestionContainer">
                            <textarea
                                :class="{invalidInput: this.$v.suggestion.$dirty && !this.$v.suggestion.required}"
                                class="suggestion"
                                cols="auto"
                                placeholder="type suggestion..."
                                rows="5"
                                v-model="suggestion"
                            />
                            <span
                                class="error invalid"
                                v-if="this.$v.suggestion.$dirty && !this.$v.suggestion.required"
                            >
                                Enter suggestion!
                            </span>
                        </div>

                        <div class="siteContainer">
                            <input
                                :class="`${site ? 'opacity1' : '' }`"
                                @focusin="focusedSite = true"
                                @focusout="focusedSite = (site || false)"
                                class="site"
                                type="text"
                                v-model="site"
                            />
                            <span
                                :class="{animatePlaceholder: (focusedSite || site)}"
                                class="site-text"
                            >
                                Optional
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Button
                    @onClick="onCancelHandler"
                    btn-class="cancel"
                    btn-type="href"
                >
                    Cancel
                </Button>
                <Button
                    @onClick="onSaveHandler"
                    btn-class="save"
                >
                    Save
                </Button>
            </footer>
        </div>
    </div>
</template>

<script>
    import Button from "../components/Button";
    import {required} from 'vuelidate/lib/validators';
    import UploadImgIcon from "../assets/upload.png"

    const imageSizeValidation = (image) =>
    {
        return image && image.imgSize < 512000;
    }

    const imageRatioValidation = (image) =>
    {
        return image && image.imgAspectRatio === 1;
    }

    export default {
        name: "create-campaign",
        components: {Button},
        data: () => ({
            focusedTitle: false,
            focusedSite: false,
            title: null,
            suggestion: null,
            previewImage: null,
            site: null,
        }),
        validations: {
            title: {required},
            suggestion: {required},
            previewImage: {
                required,
                imageSizeValidation,
                imageRatioValidation
            },
            site: {}
        },
        computed: {
            uploadImgIcon: () => UploadImgIcon
        },
        methods: {
            uploadImage(e)
            {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>
                {
                    const img = new Image();
                    img.onload = () =>
                    {
                        this.previewImage = {
                            imgData: e.target.result,
                            imgSize: image.size,
                            imgAspectRatio: img.width / img.height
                        };
                    };
                    img.src = e.target.result;
                };
            },
            onCancelHandler()
            {
                this.$router.push('/campaigns');
            },
            async onSaveHandler()
            {
                if (this.$v.$invalid)
                {
                    this.$v.$touch();
                    return;
                }

                const objToCreate = {
                    title: this.title,
                    imgData: this.previewImage.imgData,
                    suggestion: this.suggestion
                };

                if (this.site)
                {
                    objToCreate.site = this.site;
                }

                try
                {
                    const campaign = await this.$store.dispatch('createCampaign', objToCreate);
                    this.$router.push('/campaigns')
                } catch (e)
                {
                    console.log(e);
                    throw e;
                }
            },
            async onLogoutHandler()
            {
                await this.$store.dispatch('logout');
                this.$router.push('/login');
            },
        }
    }
</script>


<style lang="scss" scoped>
    .createContainer {
        position: relative;
        width: 100%;
        height: 100%;

        .container {
            width: 824px;
            height: 598px;
            background: white;
            border-radius: 5px;

            main {
                height: calc(100% - 76px);
                padding: 40px 45px;

                .page-title {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 27px;
                    letter-spacing: 0.056px;
                    color: #858585;
                    text-align: left;
                    margin: 10px 0;
                    line-height: 35px;
                }

                .page-text {
                    line-height: 19px;
                    text-align: left;
                    max-width: 353px;
                    margin: 10px 0;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 13px;
                    letter-spacing: 0.056px;
                    color: #858585;
                }

                .main-body {
                    display: flex;

                    .maxFileSize {
                        display: inline-block;
                        margin-top: 20px;
                        width: 120px;
                        font-size: 11px;
                        text-align: center;
                        line-height: 15px;
                        letter-spacing: 0.056px;
                        color: #98A6AD;
                    }

                    .imageContainer {
                        width: 208px;
                        height: 208px;
                        background: #f4f4f4;
                        position: relative;
                        display: inline-block;

                        .uploading-image {
                            width: 208px;
                            height: 208px;
                            object-fit: contain;
                        }

                        input[type="file"] {
                            display: none;
                        }

                        .custom-file-upload {
                            cursor: pointer;
                            width: 100%;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;

                            > span {
                                padding: 0 35px;
                                font-style: normal;
                                font-weight: normal;
                                font-size: 12px;
                                line-height: 15px;
                                text-align: center;
                                letter-spacing: 0.056px;
                                color: #858585;
                            }

                            > img {
                                margin: 15px 0;
                            }
                        }
                    }

                    .infoContainer {
                        margin: 11px 44px;
                        display: inline-block;
                        width: 326px;

                        .titleContainer {
                            position: relative;
                            margin-bottom: 24px;
                            border: 1px solid var(--main-border-color);
                            border-radius: 5px;

                            .title {
                                height: 48px;
                                width: 100%;

                                padding: 14px;
                                z-index: 1;
                                opacity: 0.5;
                            }

                            .title-text {
                                background: white;
                                position: absolute;
                                top: 14px;
                                left: 12px;
                                transition: all 0.15s ease-out;
                                padding: 2px 6px;
                                font-size: 16px;
                                color: var(--main-border-color);
                                z-index: -1;
                            }
                        }

                        .suggestionContainer {
                            position: relative;

                            .suggestion {
                                border: 1px solid var(--main-border-color);
                                height: 126px;
                                width: 100%;
                                resize: none;
                                border-radius: 3px;
                                padding: 6px;
                            }
                        }

                        .siteContainer {
                            position: relative;
                            margin-top: 24px;
                            border: 1px solid var(--main-border-color);
                            border-radius: 5px;

                            .site {
                                z-index: 1;
                                opacity: 0.5;
                                height: 34px;
                                width: 100%;
                                padding: 6px 14px;
                            }

                            .site-text {
                                background: white;
                                position: absolute;
                                top: 6px;
                                left: 12px;
                                transition: all 0.15s ease-out;
                                padding: 2px 6px;
                                font-size: 16px;
                                color: var(--main-border-color);
                                z-index: -1;
                            }
                        }
                    }
                }
            }

            .cancel {
                color: var(--main-color);
            }

            .save {
                background: transparent;
                width: 90px;
                border: 1px solid #8DA0A9;
                color: #8DA0A9;
            }

            footer {
                border-top: 1px solid #D6DDE3;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 76px;
                padding: 0 35px;
            }
        }
    }


    .opacity1 {
        opacity: 1 !important;
    }

    .animatePlaceholder {
        background: white !important;
        font-size: 11px !important;
        top: -8px !important;
        left: 8px !important;
        opacity: 1 !important;
        z-index: 1 !important;
    }

    .logoutButton {
        width: 150px;
    }
</style>
