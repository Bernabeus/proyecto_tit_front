import api from "./index";

const AchievementDetails = {
    
    achievementsDetailsAll: () => {
        return api.get("/achievementsDetails");
    },

    achievementsDetails: (id) => {
        return api.get(`/achievementsDetails/${id}`);
    },

    create: (data) => {
        return api.post("/achievementsDetails", data);
    },

    update: (id, data) => {
        return api.put(`/achievementsDetails/${id}`, data);
    },
    
};

export default AchievementDetails;