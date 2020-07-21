import firebase from "firebase/app";

export default {
    actions: {
        async fetchCampaigns({dispatch})
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();

                const querySnapshot = await db
                    .collection('users')
                    .doc(`${uid}`)
                    .collection('campaigns')
                    .orderBy("created_at", 'desc')
                    .get();

                const campaignsData = [];
                querySnapshot.forEach(campaign => campaignsData.push({...campaign.data(), id: campaign.id}));

                return campaignsData;
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        }
        ,
        async createCampaign({dispatch}, objToCreate)
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();
                const docRef = await db
                    .collection('users')
                    .doc(`${uid}`)
                    .collection('campaigns')
                    .add({
                        ...objToCreate,
                        created_at: Date.now()
                    });

                const campaign = (await docRef.get()).data();

                return {
                    title: campaign.title,
                    imgData: campaign.imgData,
                    suggestion: campaign.suggestion,
                    site: campaign?.site,
                    id: docRef.id
                };
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        }
        ,
        async deleteCampaign({dispatch}, id)
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();

                await db
                    .collection('users')
                    .doc(`${uid}`)
                    .collection('campaigns')
                    .doc(id)
                    .delete();
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        }
        ,
        async updateCampaign({dispatch}, {id, data})
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();

                await db
                    .collection('users')
                    .doc(`${uid}`)
                    .collection('campaigns')
                    .doc(id)
                    .update(data);
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        }
        ,
    }
}
