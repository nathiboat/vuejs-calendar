import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import Axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        currentYear: 2017,
        currentMonth: 6,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
                {description: 'random', date: moment('2017-06-06', 'YYYY-MM-DD')},
                {description: 'dfd', date: moment('2017-05-06', 'YYYY-MM-DD')},
                {description: 'fdfd', date: moment('2017-04-06', 'YYYY-MM-DD')}
            ],
        eventFormDate: moment()
    },
    mutations: {
        setCurrentMonth(state, payload){
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload){
            state.currentYear = payload;
        },
        eventFormPos(state, payload){
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload){
            state.eventFormActive = payload;
        },
        addEvent(state, payload){
           state.events.push(payload);
        },
        eventFormDate(state, payload){
            state.eventFormDate = payload;
        }
    },
    actions:{
        addEvent(context, payload){
            return new Promise((resolve, reject) =>{
                let obj = {
                    description: payload,
                    date: context.state.eventFormDate
                };

                Axios.post('/add_event', obj ).then(response => {
                    if(response.status === 200){
                        context.commit('addEvent', obj);
                        setTimeout
                        resolve();

                    }else{
                        reject();
                    }
                });
            });

        }
    }
})