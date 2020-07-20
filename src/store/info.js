import firebase from "firebase/app";

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo(state, info)
        {
            state.info = info;
        },
        clearInfo(state)
        {
            state.info = {};
        }
    },
    actions: {
        async getUserInfo({dispatch, commit})
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();
                if (uid)
                {
                    const info = await db.collection('users').doc(`${uid}`).get();
                    const infoData = info.data();
                    commit('setInfo', infoData);
                }
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        }
    },
    getters: {
        info: state => state.info
    }
}
