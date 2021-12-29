import api from "./index";

const Achievements = {
    
    achievementAll: () => {
        return api.get("/achievements");
    },

    achievement: (id) => {
        return api.get(`achievements/${id}`);
    },

    create: (data) => {
        return api.post("/achievements", data);
    },

    update: (id, data) => {
        return api.put(`achievements/${id}`, data);
    },
    
};

export default Achievements;